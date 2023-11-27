//creates table with rows and columns of divs
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

//button that asks for user input to create new table
let a=window.prompt("How big do you want your etch-a-sketch to be?");

setTable(a,a, tableSpread);

//randomly change color with each mouseover
function changeColor(item) {
    let randomColor=Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
};

//enables mouseover to color the background of div
let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", ()=> {
        square.style.backgroundColor = changeColor();
    });
});


