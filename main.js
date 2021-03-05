const csv = require('csv-parser');
const fs = require('fs');
const filePath = 'backend_file-calculation_dealership.csv';

const getNumberOfCarsByBrand = (brand, list) => {
    var results = [];
    (async() => {
        results = await csvParse();
        var numberOfcars = 0;
        results.forEach(car => {
            if (car.brand.toLowerCase() == brand.toLowerCase()) {
                numberOfcars++;
                if (list) {
                    console.log(car);
                }
            }
        });
        console.log('\nTotal of cars with brand name "' + brand + '" : ' + numberOfcars);
    })();
}

const getNumberOfCarsByMileages = (minMileage, maxMileage) => {
    var results = [];
    (async() => {
        results = await csvParse();
        var numberOfCars = 0;
        results.forEach(car => {
            var carMileage = parseFloat(car.mileage);
            if (carMileage > parseFloat(minMileage) && carMileage < parseFloat(maxMileage)) {
                console.log(car);
                numberOfCars++;
            }

        });
        console.log('\nTotal of cars in mileages range: ' + numberOfCars);
    })();
}

const getTotalValueByDealership = (dealership) => {
    var results = [];
    (async() => {
        results = await csvParse();
        var totalValue = 0;
        results.forEach(car => {
            if (car.dealer.toLowerCase() == dealership.toLowerCase()) {
                totalValue = totalValue + parseInt(car.price);
            }
        });
        console.log('\nTotal value of cars of dealership "' + dealership + '" : EUR ' + formatMoney(totalValue));
    })();
}

function csvParse() {
    let array = [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csv(['brand', 'dealer', 'mileage', 'price']))
            .on("error", error => reject(error))
            .on("data", data => array.push(data))
            .on("end", () => {
                resolve(array);
            });
    });

}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};

module.exports = {
    getNumberOfCarsByBrand,
    getTotalValueByDealership,
    getNumberOfCarsByMileages
}