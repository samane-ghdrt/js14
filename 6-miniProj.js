//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red
const h1 = document.querySelector('h1');
setTimeout(()=>{
    h1.style.backgroundColor="green"
},1000);
setTimeout(()=>{
     h1.style.backgroundColor="yellow"
},2000);
setTimeout(()=>{
     h1.style.backgroundColor="red"
},3000);