const program = require('commander');
const {
    getNumberOfCarsByBrand, //and the --list
    getNumberOfCarsByMileage, //and the --list
    getTotalValueByDealership

} = require('./main');

program
    .version('1.0.0')
    .description('Cars CSV simple searcher');

program
    .command('getNumberOfCarsByBrand <brand>')
    .alias('cars-by-brand')
    .description('get the number of cars by brand (parameter: brand)')
    .action((brand) => {
        getNumberOfCarsByBrand(brand);
    });
program
    .option('-l, --list', 'list cars')

program.parse(process.argv);

const options = program.opts();
if (options.list) console.log(options);

//node command.js getNumberOfCarsByBrand aaa