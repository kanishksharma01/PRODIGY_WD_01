// Handle scrolling to change navbar styles
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Handle hover effect for menu items
const menuItems = document.querySelectorAll('.panel-ops p');
menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.backgroundColor = '#f1f1f1';
    item.style.color = '#0073e6';
  });

  item.addEventListener('mouseleave', () => {
    item.style.backgroundColor = '';
    item.style.color = '';
  });
});
