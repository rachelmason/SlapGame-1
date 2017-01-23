
function Target(name, health) {
        this.name = name,
        this.health = health,
        this.hits = 0,
        this.items = []
}
var mrDude = new Target('Mr. Dude', 100)

function Item(name, modifier, description) {
    this.name = name,
    this.modifier = modifier,
    this.description = description
}

//ITEMS
var items = {
    sheild: new Item('Sheild', 1, 'Super strong and amazing sheild'),
    food: new Item('Food', 5, 'this is all your food, yum'),
    water: new Item('Water', 10, 'Hydrate yourself with this water')
}
function giveItem(type, target) {
    var item = items[type]
    target.items.push(item)
}

function useItem(type, target) {
    var item = items[type]
    applyItem(item)
    updateHealth()
}

function applyItem(thing){
health += thing.modifier
}


function filterDamage(target){
   for (var i = 0; i < target.items.length; i++) {
       var item = target.items[i];
       applyItem(item)
   }
}


//ACTIONS
function slap() {
    health = health - 1
    updateHealth()
}

function punch() {
    health = health - 5
    updateHealth()
}

function kick() {
    health = health - 10
    updateHealth()
}

function gotHit() {
    hits = hits += 1
    updateHits()

}

//UPDATES
function updateHealth() {
    filterDamage(mrDude)
    if (health >= 0) {
        document.getElementById('health').innerText = health
    } else {
        health = 100
        hits = 0
    }
}

function updateHits() {
    document.getElementById('hits').innerText = hits
}
function updateSheild() {
    document.getElementById('sheild').innerText = sheild
}