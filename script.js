window.onload = function() {
  initDragElement("window", "title-bar");
  initResizeElement("window");
};





function initDragElement(classr, draggable) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  var popups = document.getElementsByClassName(classr);
  var elmnt = null;
  var currentZIndex = 100; //TODO reset z index when a threshold is passed

  for (var i = 0; i < popups.length; i++) {
    var popup = popups[i];
    var header = getHeader(popup);

    popup.onmousedown = function() {
      this.style.zIndex = "" + ++currentZIndex;
    };

    if (header) {
      header.parentPopup = popup;
      header.onmousedown = dragMouseDown;
    }
  }

  function dragMouseDown(e) {
    elmnt = this.parentPopup;
    elmnt.style.zIndex = "" + ++currentZIndex;

    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    if (!elmnt) {
      return;
    }

    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getHeader(element) {
    var headerItems = element.getElementsByClassName(draggable);

    if (headerItems.length === 1) {
      return headerItems[0];
    }

    return null;
  }
}

function initResizeElement(classr) {
  var popups = document.getElementsByClassName(classr);
  var element = null;
  var startX, startY, startWidth, startHeight;

  for (var i = 0; i < popups.length; i++) {
    var p = popups[i];

    var right = document.createElement("div");
    right.className = "resizer-right";
    p.appendChild(right);
    right.addEventListener("mousedown", initDrag, false);
    right.parentPopup = p;

    var bottom = document.createElement("div");
    bottom.className = "resizer-bottom";
    p.appendChild(bottom);
    bottom.addEventListener("mousedown", initDrag, false);
    bottom.parentPopup = p;

    var both = document.createElement("div");
    both.className = "resizer-both";
    p.appendChild(both);
    both.addEventListener("mousedown", initDrag, false);
    both.parentPopup = p;
  }

  function initDrag(e) {
    element = this.parentPopup;

    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(
      document.defaultView.getComputedStyle(element).width,
      10
    );
    startHeight = parseInt(
      document.defaultView.getComputedStyle(element).height,
      10
    );
    document.documentElement.addEventListener("mousemove", doDrag, false);
    document.documentElement.addEventListener("mouseup", stopDrag, false);
  }

  function doDrag(e) {
    element.style.width = startWidth + e.clientX - startX + "px";
    element.style.height = startHeight + e.clientY - startY + "px";
  }

  function stopDrag() {
    document.documentElement.removeEventListener("mousemove", doDrag, false);
    document.documentElement.removeEventListener("mouseup", stopDrag, false);
  }
}


// TESTING
function tabWork() {
  const tabs = document.querySelectorAll("menu[role=tablist]");

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

    tabButtons.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        tabButtons.forEach((button) => {
          if (
            button.getAttribute("aria-controls") ===
            e.target.getAttribute("aria-controls")
          ) {
            button.setAttribute("aria-selected", true);
            openTab(e, tab);
          } else {
            button.setAttribute("aria-selected", false);
          }
        });
      })
    );
  }
}

function openTab(event, tab) {
  const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
  articles.forEach((p) => {
    p.setAttribute("hidden", true);
  });
  const article = tab.parentNode.querySelector(
    `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
  );
  article.removeAttribute("hidden");
}

// WINDOW TYPES

var game = `<div class="window noselect">
      <div class="title-bar"><div class="title-bar-text">Bit Planes</div><div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
      </div></div>
      <div class="window-body flexible" style="padding:0;margin:0;">
        <iframe class="flexing" src="https://medv.io/bit-planes/">
      </div>
    </div>`
var roulette = `<div class="window noselect">
      <div class="title-bar"><div class="title-bar-text">Bookmarklet Roulette</div><div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
      </div></div>
      <div class="window-body flexible" style="padding:0;margin:0;min-width:854px;min-height:480px;">
        <iframe style="overflow:none;margin:0;padding:0;"class="flexing" src="https://git.nihilogic.dk/wolf3d/">
      </div>
    </div>`
var about = `<div class="window noselect">
      <div class="title-bar"><div class="title-bar-text">aboutme.html</div><div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>

      </div></div>
      <div class="window-body flexible" style="margin:5px;padding:0;">
        <section class="tabs flexing">
          <menu role="tablist" aria-label="Sample Tabs">
            <button role="tab" aria-selected="true" aria-controls="tab-A">About Me</button>
            <button role="tab" aria-controls="tab-B">Projects</button>
            <button role="tab" aria-controls="tab-C">Contact</button>
          </menu>
          <!-- the tab content -->
          <article role="tabpanel" id="tab-A" style="margin-right:10px;">
            <h3>About Me</h3>
            <p>
             I am a student programmer who codes on <a src="https://replit.com">Replit</a>. I mainly program in <a src="https://python.org" target="_blank">Python</a> but also code in <a src="https://www.w3.org/html/" target="_blank">HTML</a>, <a src="https://www.w3.org/css/" target="_blank">CSS</a>, and <a src="https://www.javascript.com" target="_blank">JavaScript</a>.
            </p>
          </article>
          <article role="tabpanel" hidden id="tab-B">
            <h3>Projects</h3>
            <p>My projects are actually around on this webpage. Click around and find them!</p>

          </article>
          <article role="tabpanel" hidden id="tab-C">
            <h3>Contacts</h3>
            <p>Discord: LoremIpsum<br>Email:LoremIpsum@dolor.com<br>Phone Number: 012-345-6789</p>
          </article>
        </section>
      </div>
    </div>`
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

function createNewWindow(windowType) {
  var theWindow = createElementFromHTML(windowType)
  document.body.appendChild(theWindow);


  tabWork();
  initDragElement("window", "title-bar");
  initResizeElement("window");
}
function openFile(path, ext) {
  if (ext == "jpg" || ext == "png"){
    return `<div class="window noselect">
      <div class="title-bar"><div class="title-bar-text">aboutme.html</div><div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
      </div></div>
      <div class="window-body flexible" style="margin:0;padding:0;">
        <img class="flexing" src="${path}" style="width:300px;height:auto;">
      </div>
    </div>`
  }
}
$( function() {
  // $( ".iconClickable" ).draggable();
});
