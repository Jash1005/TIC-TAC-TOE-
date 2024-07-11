const boxes = document.querySelectorAll('.box');   // this will create an array having 9 box
const resetbtn = document.querySelector('.reset-button');
const result = document.querySelector('.result');
const h1 = result.querySelector('h1');
const newgame = result.querySelector('.newgame');

let chance = 0;

//now we will store all the winning patterns

const winning = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach( (box) => 
{
    box.addEventListener('click', () => 
    {
        if(chance == 0){
            box.innerHTML = 'O';
            chance = 1;
        }
        else{
            box.innerHTML = 'X';
            chance = 0;
        }
        box.disabled = true;
        checkwinner();
    })
})

const checkwinner = () => {
    for(let pattern of winning)
    {
       let val1 =  boxes[pattern[0]].innerText;
       let val2 = boxes[pattern[1]].innerText;
       let val3 = boxes[pattern[2]].innerText;

       if(val1 != "" && val2 != "" && val3 != "")
       {
           if(val1 === val2 && val2 === val3){
              console.log("winner");
              let prev;
              if(chance == 0) prev = 1;
              else prev = 0;
              h1.innerText = `WINNER is Player ${prev}`; 
              newgame.style.display = 'flex';
           }
       }
    }
}


function reset() {

    h1.innerHTML = '';
    newgame.style.display = 'none';
    chance = 0;

    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = '';
    }
    
};

newgame.addEventListener('click' , reset);
resetbtn.addEventListener('click' , reset);