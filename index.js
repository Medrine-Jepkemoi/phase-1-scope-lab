// Write your solution in this file!
var customerName = 'bob';
var bestCustomer = 'not bob';
const leastFavoriteCustomer = 'Jane';

function upperCaseCustomerName(){

    console.log(customerName.toUpperCase());

}

console.log(upperCaseCustomerName())

function setBestCustomer(){

    console.log(bestCustomer);
}

console.log(setBestCustomer())

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';

    return bestCustomer;
}

console.log(overwriteBestCustomer())

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Mary';

    return leastFavoriteCustomer;
}

// console.log(changeLeastFavoriteCustomer())