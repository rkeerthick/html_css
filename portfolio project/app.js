let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

const openTab = (tabName) => {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.target.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

let sidebar = document.getElementById("sidebar");

const openMenu = () => {
    sidebar.style.right = "0";
};

const closeMenu = () => {
    sidebar.style.right = "-200px";
};
