//creates a table of divs with defined number of rows and columns
function setTable(numberOfRows, numberOfColumns, tableDOM) {

    //generates usable rows for table
    let table = [];
    for (let o = 1; o < numberOfRows + 1; o++) {
        let generateRow = [];
        let rowStorage = document.createElement("div");
        tableDOM.appendChild(rowStorage);
        rowStorage.setAttribute("class", "row" + o);
        for (let i = 1; i < numberOfColumns + 1; i++) {
            let storage;
            storage = document.createElement("div");
            storage.setAttribute("class", "row" + o + " " + "column" + i);
            rowStorage.appendChild(storage)
            generateRow["column" + i]= storage;

        };
        table["row" + o] = generateRow;    
    };
    return table;
};

const tableSpread = document.body.appendChild(document.createElement("div"));
tableSpread.id = "tableSpread";
console.log(setTable(4,4, tableSpread));