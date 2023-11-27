 //refactor this
 //creates a table of divs with defined number of rows and columns
function setTable(numberOfRows, numberOfColumns, tableDOM) {
    let table = [];
    let c=1;
    for (let o = 1; o < numberOfRows + 1; o++) {
        let generateRow = [];
        let rowStorage = document.createElement("div");
        tableDOM.appendChild(rowStorage);
        rowStorage.setAttribute("class", "row" + o + " " + "row");
        for (let i = 1; i < numberOfColumns + 1; i++) {
            let storage;
            storage = document.createElement("div");
            storage.setAttribute("class", "column" + i + " " + "column");
            storage.setAttribute("class", "square");
            storage.setAttribute("id", "square" + c);
            c++;
            rowStorage.appendChild(storage)
            generateRow["column" + i]= storage;
        };
        table["row" + o] = generateRow;    
    };
    return table;
};

const tableSpread = document.body.appendChild(document.createElement("div"));
tableSpread.setAttribute("class", "tableSpread");

let a=100;

setTable(a,a, tableSpread);

function changeColor(item) {
    let randomColor=Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
};

let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = changeColor();
    });
});


