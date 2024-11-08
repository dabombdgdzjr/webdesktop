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
    
  };

  function stopDrag() {
    document.documentElement.removeEventListener("mousemove", doDrag, false);
    document.documentElement.removeEventListener("mouseup", stopDrag, false);
  }
}
function initResizeElementWidthOnly(classr) {
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
    
  };

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

var credits = `<div class="window noselect resizable draggable glass">
    <div class="title-bar draghandle"><div class="title-bar-text">Credits</div><div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
    </div></div>
    <div class="window-body flexible has-space">
      <p>Windows 7 Icons<a href="https://www.deviantart.com/mucksponge/art/Windows-7-Official-256x256-Icons-PNG-123316986">Source</a></p>
      <p>Windows XP Visual Guidelines<a href="http://interface.free.fr/Archives/GUI_Xp.pdf">Source</a></p>
      <p>GUIdebook <a href="https://guidebookgallery.org/screenshots/winxppro">Source</a></p>
    </div>
  </div>`
var about = `<div class="window noselect resizable draggable needMinHeight active">
      <div class="title-bar draghandle"><div class="title-bar-text">aboutme.html</div><div class="title-bar-controls">
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
             I am a student programmer. I program in <a href="https://python.org" target="_blank">Python</a>, <a src="https://www.w3.org/html/" target="_blank">HTML</a>, <a src="https://www.w3.org/css/" target="_blank">CSS</a>, and <a src="https://www.javascript.com" target="_blank">JavaScript</a>.
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

$(initDraggable = function() {
  $(".draggable").draggable({
    handle: '.draghandle',
    cursor: 'move',
    stack: ".window",
    distance: 0
  });
});
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
  /*initDragElement("draggable", "draghandle");*/
  initDraggable();
  initResizeElement("resizable");
  initResizeElementWidthOnly("resizableWidth");
}
function openFile(path, ext) {
  if (ext == "img"){
    console.log(path)
    return `<div class="window active noselect resizableWidth draggable glass" style="width:500px;">
    <div class="title-bar draghandle">
      <div class="title-bar-text">A window with contents</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
      </div>
    </div>
    <div class="window-body" style="justify-content:center;text-align:center;">
    <ul role="menubar" class="can-hover">
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    File
    <ul role="menu">
      <li role="menuitem">
        <a href="#menubar">
          Open <span>Ctrl+O</span>
        </a>
      </li>
      <li role="menuitem">
        <a href="${path}" download>
          Save <span>Ctrl+S</span>
        </a>
      </li>
      <li role="menuitem" class="has-divider">
        <a href="${path}">
          Save As... <span>Ctrl+Shift+S</span>
        </a>
      </li>
      <li role="menuitem"><a href="#menubar">Exit</a></li>
    </ul>
  </li>
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    Print
    <ul role="menu">
      <li role="menuitem"><a href="#menubar">Undo</a></li>
    </ul>
  </li>
  <li role="menuitem" tabindex="0" aria-haspopup="false">E-Mail</li>
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    Burn
    <ul role="menu">
      <li role="menuitem"><a href="#menubar">View Help</a></li>
      <li role="menuitem"><a href="#menubar">About</a></li>
    </ul>
  </li>
  <li role="menuitem" tabindex="0" aria-haspopup="true">
    Open
    <ul role="menu">
      <li role="menuitem"><a href="#menubar">View Help</a></li>
      <li role="menuitem"><a href="#menubar">About</a></li>
    </ul>
  </li>
</ul>
      <img src="${path}" style="width:calc(100% - 6px);height:auto;margin:0;padding:0;"></img>
    </div>
  </div>`
  }
  if (ext="txt") {
    return `<div c`
  }
}
/*
<div class="window noselect draggable resizableWidth active">
      <div class="title-bar draghandle"><div class="title-bar-text">Image Viewer - ${path}</div><div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
      </div></div>
      <div class="window-body" style="margin:0px;padding:0;width:100%;height:100%;justify-content:center;text-align:center;">
      
      </div>
    </div>
    */

