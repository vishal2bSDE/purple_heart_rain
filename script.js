function createHeart(){
    const heart =document.createElement("div");
    heart.classList.add("heart");
    heart.style =  
    heart.innerHTML ="💜";
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=Math.random()*2+3+"s";
    document.body.appendChild(heart);
    // setTimeout(()=>{
    //     document.body.heart.remove();
    // },5000);
}
setInterval(createHeart,200);
