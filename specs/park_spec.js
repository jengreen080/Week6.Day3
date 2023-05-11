const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Jurassic World', 5.00)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic World');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5.00);
  });
    

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur("pterodactyl")
    actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, ["pterodactyl"])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur("pterodactyl")
    park.addDinosaur("t-rex")
    park.addDinosaur("diplodicus")
    park.removeDinosaur("t-rex")
    actual = park.collectionOfDinosaurs
    assert.deepStrictEqual(actual, ["pterodactyl", "diplodicus"])
  });


  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
