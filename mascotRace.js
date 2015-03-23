var Mascot = function(name, fooditem, endurance, trip) {
    this.name = name;
    this.food = fooditem;
    this.endurance = endurance;
    this.trip = trip;
    this.run = function() {
    var distance = 0;
        if(this.trip){
        var tripper =  Math.floor(Math.random() * 10); 
            if (tripper < 3) {
                this.trip = true;
            } else {
                this.trip = false;
            }
        }
        if (this.trip) {
            console.log("OH NO!!!");
            return distance;
        } else {
            distance = distance+ Math.floor(Math.random() * this.endurance + 1)
            return distance;
        }
    }
}
var blueWave = new Mascot("Bluewave", "Shrimp", 5, false);
var marauder = new Mascot("Marauder", "Milk", 7, false);
var wildCat = new Mascot("Wildcat", "Burger", 9, true);

    console.log(wildCat.run());
    console.log(blueWave.run());
    console.log(marauder.run());


