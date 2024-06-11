export function buildMap(letters) {
  const map = {};
  for (const l of letters) {
    map[l.name] = l;
  }
  return map;
}

export function createDrawList(letters, review) {
  const list = [];
  const ls = Object.keys(letters);
  const rs = Object.keys(review);
  ls.forEach(l => {
    list.push(l);
  });
  rs.forEach(l => {
    for (let i = 0; i < review[l]; i++) {
      list.push(l);
    }
  });
  return list;
}

export function getRandomCard(drawList, letters) {
  const index = Math.floor(Math.random() * drawList.length);
  const card = drawList[index];
  return letters[card];
}

export function addToReview(review, card) {
  if (review[card]) {
    review[card]++;
  } else {
    review[card] = 2;
  }
  console.log('review list', review);
  return review;
}

export function removeFromReview(review, card) {
  if (review[card] && review[card] >= 1) {
    review[card]--;
  }
  console.log('review list', review);
  return review;
}