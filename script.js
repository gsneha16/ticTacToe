let blocks = document.querySelectorAll(".block");
let reset_btn = document.querySelector(".reset-btn");
let winMsg = document.querySelector("#winMsg");
let newGameBtn = document.querySelector(".newGameBtn");
let msgCont = document.querySelector(".msgCont");
let count= 0;
let turnO = true;
let winPatterns = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let resetGame = () =>{
    turnO = true;
    enableBlocks();
    msgCont.classList.add("hide");
}
blocks.forEach((block)=>{
    block.addEventListener("click",() => {
        if (turnO === true){
            block.innerText = "O" ;
            turnO = false;
        }
        else{
            block.innerText = "X" ;
            turnO = true;
        }
       block.disabled= true; // for not changing the value after ones
       count++;
       let isWinner = checkWinner();
       if(count===9 && !isWinner ){
        drawGame();
       }
       checkWinner();
    });
});
 
// logic of game....finding winner
/*let checkWinner = () =>{
    for(let pattern of winPatterns) {
        console.log(pattern);
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            blocks[pattern[0]].innerText,
            blocks[pattern[1]].innerText,                blocks[pattern[2]].innerText
        );
    } 
}*/
let enableBlocks = ()=>{
    for (let block of blocks){
        block.disabled = false;
        block.innerText = "";
    }
};
let disableBlocks = ()=>{
    for (let block of blocks){
        block.disabled = true;
    }
};
let drawGame = () =>{
    winMsg.innerHTML = "OOPS! , Game is Draw";
    msgCont.classList.remove('hide');
}
let showWinner = (Winner)=>{
    winMsg.innerText = `Congratulations, Winner is ${Winner}`
    msgCont.classList.remove('hide');
    disableBlocks();
}
let checkWinner = () =>{
    for(let pattern of winPatterns) {
        let pos1val = blocks[pattern[0]].innerText;
        let pos2val = blocks[pattern[1]].innerText;             
        let pos3val = blocks[pattern[2]].innerText;
        if (pos1val !== "",pos2val !== "",pos3val !== ""){
            if(pos1val===pos2val && pos1val=== pos3val){
                showWinner(pos1val);
            }
        }
    } 
};
newGameBtn.addEventListener("click", (resetGame));
reset_btn.addEventListener("click", (resetGame));