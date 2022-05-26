/**Classes***/

class Room{
    constructor(name){
        this._name = name;   
        this._description = "";
        this._linkedRooms = {};
        this._character = "";
        this._roomItem = "";
        }

    get name () {
        return this._name;
    }

    get description () {
        return this._description;
    }
    
    get character () {
        return this._character
    }

    get roomItem() {
        return
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short");
            return;
        }
        this._name = value;
    }

    set description(value) {
        if (value.length < 4) {
            console.error("Room name insufficent.")
            return;
        }
        this._description = value;
    }

    set character(value){
        this._character = value; 
    }

    set roomItem(value) {
        this._roomItem = value;
    }

    describe() {
        return " You look around the " + this._name + " and see " + this._description;
    }

    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }
    
    getDetails() {
        const entries = Object.entries(this._linkedRooms);
        let details = []
        for (const[direction,room] of entries) {
            let text = "The " + room._name + "lies to the " + direction;
            details.push(text);
        }
        return details;
    }

    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            alert("There's no way through here",);
            return this;
        }
    }
 }


 class item {
    constructor(name) {
        this._name = name,
         this._description = ""
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

 set name(value) {
    if (value.length < 4) {
        console.error("Name is too short.");
        return;
    }
    this._name = value; 
 }

 set description(value) {
    if (value.length < 4) {
        alert("Description is too short.");
        return;
    }
    this._name = value;
 }

  describe() {
    "The " + this._name + " is " + this._description;
    }

}

  class Character {
    constructor(name) {
        this._name = name,
         this._description = ""
        this._conversation ="" 
    }
 
    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    get conversation() {
        return this._conversation
    }
  
    set name(value) {
    if (value.length < 4) {
        alert("Name is too short.");
        return;
    }
    this._name = value;
    }

    set description(value) {
    if (value.length < 4) {
        console.error("Character analysis is too short");
        return;
    }
    this._description = value; 
    }

    set conversation(value) {
    if (value.length < 4) {
         console.error("conversation is too brief");
         return;
    }
     this._conversation = value;
    }

 describe() {
    return " The " + this._name + " is " + this._description;
 }

 converse() {
    return this._name + " says " + " ' " + this._conversation + " ' ";
 }

}

 class Enemy extends Character {
    constructor(name) {
        super(name);
        this._weakness = "";
    }

    get weakness() {
        
    }

set weakness(value) {
  if (value.length < 4) {
      alert("Description is too short.");
      return;
  }
  this._weakness = value;  
}

fight(item) {
    if (item === this._weakness) {
        return true;
    } else {
        return false;
    }
}

converse() {
    return this._name + " says " + " ' " + this._conversation + " ' ";
 }

}

 
class Ally extends Character {
    constructor(name) {
        super(name);
        this._description = ""
        this._conversation ="" 
    }

    get description() {
        return this._description
    }

    get conversation() {
        return this._conversation
    }

    set description(value) {
        if (value.length < 4) {
            console.error("Character analysis is too short");
            return;
        }
        this._description = value; 
        }

    set conversation(value) {
         if (value.length < 4) {
             console.error("conversation is too brief");
              return;
        }
        this._conversation = value;
        }    


}  


/***Items

const DisruptorPistol = new Item ("disruptor pistol")
DisruptorPistol.description = " The cool, weighty pistol feels reassuring in your hand. Since the earliest days of local cluster colonisation efforts, these weapons have seen service. You surmise the elegant design and destructive power is reason enough for the weapon's longevity. "

const PlasmaLance = new Item ("plasma lance")
PlasmaLance.description = "Unmatched in destructive power, using a plasma lance aboard a starship is strongly discouraged due to the risk of explosive decompression and hull rupture. Still, against heavily armoured targets, in an emergency, it should work. And this is an emergency after all..."

const CoreUnit = new Item ("shield core unit")
CoreUnit.description = "This highly complex ,metallic sphere full of dark energy emissions, high frequency proton discharges and antimatter linking chambers fits snuggly in the palm of your hand. Required to stabilise the shield generator, its worth is almost that of the ship itself."

***/

/*** Room Descriptions ***/

const CommandCentre = new Room ("Command Centre");
CommandCentre.description = "the bridge of the ISS Orpheus, your trusty captain's chair a smouldering heap of melted plasteel and ruined upholstery. The rest of the bridge is badly damaged with injured crew, destroyed panels and failing monitors everywhere you look. With the intruder alert warning blasting out over the comm system, it doesn't take you long to realise that the current situation was no accident and that you'll have to act fast.You can see an exit to Stellar Navigation to your left, and the Armoury on your right. Better head to those first before heading north to the rest of the ship.";
const Armoury = new Room ("Armoury");
Armoury.description = "the well-stocked armoury and supply station of the ISS Orpheus,thankfully untouched by enemy boarders. There could be something useful in here...";
const MapRoom = new Room ("Stellar Navigation");
MapRoom.description ="The navigational centre of your ship. A holo-lithe displays the local cluster and fleet position, enemy ship indicators glare ominiously around your fleet indictor icon. Across the room you see your second in command, Fleetmaster Regill.";
const MainDeck = new Room ("Main Deck");
MainDeck.description ="The backbone of your vessel. A long, sparsely adorned concourse stands before you, all exits save the one ahead of you, the crew quarters exit, are impassable. Blocking your path is one of the boarders, a Vendrian Trooper!";
const CrewQuat = new Room ("Crew Quarters");
CrewQuat.description ="The crew quarters look as though a storm has passed through, with personal effects scattered, deck plating scorched and dented, and other signs of a terrible battle that must have taken place here. Ahead of you is the Tactical Deck and a Vendrian Veteran!";
const TacDeck = new Room ("Tactical Deck");
TacDeck.description ="The former deck connecting various tactical systems together.Through the burnt-out wreckage of the tactical deck lies the Shield Generator, but blocking your path is a Vendrian Commander!";
const ShieldGen = new Room ("Shield Generator");
ShieldGen.description ="The first line of defence for any space vessel. Ahead of you is the shield generator and it's badly malfuntioning core unit. Without a replacement core, your vessel won't last long under the Vendrian assault!";

/***Room Links***/

CommandCentre.linkRoom("north", MainDeck);
CommandCentre.linkRoom("west", MapRoom);
CommandCentre.linkRoom("east", Armoury);
MapRoom.linkRoom("east",CommandCentre);
Armoury.linkRoom("west",CommandCentre);
MainDeck.linkRoom("north",CrewQuat);
MainDeck.linkRoom("south", CommandCentre);
CrewQuat.linkRoom("north",TacDeck);
CrewQuat.linkRoom("south",MainDeck); 
TacDeck.linkRoom("north", ShieldGen);
TacDeck.linkRoom("south", CrewQuat);
ShieldGen.linkRoom("south", TacDeck);



/***Entities***/

const Regill = new Ally ("Fleetmaster");
Regill.conversation = "Commander, thank the Suns you've survived! We've been boarded and need to get the shields back online or we'll lose the ship! There should be a spare core unit in the Armoury, and you'd do well to arm yourself trying to reach the shield generator. There's no telling how many Vendrian dogs are skulking about down below!";
Regill.description = "a tall man, dressed in a flowing black and gold robe denoting his station as Fleetmaster, his eyes pale and sight long since gone turns to face you. His face is lined with worry and pride in equal measure.";





/***Enemies***/

const Trooper = new Enemy ("Vendrian Trooper");
Trooper.conversation = "Freeze scum! The ship is ours, but nobody will mind if I bring back one less prisoner!";
Trooper.description = "a formidable individual in sleek, silver assault armour. They're blocking your path, their hand hovering mere inches from their low slung laser rifle... ";
Trooper.pronous = "They";
Trooper.weakness = "disruptor pistol";

const Veteran = new Enemy ("Vendrian Veteran");
Veteran.conversation = "Ahh you'll make a fine prize, I may even earn my own ship by bringing in your head, a fair trade no? Now make this easy for us both and die!";
Veteran.description = "a sinister figure standing just ahead. Clad in bulky Mil-Grade combat attire, he looks every part the dangerous, experienced foe you suspect he is. He is clearly no stranger to the inherent lethality of ship-to-ship combat and close quarters boarding actions. You'll have to act fast...";
Veteran.weakness = "disruptor pistol"; 

const Commander = new Enemy ("Vendrian Commander")
Commander.conversation = "So, you've made it this far I see. But no further. Your ship, your crew, your life are all forfeit!";
Commander.description = "a hulking figure. Well built and imposing at nearly 7 feet tall, armour adorned with the scars of countless battles under the light of one hundred different suns. Their rail rifle points menacingly towards you, their helmet hiding any trace of emotion as they hold their finger on the trigger... ";
Commander.weakness = "plasma lance";

/***Personnel Placement***/

MainDeck.character = Trooper; 

CrewQuat.character = Veteran;

TacDeck.character = Commander; 

MapRoom.character = Regill; 

/***action***/

function displayRoomInfo(room){
  let occupantMsg = ""
  if (room.character === "") {
      occupantMsg = ""
  } else {
      occupantMsg = room.character.describe() + " . " + room.character.converse()
  }

  textContent = "<p>" + room.describe() + "</p>" + "<p>" +
    occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";


    document.getElementById("textarea").innerHTML = room.describe();
    document.getElementById("ui").focus(); 
}

function commandHandler(command, character) {
    switch (command) {
      case "fight":
        //work out how to pass items to fight method from player backpack
        if (character.fight() === true) {
          msg = "congratulations you defeated" + character.name;
          alert(msg)
        } else {
          alert("game over")
          startGame(location.reload());
        }
        break;
      case "talk":
        msg = character.converse();
        alert(msg)
        break;
      case "describe":
        msg = character.describe();
        alert(msg)
        break;
      default:
        alert("not done yet")
        break;
      //blank command box after commands 
    }
  }


function startGame(){
    currentRoom = CommandCentre
    displayRoomInfo(currentRoom)

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let command = document.getElementById("ui").value.toLowerCase();
            const directions = ["north" , "south" , "east" , "west"]
            const commands = ["fight" , "talk" , "describe"]
            if (directions.includes(command)) {
                currentRoom = currentRoom.move(command)
                displayRoomInfo(currentRoom);
            } else if (commands.includes(command)) {
              commandHandler(command, currentRoom.character)  
            } else {
                document.getElementById("usertext").value = ""
                alert("Invalid Command. Re-enter command.")
            } 
            }            

    });
    
}

startGame() 



