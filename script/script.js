const container = document.querySelector('#container');

const button = document.getElementById('btnGrid');
button.addEventListener('click', function () {
  let list = document.getElementById('container');
  console.log(list);
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  let gridSize = prompt('Please enter the desired grid size. Range 1 - 100.');
  let numOfGrids = gridSize * gridSize;
  if (gridSize > 100 || gridSize < 0) {
    alert('Please enter an appropriate value.');
  } else {
    for (let i = 0; i < numOfGrids; i++) {
      const content = document.createElement('div');
      content.classList.add('content');
      container.appendChild(content);
    }
  }
  let gridDimension = 100 / gridSize;
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${gridDimension}vw)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${gridDimension}vw)`;
  let gridOpacity = 0.8;
  document.querySelectorAll('.content').forEach((item) =>
    item.addEventListener('mouseenter', function (event) {
      event.target.style.backgroundColor += `rgba(255, 0, 0, ${gridOpacity})`;
    })
  );
});
