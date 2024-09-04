
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function blinker()
  {
    if(document.getElementById("blink"))
    {
        var d = document.getElementById("blink") ;
        d.style.color= (d.style.color=='blue'?'white':'blue');
        setTimeout('blinker()', 900);
    }
}