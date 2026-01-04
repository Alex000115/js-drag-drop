const box = document.getElementById('box');
const drop = document.getElementById('drop');

box.addEventListener('dragstart', e=>{
  e.dataTransfer.setData('text', 'box');
});

drop.addEventListener('dragover', e=>{
  e.preventDefault();
});

drop.addEventListener('drop', ()=>{
  drop.appendChild(box);
});
