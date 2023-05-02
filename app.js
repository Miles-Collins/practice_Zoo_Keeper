const animals = [
  {
    name: "Khan",
    mood: "🥰",
    hunger: 100,
    emoji: "🐅"
  },
  {
    name: "Leonard",
    mood: "🥰",
    hunger: 100,
    emoji: "🦒"
  },
  {
    name: "Scooter",
    mood: "🥰",
    hunger: 100,
    emoji: "🦦"
  },
  {
    name: "Theodore",
    mood: "🥰",
    hunger: 100,
    emoji: "🦏"
  },
  {
    name: "Dorthy",
    mood: "🥰",
    hunger: 100,
    emoji: "🐄"
  },
  {
    name: "Oslo",
    mood: "🥰",
    hunger: 100,
    emoji: "🦧"
  }
]

function feedAnimal(animalName) {
  let foundAnimal = animals.find(animal => animal.name == animalName)
  console.log(foundAnimal)
    foundAnimal.hunger += 2
    if (foundAnimal.hunger >= 100) {
      foundAnimal.hunger = 100
      console.log(`${foundAnimal.name} is full.`);
    } 
    updateAnimal(foundAnimal)
  }

  function updateAnimal(foundAnimal) {

    let animalElem = document.getElementById(foundAnimal.name)
    let animalH1 = animalElem.querySelector('h1')
    let animalH3 = animalElem.querySelector('h3')
    let marquee1 = animalElem.querySelector('marquee')
    let marquee2 = animalElem.querySelector('marquee>marquee')
    
    if(foundAnimal.hunger == 0) {
      foundAnimal.mood = '💀'
      foundAnimal.emoji = "🪦"
      if(marquee1 && marquee2) {
      marquee1.stop()
      marquee2.stop()
      
      }
    } else if(foundAnimal.hunger <= 20) {
      foundAnimal.mood = "😭"
    } else if(foundAnimal.hunger <= 40) {
      foundAnimal.mood =  "😨"
    } else if(foundAnimal.hunger <= 60) {
      foundAnimal.mood = "😅"
    } else if(foundAnimal.hunger <= 80) {
      foundAnimal.mood = "🤗"
    }
   
    animalH1.innerHTML = `<h1 onclick="feedAnimal('Oslo')" class="animal"> ${foundAnimal.emoji} </h1>`
    animalH3.innerText = `${foundAnimal.name} | ${foundAnimal.mood} | ${foundAnimal.hunger}%`
  }



function hungerLevels() {
  animals.forEach(a => {
    if(a.hunger <= 0) {
      return
    } else {
      a.hunger--
      updateAnimal(a)
    }
  })
}

setInterval(hungerLevels, 500)

