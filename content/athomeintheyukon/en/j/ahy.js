startList = function () {
  if (document.all && document.getElementById) {
    navRoot = document.getElementById("nav");
    for (i = 0; i < navRoot.childNodes.length; i++) {
      node = navRoot.childNodes[i];
      if (node.nodeName == "LI") {
        node.onmouseover = function () {
          this.className += " over";
        };
        node.onmouseout = function () {
          this.className = this.className.replace(" over", "");
        };
      }
    }
  }
};
window.onload = startList;
function MM_jumpMenu(targ, selObj, restore) {
  //v3.0
  eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
  if (restore) selObj.selectedIndex = 0;
}
function poppic(url) {
  newwindow = window.open(
    url,
    "name",
    "height=480px,width=540,left=100,top=20,directories=no,resizable=yes,scrollbars=no,status=no,toolbar=no"
  );
}
