// HAKU COIN Launch Countdown

const launchDate = new Date("July 20, 2026 20:00:00").getTime();

const countdown = setInterval(function() {
  
  const now = new Date().getTime();
  const distance = launchDate - now;
  
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "HAKU IS LIVE 🚀";
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  const element = document.getElementById("countdown");
  
  if (element) {
    element.innerHTML =
      days + "D " +
      hours + "H " +
      minutes + "M " +
      seconds + "S";
  }
  
}, 1000);


// Efek muncul saat scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  
  sections.forEach(section => {
    
    const position = section.getBoundingClientRect().top;
    const screen = window.innerHeight;
    
    if (position < screen - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
    
  });
  
});