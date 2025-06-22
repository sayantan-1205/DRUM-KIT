
window.addEventListener("keydown", (e) => {
    playSound(e.keyCode);
  });
  
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    
    key.addEventListener("click", () => {
      const keyCode = key.getAttribute("data-key");
      playSound(keyCode);
    });
  
   
    key.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "transform") return;
      key.classList.remove("playing");
    });
  });
  
  
  function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio || !key) return;
  
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
  
  window.onload = function () {
    alert("Welcome to the Virtual Drum Kit!\nPress A, S, D, F, G, H, or J to play.");
  };
  