# Printers
Printers is a simple to use module that allows you print a pdf or a text file.

## Installation
```js
npm i @kamkam1_0/printers
```

## How to use

### Get the default printer

```js
const printers = require('@kamkam1_0/printers')
const defaultPrinter = printers.getPrinter()
/*
    Expected Output: HP....
*/
```

### Print a file
You can give a relative or absolute path to print the file.

```js
const printers = require('@kamkam1_0/printers')
const defaultPrinter = printers.print('/Users/JohnDoe/Desktop/test.txt')
/*
    Expected Output: true
*/
```