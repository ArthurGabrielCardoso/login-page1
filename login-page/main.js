let container = document.querySelector('div.login');
let input = document.querySelector('input.senha');
let icon = document.querySelector('img.imagem11');

icon.addEventListener('click', function() {
  container.classList.toggle('visible');
  if(container.classList.contains('visible')) {
    icon.src = 'images/view.png';
    input.type = 'text';
  }
  else {
    icon.src = 'images/hidden.png';
    input.type = 'password';
  }
});