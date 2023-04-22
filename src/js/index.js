import { getData, toPlay } from "./functions/music.js";
const container = document.querySelector(".music_container");

/*
  musicUrl="http://127.0.0.1:5501/src/json/music.json"; 
*/

/* 

  showData:
*/
function showData(data) {
  data.music.forEach((el) => {
    const card = document.createElement("music-card");
    card.setAttribute("card-img", el.img);
    card.setAttribute("card-tittle", el.name);
    card.setAttribute("artist-name", el.artist);

    card.addEventListener("click", () => {
      toPlay(card);
    });

    container.appendChild(card);
  });
}

/* */

getData("./src/json/music.json").then((data) => {
  showData(data);
});
