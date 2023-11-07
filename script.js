//creates a div table for etch-a-sketch with defined number of columns and rows 
let rowNum = 4;
let columnNum = 4;
let table = [];

for (let o = 0; o < rowNum; o++) {
    let generateRow = [];

    for (let i = 0; i < columnNum; i++) {
        generateRow[i]= i;
    };

    table["row" + o] = generateRow;    
};

console.log(table);
console.log(table["row3"]);