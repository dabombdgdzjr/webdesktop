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

var appearance = `<div class="window noselect resizable needMinHeight">
      <div class="title-bar draghandle"><div class="title-bar-text">Display Properties</div><div class="title-bar-controls">
        <button aria-label="Help"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>

      </div></div>
      <div class="window-body flexible" style="margin:10px;padding:0;">
        <section class="tabs flexing">
          <menu role="tablist" aria-label="Sample Tabs">
            <button role="tab" aria-selected="true" aria-controls="tab-A">Themes</button>
            <button role="tab" aria-controls="tab-B">Desktop</button>
            <button role="tab" aria-controls="tab-C">Screen Saver</button>
            <button role="tab" aria-controls="tab-D">Appearance</button>
            <button role="tab" aria-controls="tab-E">Settings</button>
          </menu>
          <article role="tabpanel" id="tab-A">
          <p>A theme is a background plus a set of sounds, icons, and other elements to help you personalize your computer with one click.<br><br>Theme:</p>
          <select>
            <option>Windows XP</option>
            <option>Oive Green</option>
            <option>Silver</option>
          </select>
          <button>Save As...</button>
          <button disabled>Delete</button>
          <br><br>
          <p>Sample:</p>
          <div class="preview">
            <div class="window" style="width:280px;height:100px;left:50px;bottom:100px;">
              <div class="title-bar">
                <div class="title-bar-text">Active Window</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div class="window-body">
                <p>There's so much room for activities!</p>
            </div>
</div>
          </div>

          </article>
          <article role="tabpanel" hidden id="tab-B">
          <div class="computerHolder">
            <img src="/images/icons/computerBig.png" class="bigComputer">
          </div>
          <p>Background</p>
          <ul role="listbox" class="has-shadow has-hover">
            <li role="option"><img src="images/icons/TXT.png" style="width:16px;height:16px;">[None]</li>
            <li role="option" aria-selected="true">linusXP.png</li>
            <li role="option">liniss.png</li>
            <li role="option">linus1.jpeg</li>
            <li role="option">linux2.jpeg</li>
          </ul>
          </article>
          <artice role="tabpanel" hidden id="tab-C"></article>
        </section>
        <button style="float:right;margin-bottom:10px;margin-left:5px;margin-right:5px;">Apply</button><button style="float:right;margin-bottom:10px;margin-left:5px;margin-right:5px;" onclick="this.parentNode.parentNode.remove(this)">Cancel</button><button style="float:right;margin-bottom:10px;margin-left:5px;margin-right:5px;" onclick="this.parentNode.parentNode.remove(this)">OK</button>
      </div>
    </div>`
var roulette = `<div class="window noselect resizable draggable">
      <div class="title-bar draghandle"><div class="title-bar-text">Bookmarklet Roulette</div><div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
      </div></div>
      <div class="window-body flexible" style="padding:0;margin:0;min-width:854px;min-height:480px;">
        <iframe style="overflow:none;margin:0;padding:0;"class="flexing" src="https://git.nihilogic.dk/wolf3d/">
      </div>
    </div>`
var credits = `<div class="window noselect resizable draggable">
    <div class="title-bar draghandle"><div class="title-bar-text">Credits</div><div class="title-bar-controls">
      <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
    </div></div>
    <div class="window-body flexible" style="padding:0;margin:10px;min-width:854px;min-height:480px;">
      <p>FS-Tahoma-8px <a href="https://fontstruct.com/fontstructions/show/1888398/fs-tahoma-8px-9">Source</a> <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">License</a></p>
      <p>Windows XP Visual Guidelines<a href="http://interface.free.fr/Archives/GUI_Xp.pdf">Source</a></p>
      <p>GUIdebook <a href="https://guidebookgallery.org/screenshots/winxppro">Source</a></p>
    </div>
  </div>`
var about = `<div class="window noselect resizable draggable needMinHeight">
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
  /*initDragElement("draggable", "draghandle");*/
  $(function() {
    $(".window").draggable({
      handle: '.draghandle',
      cursor: 'move',
      stack: ".window",
      distance: 0
    });
  });
  initResizeElement("resizable");
  initResizeElementWidthOnly("resizableWidth");
}
function openFile(path, ext) {
  if (ext == "jpg" || ext == "png"){
    return `<div class="window noselect draggable resizableWidth">
      <div class="title-bar draghandle"><div class="title-bar-text">Image Viewer - ${path}</div><div class="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" onclick="this.parentNode.parentNode.parentNode.remove(this)"></button>
      </div></div>
      <!--<div class="window-body" style="background: url('/images/photos/DSC_0006.JPG') no-repeat center center fixed;margin:0px;padding:0;width:100%;height:100%;">-->
      <div class="window-body" style="margin:0px;padding:0;width:100%;height:100%;justify-content:center;text-align:center;">
      <img src="${path}" style="width:calc(100% - 6px);height:auto;margin:0;padding:0;margin-left:-1px;margin-bottom:-3px;">
      </div>
    </div>`
  }
}