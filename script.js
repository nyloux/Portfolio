function myFunction(x) {
  x.classList.toggle("change");
}
function itemsClick() {
  navItems.classList.remove("nav-active");
  menu.classList.toggle("change");
}

const discordLogo = document.querySelector(".discord-logo");
const servdisc = document.querySelector(".scroll_to_top");
function myServdisc(x) {
  discordLogo.classList.toggle("rotate");
}

const menu = document.querySelector(".menu");
const modal = document.querySelector(".modal");
const navItems = document.querySelector(".nav-items");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-items li a");
document.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((item) => {
    item.classList.remove("li-active");

    if (item.getAttribute("href") == "#" + current) {
      item.classList.add("li-active");
    }
  });
});

servdisc.addEventListener("click", () => {
  modal.classList.toggle("active");
  servdisc.classList.toggle("focus");
});
menu.addEventListener("click", function () {
  navItems.classList.toggle("nav-active");
});

/* Form */
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_0l9h4mq";
  const templateID = "template_sz5ogb6";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully !");
    })
    .catch((err) => console.log(err));
}
