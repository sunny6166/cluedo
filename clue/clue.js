
var mrGreen =  {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
  };
  
  var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
  };
  
  var profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  };
  
  var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  };
  
  var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  };
  
  var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
  };

  var characters = [mrMustard, mrsPeacock, missScarlet, profPlum, drOrchid, mrGreen]
// Weapons
var weapons = [
    {name: "rope", color: "black", description: "plastic",   weight: 10},
    {name: "knife", color: "white", description: "wood",   weight: 8},
    {name: "candlestick", color: "blue", description: "metal",   weight: 2},
    {name: "dumbbell", color: "green", description: "heavy",   weight: 30},
    {name: "poison", color: "yellow", description: "sweet",   weight: 2},
    {name: "axe", color: "purple", description: "rusty",   weight: 15},
    {name: "bat", color: "brown", description: "gum",   weight: 13},
    {name: "trophy", color: "pink", description: "win",   weight: 25},
    {name: "pistol", color: "orange", description: "007",   weight: 20}
    ]
    
    // Rooms
    var rooms = [ 
    {name: "Dinning Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}
    ];


    function clue (characters,weapons,rooms){
        this.characters = 'characters',
        this.weapons = 'weapons',
        this.rooms = 'rooms'
        this.current = 'start' 

        this.playerGuess = {
            weapon:{},
            killer : {},
            room:{},
             }

             this.mysteryEnvelop = {
                 weapon:{},
                 room:{},
                 killer:{}
             }

             this.pickRandomElement = function (array){
                 if(!Array.isArray(Array)) throw new Error('wrong input')
                 var random = Math.floor(Math.random() * array.length)
                 return array[random]
             }

             this.pickMystery  = function (){
                 this.mysteryEnvelon.weapon = this.pickRandomElement(this.weapon)
                 this.mysteryEnvelop.killer = this.pickRandomElement(this.killer)
                 this.mysteryEnvelop.room = this.pickRandomElement(this.rooms)
             }
             this.revealMystery = function() {
                document.getElementsByClassName("room-container")[0].style.display = "none"
                let container = document.getElementsByClassName("reveal-container")[0]
                container.style.display = "flex"
                let env = this.mysteryEnvelope
                let usr = this.playerGuess
                // check if user guessed right
                let result = document.createElement("h1") 
                if(env.killer.first_name === usr.killer && 
                    env.weapon.name === usr.weapon && 
                    env.room.name === usr.room) {
                        result.innerHTML = "You guessed right"
                        result.style.color = "green"
                    } else {
                        result.innerHTML = "You guessed wrong"
                        result.style.color = "red"
                    }
                // revealing mystery
                let newChar = document.createElement("img")
                newChar.setAttribute("src", env.killer.image)
                
                let newWeapon = document.createElement("h2")
                newWeapon.innerHTML = env.weapon.name
                
                let newRoom = document.createElement("h2")
                newRoom.innerHTML = env.room.name
        
                container.appendChild(newChar)
                container.appendChild(newWeapon)
                container.appendChild(newRoom)
                container.appendChild(result)
        
            }
        
            this.loadCharacters = function (characters) {
                var container = document.getElementsByClassName("character-container")[0]
                for(let i = 0; i < characters.length; i++) {
                    let newChar = document.createElement("img")
                    newChar.setAttribute("src", characters[i].image)
                    newChar.setAttribute("firstname", characters[i].first_name)
                    newChar.addEventListener("click", (event)=>{
                       this.playerGuess.killer = event.target.getAttribute("firstname")
                       this.next()
                    })
                    container.appendChild(newChar)
                }
            }
        
            this.play = function() {
                debugger
                this.pickMystery()
                this.next()
            }
        
            this.loadWeapons = function(weapons) {
                document.getElementsByClassName("character-container")[0].style.display = "none"
                document.getElementsByClassName("weapon-container")[0].style.display = "inline-block"
                var container = document.getElementsByClassName("weapon-container")[0]
                for(let i = 0; i < weapons.length; i++) {
                    let newWeapon = document.createElement("button")
                    newWeapon.innerHTML = weapons[i].name
                    newWeapon.setAttribute("name", weapons[i].name)
                    newWeapon.addEventListener("click", (event)=>{
                       this.playerGuess.weapon = event.target.getAttribute("name")
                       this.next()
                    })
                    container.appendChild(newWeapon)
                }
            }
        
            this.loadRooms = function(rooms) {
                document.getElementsByClassName("weapon-container")[0].style.display = "none"
                document.getElementsByClassName("room-container")[0].style.display = "inline-block"
                var container = document.getElementsByClassName("room-container")[0]
                for(let i = 0; i < rooms.length; i++) {
                    let newRoom = document.createElement("button")
                    newRoom.innerHTML = rooms[i].name
                    newRoom.setAttribute("name", rooms[i].name)
                    newRoom.addEventListener("click", (event)=>{
                       this.playerGuess.room = event.target.getAttribute("name")
                       this.next()
                    })
                    container.appendChild(newRoom)
                }
            }
        
            this.next = function() {
                switch(this.current) {
                    case("start"):
                    window.onload = ()=> {
                        this.loadCharacters(this.characters)
                        this.current = "character" // setting to next stage
                    }
                    break;
                    case "character":
                        this.loadWeapons(this.weapons)
                        this.current = "weapon"
                    break;
                    case "weapon":
                       this.loadRooms(this.rooms)
                       this.current = "rooms" 
                    break;
                    case "rooms":
                        this.revealMystery()
                        this.current = "reveal"
                    break;
                }
            }
        }
        
        var clueGame = new Clue(characters, weapons, rooms)
        clueGame.play()


    }