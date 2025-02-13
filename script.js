const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

function jumpingButton() {
  const directions = [
    { x: 60, y: 0 },
    { x: -60, y: 0 },
    { x: 0, y: 60 },
    { x: 0, y: -60 },
    { x: 60, y: 60 },
    { x: -60, y: -60 },
    { x: 60, y: -60 }, 
    { x: -60, y: 60 }, 
  ];
  
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];

  const currentX = noButton.offsetLeft;
  const currentY = noButton.offsetTop;
  
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  
  let newX = Math.max(0, Math.min(maxX, currentX + randomDirection.x));
  let newY = Math.max(0, Math.min(maxY, currentY + randomDirection.y));

  noButton.style.position = "absolute"; 
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const card = document.querySelector(".card");
  const body = document.querySelector("body");

  container.addEventListener("mouseenter", () => {
      card.style.transition = "top 0.5s";
      card.style.top = "-90px";
  });

  container.addEventListener("mouseleave", () => {
      card.style.transition = "top 0.5s";
      card.style.top = "0";
  });

  container.addEventListener("click", () => {
      card.style.transition = "top 0.5s";
      card.style.top = "-90px";
  }, );

  body.addEventListener("click", () => {
      card.style.transition = "top 0.5s";
      card.style.top = "0";
  }, true);

  noButton.addEventListener("mouseover", () => jumpingButton());
  // noButton.addEventListener("mouseenter", () => jumpingButton());
  noButton.addEventListener("click", () => {
    jumpingButton();
    alert("но но но, містер Булочка")
  });

  yesButton.addEventListener("click", () => {
    alert("Кохаю тебе, Булочка!");
  });
});