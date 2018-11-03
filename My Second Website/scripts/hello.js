document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
      initApplication();
    }
  }
  //this is listening to find out if the checkbox element has changed state
  function initApplication() {
    let el = document.getElementById("rightOrwrong");
    console.log(el);
    el.addEventListener("change", function() {
    console.log(el.checked);
    let el2 = document.getElementById("result");
    el2.innerHTML ="checked:" + el.checked;

    }); 
  }