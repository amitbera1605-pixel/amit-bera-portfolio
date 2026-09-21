document.getElementById('year').textContent = new Date().getFullYear();

const typingText = document.querySelector('.typing-text');
if (typingText) {
  const text = typingText.dataset.text || typingText.textContent.trim();
  typingText.textContent = '';
  let index = 0;

  const typeCharacter = () => {
    if (index <= text.length) {
      typingText.textContent = text.slice(0, index);
      index += 1;
      setTimeout(typeCharacter, 35);
    }
  };

  setTimeout(typeCharacter, 400);
}
