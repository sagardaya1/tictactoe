const boxes=document.querySelectorAll('.box');
const reset =document.querySelector('#reset');

let message=document.querySelector('.message');
let msg=document.querySelector('#msg');
let turn0=true;

const winPattern=[ [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    console.log("clicked");
    if(turn0){
      box.innerText="0";
      turn0=false;

    }
    else{
      box.innerText="x";
      turn0=true;


    }
    box.disabled=true;
    checkWinner();

  });
});
const resetgame = () => {
  turn0 = true;
  count = 0;
  enable();


  message.classList.add("hide");
};

const enable=()=>{
  for(let box of boxes){
    box.innerText="";
    box.disabled=false;

  }
};
const showWinner=(winner)=>{
  msg.innerText=`congrats ,winner is ${winner}`;
  message.classList.remove("hide");
}

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        
      }
    }
  }
};
reset.addEventListener("click",resetgame);
