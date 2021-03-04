const csv = require('csv-parser');
const fs = require('fs');

const getNumberOfCarsByBrand = (brand, list) => {
    let results = [];
    fs.createReadStream('backend_file-calculation_dealership.csv')
        .pipe(csv(['brand', 'dealer', 'mileage', 'price']))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            var numberOfcars = 0;
            results.forEach(element => {
                if (element.brand.toLowerCase() == brand.toLowerCase()) {
                    numberOfcars++;
                    if (list) {
                        console.log(element);
                    }
                }
            });
            console.log('\nTotal of cars with brand name "' + brand + '" : ' + numberOfcars);
        });


}

const getNumberOfCarsByMileage = (maxMileage, minMileage) => {

}

const getTotalValueByDealership = (dealership) => {
    let results = [];
    fs.createReadStream('backend_file-calculation_dealership.csv')
        .pipe(csv(['brand', 'dealer', 'mileage', 'price']))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            var totalValue = 0;
            results.forEach(element => {
                if (element.dealer.toLowerCase() == dealership.toLowerCase()) {
                    totalValue = totalValue + parseInt(element.price);

                }
            });
            console.log('\nTotal value of cars of dealership "' + dealership + '" : ' + totalValue);
        });
}

module.exports = {
    getNumberOfCarsByBrand,
    getTotalValueByDealership,
    getNumberOfCarsByMileage
}



//and the --list
//, //and the --list
//totalValueByDealership