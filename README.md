# Printers
Printers is a simple to use module that allows you print a pdf or a text file. For now, this module only work on macs.

## Installation
```js
npm i printers
```

## How to use

### Get the default printer

```js
const printers = require('printers')
const defaultPrinter = printers.getPrinter()
/*
    Expected Output: HP....
*/
```

### Print a file
You can give a relative or absolute path to print the file.

```js
const printers = require('printers')
const defaultPrinter = printers.print('/Users/JohnDoe/Desktop/test.txt')
/*
    Expected Output: true
*/
```