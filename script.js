let tableSpread=null;

//creates table with rows of square divs
function setTable(num, tableDOM) {
    let table = [];
    for (let o = 0; o < num; o++) {
        let generateRow = [];
        let rowStorage = document.createElement("div");
        tableDOM.appendChild(rowStorage);
        rowStorage.setAttribute("class","row");
        for (let i = 0; i < num; i++) {
            let storage=document.createElement("div");
            storage.setAttribute("class", "square")
            rowStorage.appendChild(storage);
            generateRow["column" + i]= storage;
        };
        table["row" + o] = generateRow;    
    };
    return table;
};

//button that asks for user input to create new table
function startEtch() {
    if (tableSpread!=null) {
        tableSpread.remove()
    };
    tableSpread = document.body.appendChild(document.createElement("div"));
    tableSpread.setAttribute("class", "tableSpread");
    var userInput=window.prompt("Enter the desired size of the Etch-a-Sketch",100);
    let gridNum=parseInt(userInput);
    if (gridNum>100) {
        gridNum=100;
    };
    setTable(gridNum, tableSpread);
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

    //clears the grid of colored divs on a button press
   
};

let clearButton=document.getElementById("clear");
clearButton.onclick= function clear() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor= "white";
    });
};








