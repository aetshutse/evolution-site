// Simple JavaScript to animate timeline events when they scroll into view
const events = document.querySelectorAll('.event');

window.addEventListener('scroll', function() {
  events.forEach(event => {
    const position = event.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight) {
      event.style.transform = 'translateX(0)';
      event.style.opacity = '1';
    }
  });
});