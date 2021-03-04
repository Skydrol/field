const program = require('commander');
const {
    getNumberOfCarsByBrand, //and the --list
    getNumberOfCarsByMileage, //and the --list
    getTotalValueByDealership

} = require('./main');

program
    .command('getNumberOfCarsByBrand <brand>')
    .alias('cars-by-brand')
    .description('get the number of cars by brand (parameter: brand)')
    .option('-l, --list', 'list cars')
    .action((brand, options) => {
        getNumberOfCarsByBrand(brand, options.list);
    });

program
    .command('getTotalValueByDealership <dealership>')
    .alias('cars-by-dealer')
    .description('get the total value of cars that exist in a given dealership')
    .option('-l, --list', 'list cars')
    .action((dealership) => {
        getTotalValueByDealership(dealership);
    });


program.parse(process.argv);