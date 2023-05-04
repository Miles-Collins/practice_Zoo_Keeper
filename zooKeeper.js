const animals = [
  {
    name: "Libra",
    mood: "🥰",
    hunger: 100,
    emoji: "🦓"
  },
  {
    name: "Jake",
     mood: "🥰",
    hunger: 100,
    emoji: "🐍"
  },
  {
    name: "Matt",
     mood: "🥰",
    hunger: 100,
    emoji: "🐀"
  },
  {
    name: "Myrtle",
     mood: "🥰",
    hunger: 100,
    emoji: "🐢"
  },
  {
    name: "Mark",
     mood: "🥰",
    hunger: 100,
    emoji: "🦈"
  },
  {
    name: "Jake",
     mood: "🥰",
    hunger: 100,
    emoji: "🐍"
  },
  {
    name: "Dyson",
     mood: "🥰",
    hunger: 100,
    emoji: "🦬"
  },

]

let money = 0

// SECTION FEEDING

function feedAnimal(animalName) {
  let foundAnimal = animals.find(a => a.name == animalName)
  // console.log('ANIMAL NAME', foundAnimal)
  if(foundAnimal.hunger < 100 && foundAnimal.hunger > 0) {
  foundAnimal.hunger += 2
  } else if(foundAnimal.hunger >= 100) {
    console.log(foundAnimal.name + " is big full.")
  } else {
    console.log(foundAnimal.name + " is no longer with us. ='(")
  }
  updateAnimal(foundAnimal)
}

// SECTION HUNGER

function hungerLevel() {
  animals.forEach(a => {
    if(a.hunger > 0) {
    a.hunger -= 2
    updateAnimal(a)
    }
  })
}

// SECTION UPDATING ANIMAL

function updateAnimal(animal) {
  updateStatus(animal)
  let animalElem = document.getElementById(animal.name)
  let animalH1 = animalElem.querySelector('h1')
  let animalH5 = animalElem.querySelector('h5')
  let marquee1 = animalElem.querySelector('marquee')
  let marquee2 = animalElem.querySelector('marquee>marquee')
  if (animal.mood == "💀") {
    marquee1.stop()
    marquee2.stop()
  }


  animalH1.innerHTML = `<h1 onclick="feedAnimal('${animal.name}')" class="animal">${animal.emoji}</h1>`
  animalH5.innerText = `${animal.name} | Mood: ${animal.mood} | Hunger: ${animal.hunger}%`
}

function updateStatus(animal) {
  if(animal.hunger >= 80) {
    animal.mood = "🥰"
  } else if(animal.hunger >= 60) {
    animal.mood = "😉"
  } else if (animal.hunger >= 40) {
    animal.mood = "🥴"
  } else if (animal.hunger >= 20) {
    animal.mood = "🤢"
  } else if (animal.hunger > 0) {
    animal.mood = "🤮"
  } else {
    animal.mood = "💀"
    animal.emoji = "🪦"
    window.alert(animal.name + " has passed away. ='(")
  }
  return animal
}

// SECTION MONEY

function getMoney() {
  let income = 0
  animals.forEach(animal => {
    switch(animal.mood) {
          
      case "🥰":
        income += 50
        break;
      case "😉":
        income += 25
        break;
      case "🥴":
        income += 5
        break;
      case "🤢":
        income += 1
        break;
      case "🤮":
        income -= 1
        break;
      default:
        income -= 50
        break;
    }

    money += income
  })

  if(money >= 0) {
    document.getElementById('money').innerHTML = `<span>$${money}</span>`
  } else {
    document.getElementById('money').innerHTML = `<span class="text-danger">$${money}</span>`
  }

  if(income >= 0) {
    document.getElementById('income').innerHTML = `<span>$${income}</span>`
  } else {
    document.getElementById('income').innerHTML = `<span class="text-danger">$${income}</span>`
  }
}

getMoney()

// STUB INTERVAL

setInterval(hungerLevel, 1000)
setInterval(getMoney, 5000)