

document.querySelectorAll("div").forEach((div) => {
  div.onclick = () => {
    sendMsg(event.target.id);
  }
})

function sendMsg(msgId) {
  let msg = document.getElementById(msgId).innerText;
  let phone = prompt("Enter destination number with Country and Area code:");
  let link = `https://api.whatsapp.com/send/?phone=${phone}&text=${msg}`;
  window.open(link);
}



// "https://api.whatsapp.com/send/?phone=" + numero + "55&text=" + msg;

// document.querySelectorAll("div").forEach((div) => {
//   div.onclick = () => {
//     mandaZap(this);
//     alert("Hello");
//   }
// })
//
// function mandaZap(event) {
//   console.log(event);
// }


// let mBox = document.querySelectorAll(".msgBox")
//
// mBox.forEach((msgBox) => {
//   msgBox.addEventListener("click", () => {
//     mandaZap(this);
//   });
// });
//
// function mandaZap(event) {
//   console.log(event);
//   alert("Hello");
// }


// document.querySelectorAll("div").forEach(function(cbox){
//   cbox.addEventListener("click", function(){
//   alert("Hello");
// })});


// const mbox = document.querySelectorAll(".msgBox");
//
//  for (let i = 0; i < mbox.length; i++) {
//      mbox[i].addEventListener("click", function() {
//        alert("Hello");
//      });
//  }
