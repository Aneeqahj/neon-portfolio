let nav = document.querySelectorAll(".nav");

function toggleNav() {
  // LOOP THROUGH THE NAV AND REMOVE THE nav-active CLASS
  nav.forEach((nav_item) => {
    nav_item.addEventListener("click", nav_item.classList.remove("active-nav"));
  });
}

console.log(nav);

nav.forEach((nav_item) => {
  nav_item.addEventListener("click", (e) => {
    toggleNav();

    // ADD THE nav-active CLASS TO THE CLICKED ITEM
    nav_item.classList.add("active-nav");
  });
});

// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");
//   const offsetTop = document.querySelector(href).offsetTop;

//   scroll({
//     top: offsetTop,
//     behavior: "smooth",
//   });
// }
