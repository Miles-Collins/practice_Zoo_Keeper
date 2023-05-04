const animals = [
  {
    name: "Debra",
    hunger: 100,
    emoji: "🦓",
    mood: "🥰"
  },
  {
    name: "Jake",
    hunger: 100,
    emoji: "🐍",
    mood: "🥰"
  },
  {
    name: "Mark",
    hunger: 100,
    emoji: "🦈",
    mood: "🥰"
  },
  {
    name: "Dyson",
    hunger: 100,
    emoji: "🦬",
    mood: "🥰"
  },
  {
    name: "Carter",
    hunger: 100,
    emoji: "🦦",
    mood: "🥰"
  },
  {
    name: "Dawn",
    hunger: 100,
    emoji: "🦢",
    mood: "🥰"
  },
]

let money = 0

// SECTION FEEDING ANIMALS

function feedAnimal(animalName) {
  let foundAnimal = animals.find(a => a.name == animalName)
  if(foundAnimal.hunger < 100 && foundAnimal.hunger > 0) {
    foundAnimal.hunger += 2
  }
  if(foundAnimal.hunger >= 100) {
    foundAnimal.hunger = 100
  }
  console.log('Which animal is this?', foundAnimal)
  updateAnimal(foundAnimal)
}

// SECTION HUNGER LEVEL

function debraHunger() {
  animals.forEach(animal => {
    animal.hunger -= 5
    if(animal.hunger <= 0) {
      animal.hunger = 0
    }
    updateAnimal(animal)
  })
}

// SECTION UPDATE ANIMALS

function updateAnimal(animal) {
updateStatus(animal)
let animalElem = document.getElementById(animal.name)
let animalH1 = animalElem.querySelector('h1')
let animalH6 = animalElem.querySelector('h6')
let marquee1 = animalElem.querySelector('marquee')
let marquee2 = animalElem.querySelector('marquee>marquee')

if(animal.mood == "💀") {
  marquee1.stop()
  marquee2.stop()
}

animalH1.innerHTML = `<h1 class="animal" onclick="feedAnimal('${animal.name}')">${animal.emoji}</h1>`
animalH6.innerHTML = `${animal.name} | ${animal.mood} | Hunger: ${animal.hunger}%`
}

function updateStatus(animal) {
  if(animal.hunger >= 80) {
    animal.mood = "🥰"
  } else if (animal.hunger >= 60) {
    animal.mood = "😀"
  } else if (animal.hunger >= 40) {
    animal.mood = "🥵"
  } else if (animal.hunger >= 20) {
    animal.mood = "🤢"
  } else if (animal.hunger > 0) {
    animal.mood = "🤮"
  } else {
    animal.mood = "💀"
    animal.emoji = "🪦"
  }
  return animal
}

// SECTION INCOME

function getMoney() {
  let income = 0
  animals.forEach(animal => {
    switch(animal.mood) {
    case "🥰":
    income += 50
    break;
    case "😀":
      income += 25
      break;
    case "🥵":
      income += 5
      break;
    case "🤢":
      income += 1
      break;
    case "🤮":
      income -= 5
      break;
    default:
      income -= 25
      break;
  }
  money += income
  })

  updateMoney(income)
}

function updateMoney(income) {
  let moneyElem = document.getElementById('money')
  let incomeElem = document.getElementById('income')
  if(money < 0) {
    moneyElem.innerHTML = `<span class="text-danger">$${money}</span>`
  } else {
    moneyElem.innerText = `$${money}`
  }
  if(income > 0) {
    incomeElem.innerText = `$${income}`
  } else {
    incomeElem.innerHTML = `<span class="text-danger">$${income}</span>`
  }
}

// SECTION INTERVAL

setInterval(debraHunger, 2000)
setInterval(getMoney, 2000)