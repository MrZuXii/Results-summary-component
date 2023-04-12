const circleScore = document.querySelector('.circle--score');
const itemsScore = document.querySelectorAll('.item--score');
fetch("data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(e => {
      let element = document.querySelector(`#${e.category}`);
      element.querySelector('.item--left img').src = e.icon;
      element.querySelector('.item--left p').textContent = e.category;
      element.querySelector('.item--score').textContent = e.score;
    })
    circleScore.textContent = ((data.reduce((p, c) => p + c.score, 0)) / 4).toFixed();
  });