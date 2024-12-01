// Get the button and footer element
const backToTopButton = document.getElementById('backToTop');
const footer = document.querySelector('footer');

// Show the button when scrolled down 200px from the top
window.onscroll = function () {
  // Check if the page is scrolled down more than 200px
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }

  // Calculate the position of the footer and adjust button position
  const footerRect = footer.getBoundingClientRect();
  const footerHeight = footerRect.height;

  // If the button is too close to the footer, adjust its position
  if (footerRect.top < window.innerHeight) {
    backToTopButton.style.bottom = footerHeight + 20 + 'px';
  } else {
    backToTopButton.style.bottom = '20px';
  }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
