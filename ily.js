document.getElementById("btn").onclick = function () {
  let text = document.getElementById("txt").value;

  if (text === "Kritika") {
    document.getElementById("pr").textContent = "I love you";
    document.getElementById("btn2").style.display= "inline-block";
    document.getElementById("heart").classList.add("show");
  } else {
    document.getElementById("pr").textContent = "youre not the chosen one";
    document.getElementById("btn2").style.display="none";
    document.getElementById("heart").classList.remove("show");
  }
}
document.getElementById("btn2").onclick= function(){
   let music = document.getElementById("music");
   music.play();
    document.getElementById("pr2").textContent="i love you moreeeee";
    document.getElementById("about-her").style.display = "block";

    
}//sad