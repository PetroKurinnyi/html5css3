// one-page navigation menu

let handle = document.getElementsByClassName('handle')[0];
let ul = document.getElementsByClassName('one-page-nav')[0];
let header = document.getElementsByClassName('one-page-header')[0];
let container = header.children[0];

handle.addEventListener(
  'click',
  function() {
    ul.classList.toggle('showing');
    if (ul.classList[1] == 'showing') {
      handle.innerHTML = 'HIDE MENU';
      container.style.gridTemplateRows = '100px 570px';
      header.style.display = 'flex';
    } else {
      handle.innerHTML = 'MENU';
      container.style.gridTemplateRows = '100px 400px';
      header.style.display = 'block';
    }
  },
  false
);
