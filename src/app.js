/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  generatedomain();
};
function generatedomain() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domain = [".com", ".es", ".net", ".us", ".io"];
  for (let x = 0; x < pronoun.length; x++) {
    for (let y = 0; y < adj.length; y++) {
      for (let z = 0; z < noun.length; z++) {
        for (let a = 0; a < domain.length; a++) {
          console.log(pronoun[x] + adj[y] + noun[z] + domain[a]);
        }
      }
    }
  }
}
