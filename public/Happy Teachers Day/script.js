document.addEventListener('DOMContentLoaded', () => {
  const unmuteButton = document.getElementById('unmuteButton');
  const audio = document.querySelector('audio');
  const txt = `Happy Teachers Day!`;
  const content = document.getElementById('content');
  const outputDiv = document.getElementById('text');
  const pictureDiv = document.querySelector('.picture');
  const nameDiv = document.querySelector('.name');

  unmuteButton.addEventListener('click', () => {
      // Show content and play audio
      content.style.display = 'flex'; // Change display to flex
      audio.muted = false;
      audio.play();
      unmuteButton.style.display = 'none'; 

      // Trigger animations
      pictureDiv.classList.add('animate-fadeIn');
      nameDiv.classList.add('animate-scaleUp');

      // Clear previous text if any
      outputDiv.innerHTML = '';

      let i = 0;
      const timerId = setInterval(() => {
          outputDiv.innerHTML += txt.charAt(i);
          i++;
          if (i === txt.length) {
              clearInterval(timerId);
          }
      }, 50);
  });
});

// After the button click event
pictureDiv.addEventListener('animationend', () => {
  pictureDiv.classList.remove('animate-fadeIn');
});

nameDiv.addEventListener('animationend', () => {
  nameDiv.classList.remove('animate-scaleUp');
});
