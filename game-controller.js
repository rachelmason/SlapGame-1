//GAME CONTROLLER
function GameController() {

    var gs = new GameService()

    this.handleAttack = function(type){
        gs.attack(type)
        updateScreen()
    }
    this.handleItem = function(type){
        gs.useItem(type)
        updateScreen()
    }

    function updateScreen() {
        var width = gs.getHealth()
        var elem = document.getElementById('currentHealth')
        elem.style.width = width + '%';
        document.getElementById('hits').innerText = gs.getHits()
        // document.getElementById('sheild').innerText = gs.getSheild()
    }

}