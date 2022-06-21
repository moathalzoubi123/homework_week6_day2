const Park = function (name , ticket_price) { 
    this.name = name;
    this.ticket_price = ticket_price
    this.collection = []


}

module.exports = Park;


Park.prototype.addDinosaur = function (dinosaur){
    this.collection.push(dinosaur)
}

Park.prototype.removeDinosaur = function (dinosaur) {
    this.collection.pop()
}

Park.prototype.mostAttracts = function() {
    let mostAttracts = 0 
    let mostAttractsdinosaur; 
    for (const dinosaur of dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > mostAttracts) {
            mostAttracts = dinosaur.guestsAttractedPerDay
            mostAttractsdinosaur = dinosaur 


        }

    }
    return mostAttractsdinosaur

}


Park.prototype.findDinosaurs = function(species) {
    let list_of_dinosaurs = [] 
    for (const dinosaur of dinosaurs) {
        if (dinosaur.species == species) {
            list_of_dinosaurs.push(dinosaur)
        }
    }
    return list_of_dinosaurs
}

Park.prototype.totalVisitors = function() {
    let totalVisitors = 0 
    for (const dinosaur of dinosaurs) {
        totalVisitors += dinosaur.guestsAttractedPerDay
    }
    return totalVisitors

}

Park.prototype.totalVisitorsPerYear = function (){
    let totalVisitorsPerDay = 0 
    for (const dinosaur of dinosaurs) {
        totalVisitorsPerDay += dinosaur.guestsAttractedPerDay
    }
    return totalVisitorsPerDay * 360

}

Park.prototype.totalRevenuePerYear = function (park) {

   return  this.totalVisitorsPerYear() * park.ticket_price
    
    
}

// Park.prototype.removeDinosaurBySpecies = function(species) { 

//     for (const dinosaur of dinosaurs) {
//         if (dinosaur.species == species) {
//             dinosaurs.pop(dinosaur)
//         }
//     }
//     return dinosaurs


// }

Park.prototype.diteTypeWithNumbers = function () {

let typeWithNumber = {
    carnivore : 0, 
    herbivore :0,
    mnivore : 0
}
for (const dinosaur of dinosaurs) {
    if (dinosaur.diet === "carnivore") {
        typeWithNumber.carnivore +=1 
        
    } else if (dinosaur.diet === "herbivore") {
        typeWithNumber.herbivore += 1

    } else if (dinosaur.diet === "mnivore"){
        typeWithNumber.mnivore += 1
    }
}
return typeWithNumber



}