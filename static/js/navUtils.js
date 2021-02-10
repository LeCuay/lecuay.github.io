function onScrollDisableTransparency() {
  let navBar = document.querySelector(".navbar");
  console.log(navBar);
}

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    onScrollDisableTransparency();
  }
};
