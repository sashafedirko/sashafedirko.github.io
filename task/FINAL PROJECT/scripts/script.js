const menuIcon = document.getElementById("burger-icon");
const nav = document.getElementById("nav");




function handleClick() {
    menuIcon.classList.toggle('active');
    nav.classList.toggle('active');
}

menuIcon.addEventListener("click", handleClick);


