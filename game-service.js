//GAME SERVICE
function GameService() {
    var dataStore = this
    var mrDude = new Target('Mr. Dude', 100, 1, 5, 10)
    function Target(name, currentHealth, slap, punch, kick) {
        this.name = name,
            this.currentHealth = currentHealth,
            this.attacks = {
                "slap": slap,
                "punch": punch,
                "kick": kick
            }
        this.hits = 0
        this.items = []
    }

    dataStore.getHealth = function(){
        return mrDude.currentHealth
    }
    dataStore.getHits = function(){
        return mrDude.hits
    }
  

    dataStore.attack = function (type) {
        mrDude.currentHealth -= mrDude.attacks[type]
        mrDude.hits += 1
        updateHealth()
        
    }

    function Item(name, modifier, description) {
        this.name = name
        this.modifier = modifier
        this.description = description
    }


    var items = {
        sheild: new Item('Sheild', 1, 'Super strong and amazing sheild'),
        food: new Item('Food', 5, 'this is all your food, yum'),
        water: new Item('Water', 10, 'Hydrate yourself with this water')
    }

    dataStore.addItem = function (type) {
        var item = items[type]
        mrDude.items.push(item)
    }

    dataStore.useItem = function (type) {
        var item = items[type]
        applyItem(item)
        updateHealth()
    }

    function applyItem(thing) {
        
        mrDude.currentHealth += thing.modifier
    }

  

    // dataStore.filterDamage = function () {
    //     for (var i = 0; i < mrDude.items.length; i++) {
    //         var item = mrDude.items[i];
    //         applyItem(item)
    //     }
    // }
    
    function updateHealth() {
        // dataStore.filterDamage()
        if (mrDude.currentHealth <= 0) {
            mrDude = new Target('Mr. Dude', 100, 1, 5, 10)
        }else if (mrDude.currentHealth >= 100){
            mrDude.currentHealth = 100
        }
    }
}