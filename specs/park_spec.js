const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
      park = new Park("Jurassic Park", 40)

  })

  it('should have a name', function() {
     const actual = park.name; 
     assert.strictEqual("Jurassic Park" , actual);
  });

  it('should have a ticket price', function() {
     const actual = park.ticket_price
     assert.strictEqual(40, actual)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.collection
    assert.deepStrictEqual([], actual)
  });

  it('should be able to add a dinosaur to its collection', function() {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    park.addDinosaur(dinosaur1)
    const actual = park.collection
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur()
    const actual = park.collection
    assert.deepStrictEqual(actual, [dinosaur1])

  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    dinosaurs = [dinosaur1, dinosaur2]
    park.mostAttracts(dinosaurs)
    const actual = dinosaur1
    assert.strictEqual(actual, park.mostAttracts(dinosaurs) )


  });

  it('should be able to find all dinosaurs of a particular species', function() {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    dinosaurs = [dinosaur1, dinosaur2]
    park.findDinosaurs('t-rexx')
    const actual = [dinosaur1]
    assert.deepStrictEqual(actual, park.findDinosaurs('t-rexx'))

  });

  it('should be able to calculate the total number of visitors per day', function () {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    dinosaurs = [dinosaur1, dinosaur2]
    park.totalVisitors(dinosaurs)
    const actual = 147
    assert.strictEqual(actual, park.totalVisitors(dinosaurs))

  });

  it('should be able to calculate the total number of visitors per year', function () {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    dinosaurs = [dinosaur1, dinosaur2]
    park.totalVisitors(dinosaurs)
    park.totalVisitorsPerYear(dinosaurs)
    const actual = 52920
    assert.strictEqual(actual, park.totalVisitorsPerYear(dinosaurs))


  });

  it('should be able to calculate total revenue for one year', function() { 
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    dinosaurs = [dinosaur1, dinosaur2]
    park.totalVisitors(dinosaurs)
    park.totalVisitorsPerYear(dinosaurs)
    park.totalRevenuePerYear(park)
    const actual = 2116800
    assert.strictEqual(actual, park.totalRevenuePerYear(park))


  });

  xit(`should be able to Remove all dinosaurs of a particular species`, function () {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivoreee', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    dinosaurs = [dinosaur1, dinosaur2]
    park.removeDinosaurBySpecies('t-rexx')
    const actual = [dinosaur2]
    assert.deepStrictEqual([park.removeDinosaurBySpecies('t-rexx')], actual)
  })

  it(`should Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type` , function() {
    dinosaur1 = new Dinosaur ('t-rexx', 'carnivore', 80);
    dinosaur2 = new Dinosaur ('t-rexxxx', 'carnivoreeeeee', 67);
    dinosaurs = [dinosaur1, dinosaur2]
    park.diteTypeWithNumbers(dinosaurs)
    const actual = {
      carnivore : 1, 
      herbivore :0,
      mnivore : 0
  }
    assert.deepStrictEqual(actual, park.diteTypeWithNumbers(dinosaurs))




  })


});
