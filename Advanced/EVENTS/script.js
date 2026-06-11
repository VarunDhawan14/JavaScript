// let button1 = document.querySelector("#btn1");
// // btn1.onclick = (evt) => {
// //    console.log("Button was clicked!");
// //    console.log(evt);
// //    console.log(evt.type);
// //    console.log(evt.target);
// //    console.log(evt.clientX,evt.clientY)
// // }

// button1.addEventListener("click",()=>{
//    console.log("Button1 was clicked!");
// })
// button1.addEventListener("lclick",()=>{
//    console.log("Button1 was clicked - handler 2!");
// })


// let button2 = document.querySelector("#btn2");

// // btn2.ondblclick = (evt) => {
// //    console.log("Button was clicked two times!");
// // }

// let div = document.querySelector("#mouse-over");

// // div.onmouseover = () =>{
// //    console.log("you touched me!");
// // }

// div.addEventListener("mouseover",()=>{
//    console.log("you touched me!")
// })

// // ------- how to remove event ---- by variable

// let remove = ()=>{
//    console.log("Button1 was clicked two times!");
// }

// button1.removeEventListener("click",remove);


// ------ DARK MODE And LIGHT MODE Challenge -------

let modebutton = document.querySelector("#mode")
let body = document.querySelector("body")
let currentmode = "light" //light mode -> dark mode

modebutton.addEventListener("mouseover",()=>{
   if ( currentmode === "light"){
      currentmode = "Dark"
      body.classList.add("dark")
      body.classList.remove("light")
   }else {
      currentmode = "light"
      body.classList.add("light")
      body.classList.remove("darkṇ")
   }
   console.log(currentmode)
})