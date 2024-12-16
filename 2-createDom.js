//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const para =document.querySelector('p');
const paraEl=document.querySelector('#para');
const paraEle =document.querySelectorAll('p');
paraEle.forEach(p=>console.log(p.innerText));
paraEle[3].textContent="lorem impson";
paraEle.forEach(par=>par.classList.add('para'));
paraEle.forEach(par=>{
    par.style.color="red";
    par.style.background="white";
    par.style.border="1px solid";
    par.style.fontSize="2 px";
});
for (let i = 0; i < paraEle.length ; i++) {
   if(i%2===0){
    paraEle[i].style.color="green"
   }else{
    paraEle[i].style.color="red"
   }
    
}