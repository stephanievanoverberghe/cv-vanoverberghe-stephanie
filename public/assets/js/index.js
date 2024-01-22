const navItems = document.getElementById('nav-items');
const navItem = document.querySelectorAll('.nav-item');
console.log(navItem);

// Menu burger
// Open and disabled Menu

iconBurger.addEventListener('click', () => {
    if (navItems.style.display === "none") {
        navItems.style.display = "block";
    } else {
        navItems.style.display = "none";
    }
});

// Disabled Menu with nav-item

// navItem.addEventListener('click', () => {
//     if (navItems.style.display === "block") {
//         navItems.style.display = "none";
//     }
// });