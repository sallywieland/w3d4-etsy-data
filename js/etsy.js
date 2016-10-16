// QUESTION ONE - COMPLETE
var total = items.reduce(function(previous, current) { // .reduce finds sum of all {price:} objects in items list.
    return {price: previous.price + current.price}
}, {price: 0})

var avgPrice = total.price / items.length // finds average
var avgPriceRounded = Math.round(avgPrice * 100) / 100 // rounds average price 2 decimal points (found online)
console.log('The average price is $' + avgPriceRounded)

// QUESTION TWO - COMPLETE
console.log("Items that cost between $14.00 USD and $18.00 USD:")
var itemTitles = items.filter(function(item) { //.filter finds the items that are priced between the two amounts declared below
    return item.price >= 14.00 && item.price <= 18.00
})
console.log(itemTitles)

// QUESTION THREE - NEED TO REVIEW
var itemGBP = items.filter(function(item) {
    if (item.currency_code === 'GBP') { // .filter finds the item that has the currency_code of GBP
        console.log(item.title + ' costs £' + item.price) // .title/.price takes those specific parts of item called above
    }
})

//QUESTION THREE OPTION TWO - UNSURE WHY THIS METHOD DOESN'T WORK
var itemGBP = items.filter(function(item) {
    return item.currency_code.includes('GBP') // .includes will return the item with the currency code that matches the string 'GBP'
})
// console.log(itemGBP.title)

// QUESTION FOUR - NEED TO REVIEW
var findWood = items.filter(materialSearch)
function materialSearch(wood) {
    if (wood.materials.includes('wood')) { // .includes finds all objects that under materials: that contain the string 'wood'
        console.log(wood.title + ' is made of wood.') // .title displays titles for items that have 'wood' under materials:
    }
}

// QUESTION FIVE - NEED TO REVIEW
var materialCount = items.filter(function(item) {
    if (item.materials.length >= 8) { // items with materials who have lengths greater than or equal to 8
        console.log (item.title + ' has ' + item.materials.length + ' materials: ' + item.materials.join('\n'))
        // .title shows just the title, item.materials.length shows exact number of materials that specific item has, item.materials.join('/n') lists the materials in a string while '/n' lists materials line by line
    }
})

// QUESTION SIX
var howManySellers = items.filter(function(items) {
    return items.who_made.includes('i_did') // .who_made.includes calls the items that contain the string 'i_did'
})
console.log (howManySellers.length + ' were made by their sellers') // .length shows the number of those called above
