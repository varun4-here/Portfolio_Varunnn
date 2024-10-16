const links = document.querySelectorAll('.nav-link');
let currentIndex = 0;
function updateActiveLink() {
  links.forEach((link, index) => {
    link.classList.toggle('active', index === currentIndex);
  });
}
function handleKeyDown(event) {
  if (event.key === 'ArrowDown') {
    currentIndex = (currentIndex + 1) % links.length;
    updateActiveLink();
  } else if (event.key === 'ArrowUp') {
    currentIndex = (currentIndex - 1 + links.length) % links.length;
    updateActiveLink();
  } else if (event.key === 'Enter') {
    links[currentIndex].click();
  }
}
function handleClick(event) {
  links.forEach((link, index) => {
    if (link === event.target) {
      currentIndex = index;
      updateActiveLink();
      link.click();
    }
  });
}
document.addEventListener('keydown', handleKeyDown);
links.forEach(link => link.addEventListener('click', handleClick));
updateActiveLink();
