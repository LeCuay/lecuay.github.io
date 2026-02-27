const randomPick = (min, max) => Math.random() * (max - min) + min;

document.addEventListener("DOMContentLoaded", () => {
  const allGIFs = [
    "purpleOcean", "bucketRainAnime", "shore", "waterWorld", "thunder",
    "lain1", "lain2",
  ];
  const GIF = allGIFs[Math.floor(Math.random() * allGIFs.length)];
  const gifURL = `url("/littlegarden/static/media/gif/${GIF}.gif")`;

  // document.body.style.backgroundImage = gifURL;
  document.getElementById("bgImage").style.backgroundImage = gifURL;
});

document.addEventListener("DOMContentLoaded", () => {
  const max = 50;
  const min = 10;

  const thoughtsEl = document.getElementById("thoughts");

  const randomTop = randomPick(min, max);
  thoughtsEl.style.top = `${randomTop}%`;

  const randomLeft = randomPick(min, max);
  thoughtsEl.style.left = `${randomLeft}%`;
});

document.addEventListener("DOMContentLoaded", () => {
  const thoughtsEl = document.getElementById("thoughts");

  const paragraphs = document.querySelectorAll("p.poem");
  const poems = [];
  for (const paragraph of paragraphs) {
    poems.push(paragraph.innerHTML);
  }
  const poem = poems[Math.floor(Math.random() * poems.length)];

  thoughtsEl.innerHTML = poem;

  if (poem.includes("¿Otra vez tú?")) {
    thoughtsEl.style.right = "20%";
  }
});
