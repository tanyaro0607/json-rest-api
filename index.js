fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
)
  .then((res) => res.json())
  .then(data => setHeroes(data));

function setHeroes({squadName, homeTown, formed, members}) {
  document.body.insertAdjacentHTML('afterbegin', `
    <h1>${squadName}</h1>
    <h2>Hometown: ${homeTown} // Formated: ${formed}</h2>
    <div class='heroes'>${setMembers(members)}</div>
  `);
}

function setMembers(members) {
  return members.map(
    (hero) => `
    <div>
      <h3>${hero.name}</h3>
      <p>Secret Identity: ${hero.secretIdentity}</p>
      <p>Age: ${hero.age}</p>
      <p>Suberprowers:</p>
      <ul>
        ${hero.powers.map(power => `<li>${power}</li>`).join(' ')}
      </ul>
    </div>
    `).join(' ');
}