let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true//playerX,playerO;

//1-D array
//let arr=["apple","orange","grapes"];

//2-D array
//let arr2=[["apple","litchi"],["biscuit","lays"],["cocacola","pepsi"]];

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){//playerX
           box.innerText="O";
           turnO=false
        }
        else{//playerO
            box.innerText="X";
            turnO=true;
        }    
        box.disabled=true;
        checkWinner();
    }
    );
});
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`congratulations! winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner=()=>{
      for(pattern of winPatterns){
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2].innerText]);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && posVal3!=""){
            if(pos1Val===pos2Val && pos1Val===posVal3){
                console.log("winner",pos1Val);
                disableBoxes();
                showWinner(pos1Val);
            }
        }
      }   
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
