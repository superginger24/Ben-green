import './style.css'

const garage = [
  {
    emoji: '🏎️',
    name: 'Supercars',
    blurb: 'Low, loud, and ridiculous. If it does 0-60 in under 3 seconds, Ben wants to talk about it.',
  },
  {
    emoji: '🚗',
    name: 'Classics',
    blurb: 'Carburetors over computers. Ben thinks cars peaked somewhere around 1969.',
  },
  {
    emoji: '🛻',
    name: 'Trucks & Off-Road',
    blurb: 'Mud tires, lift kits, and a healthy disrespect for parking lines.',
  },
  {
    emoji: '🏁',
    name: 'Track Days',
    blurb: "It's not a hobby, it's a lifestyle. Lap times are a personality trait.",
  },
  {
    emoji: '🔧',
    name: 'Project Builds',
    blurb: "Currently 'almost done' for the third year running.",
  },
  {
    emoji: '⚡',
    name: 'EVs',
    blurb: "Ben has complicated feelings about these, but can't deny the torque.",
  },
]

const facts = [
  'The first speeding ticket was issued in 1902 to a driver going a blistering 45 mph.',
  "The Bugatti Veyron's tires were rated for a top speed of 258 mph but lasted only 15 minutes at that speed.",
  'The average car has around 30,000 parts, including every nut and bolt.',
  'The Koenigsegg Agera RS once held the record for fastest production car at 277.9 mph.',
  'Red cars are commonly believed to get pulled over more, but studies show it has more to do with how the car is driven.',
  'The Volkswagen Beetle was originally designed in the 1930s and stayed in production for over 65 years.',
  'A Formula 1 car can generate enough downforce to drive upside down in a tunnel at high speed.',
  'The first car radio was offered by Motorola in 1930, and it cost almost as much as the car itself.',
  'The McLaren F1 used gold foil in its engine bay because gold is one of the best heat reflectors.',
  'The windshield wiper was invented by a woman, Mary Anderson, in 1903.',
  'Ferrari produces far fewer cars per year than most people guess, on purpose, to keep them exclusive.',
  'The term "horsepower" was coined by James Watt to compare the output of steam engines to actual horses.',
]

let lastFactIndex = -1

function randomFact() {
  let index = Math.floor(Math.random() * facts.length)
  if (facts.length > 1) {
    while (index === lastFactIndex) {
      index = Math.floor(Math.random() * facts.length)
    }
  }
  lastFactIndex = index
  return facts[index]
}

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="brand">
      <span class="brand-emoji">🏎️</span>
      <span class="brand-name">Ben Green</span>
    </div>
    <nav class="site-nav">
      <a href="#garage">Garage</a>
      <a href="#facts">Fun Facts</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <section class="hero">
    <p class="hero-kicker">Welcome to</p>
    <h1>Ben Green's Car Corner</h1>
    <p class="hero-tagline">Cars. Cars. Did I mention cars?</p>
    <a class="cta" href="#garage">Check Out The Garage</a>
    <div class="road">
      <div class="lane"></div>
    </div>
  </section>

  <section id="garage" class="garage">
    <h2>The Dream Garage</h2>
    <p class="section-sub">A rundown of everything that lives rent-free in Ben's head.</p>
    <div class="garage-grid">
      ${garage
        .map(
          (item) => `
        <article class="garage-card">
          <div class="garage-emoji">${item.emoji}</div>
          <h3>${item.name}</h3>
          <p>${item.blurb}</p>
        </article>
      `
        )
        .join('')}
    </div>
  </section>

  <section id="facts" class="facts">
    <h2>Random Car Fact Generator</h2>
    <p class="section-sub">Press the button. Learn something. Impress nobody at parties.</p>
    <div class="fact-box">
      <p id="fact-text">Click below to summon a fact from the engine bay.</p>
    </div>
    <button id="fact-button" type="button" class="cta">Give Me A Fact 🔧</button>
  </section>

  <section id="about" class="about">
    <h2>About Ben</h2>
    <p>
      Ben Green likes cars. That's pretty much it. Sports cars, classics, trucks, race cars,
      project cars that never quite get finished&mdash;if it has an engine (or a battery and a
      lot of torque), Ben's probably got an opinion about it. This site exists purely so Ben has
      somewhere to point people when they ask "so what are you into?"
    </p>
  </section>

  <footer class="site-footer">
    <p>Built for Ben Green, certified car guy. 🏁</p>
  </footer>
`

const factButton = document.querySelector('#fact-button')
const factText = document.querySelector('#fact-text')

factButton.addEventListener('click', () => {
  factText.textContent = randomFact()
})
