const program = require('commander');
const {
    getNumberOfCarsByBrand, //and the --list
    getNumberOfCarsByMileages, //and the --list
    getTotalValueByDealership

} = require('./main');

//==================== CARS BY BRAND ======================
program
    .command('getNumberOfCarsByBrand <brand>')
    .alias('cars-by-brand')
    .description('get the number of cars by brand (parameter: brand)')
    .option('-l, --list', 'list cars')
    .action((brand, options) => {
        getNumberOfCarsByBrand(brand, options.list);
    });
//=========================================================

//==================== CARS BY DEALER =====================
program
    .command('getTotalValueByDealership <dealership>')
    .alias('total-value-by-dealer')
    .description('get the total value of cars that exist in a given dealership')
    .action((dealership) => {
        getTotalValueByDealership(dealership);
    });
//=========================================================

//==================== CARS BY MILEAGE ====================
program
    .command('getNumberOfCarsByMileages <minMileage>, <maxMileage>')
    .alias('cars-by-mileage-range')
    .description('get the number of cars and the list of cars by mileage range (parameters: maxMileage, minMileage)')
    .action((minMileage, maxMileage) => {
        getNumberOfCarsByMileages(minMileage, maxMileage);
    });
//=========================================================
//getNumberOfCarsByMileages


program.parse(process.argv);