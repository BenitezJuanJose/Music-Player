export async function getData(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export function toPlay(card) {
  if (card.classList.contains("toPlay")) {
    card.classList.remove("toPlay");
  } else {
    card.classList.add("toPlay");
  }
}
