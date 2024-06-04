let cardsList = document.querySelector(".cards");
let cards = [];

let c1 = {
  name: "Cafe Menu",
  link: "./cafe-menu/index.html",
};
let c2 = {
  name: "Cat Photo App",
  link: "cat_phot_app/index.html",
};
let c3 = {
  name: "First API Request",
  link: "./first_api_request/index.html",
};
let c4 = {
  name: "Interactive Site",
  link: "./interactive/index.html",
};
let c5 = {
  name: "Java Button",
  link: "./java_button/index.html",
};
let c6 = {
  name: "Java List Program",
  link: "./java_list_program/index.html",
};
let c7 = {
  name: "Java Quiz",
  link: "./java_quiz/index.html",
};
let c8 = {
  name: "Mario Club",
  link: "./mario_club/index.html",
};
let c9 = {
  name: "Memory Game",
  link: "./memory_game/index.html",
};
cards.push(c1, c2, c3, c4, c5, c6, c7, c8, c9);
// console.log(cards);

// for (let i = 0; i < cards.length; i++) {
//   cardsList.innerHTML += `<div class="card">
//     <div class="card-inner">
//       <div class="card-front">
//         <h2>${cards[i].name}</h2>
//       </div>
//       <div class="card-back">
//         <a href="${cards[i].link}">project link</a>
//       </div>
//     </div>
//   </div>`;
// console.log(cards[i]);
// }

cards.map((item) => {
  cardsList.innerHTML += `<div class="card">
    <div class="card-inner">
      <div class="card-front">
        <h2>${item.name}</h2>
      </div>
      <div class="card-back">
        <a href="${item.link}">project link</a>
      </div>
    </div>
  </div>`;
});
