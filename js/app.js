document.addEventListener("DOMContentLoaded", function() {
  let btn = document.getElementById("cash_btn");
  btn.addEventListener("click", function() {
    // adds sound after click on btn
    let cashSound = new Audio();
    cashSound.src = "../cash.wav";
    cashSound.play();
    // prevents page reload on submit
    document.getElementById("form").addEventListener("click", function(e) {
      e.preventDefault();
    });
    tipCalc();
  });
});
function tipCalc() {
  let price = document.getElementById("price").value,
    // 1% = 0.01
    tip = document.getElementById("tip").value * 0.01,
    paidOutput = document.getElementById("bill");
  // the result will be showed in <p id='bill'> element only if input's value != 0
  if (price != "" && tip != "") {
    paidOutput.innerHTML = "$" + (Number(price) * Number(tip) + Number(price));
  } else {
    paidOutput.innerHTML = "Please, try again";
  }
}
