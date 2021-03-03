const csv = require('csv-parser');
const fs = require('fs');
const results = [];
fs.createReadStream('backend_file-calculation_dealership.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        //console.log(results);
    });


const getNumberOfCarsByBrand = (brand) => { //and --list
    return console.log(brand);
}

const getNumberOfCarsByMileage = (maxMileage, minMileage) => {

}

const getTotalValueByDealership = (dealership) => {

}

module.exports = {
    getNumberOfCarsByBrand,
    getTotalValueByDealership,
    getNumberOfCarsByMileage
}



//and the --list
//, //and the --list
//totalValueByDealership