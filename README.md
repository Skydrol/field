# Field Test

The following code represents a small CLI application for car data searching.

## Usage

There are some command implemented. You need to execute it on bash in the root directory.

To get the number of cars by brand (parameter: brand):

```bash
node command.js getNumberOfCarsByBrand <brand>
```
To get the number of cars and the list of cars by brand (parameter: brand):
```bash
node command.js getNumberOfCarsByBrand <brand> --list
```
To get the number of cars and the list of cars by mileage range (parameters: maxMileage, minMileage):
```bash
node command.js getNumberOfCarsByMileages <minMileage>, <maxMileage>
```
To get the total value of cars that exist in a given dealership (parameter: dealership);
```bash
node command.js getTotalValueByDealership <dealership>
```