const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
}


Park.prototype.addDinosaur = function(newDino){
    this.collectionOfDinosaurs.push(newDino);
}
Park.prototype.removeDinosaur = function(dinoToRemove){
    const spliceIndex = park.collectionOfDinosaurs.indexOf(dinoToRemove)
    this.collectionOfDinosaurs.splice(spliceIndex, 1);
    }

module.exports = Park;
