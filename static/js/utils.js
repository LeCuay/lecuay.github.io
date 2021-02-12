function onReady(func, element = document) {
  element.onreadystatechange = function () {
    if (element.readyState === "interactive") {
      func();
    }
  };
}
