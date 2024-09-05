

const cell=document.querySelectorAll('.cell');
const result=document.querySelector('.result');
const gameOver=document.querySelector('.game-over');
const resetbtn=document.querySelector('.reset');
const instructor=document.querySelector('.instructor');

let player1 = true;
let count=0;

resetbtn.addEventListener("click",resetGame);
function startGame()
{
     cell.forEach(cell=>{
        cell.addEventListener("click",executeGame,{once:true});
     })
}

function executeGame()
{
    this.innerText = player1?"X":"O";
    count++;
    let val1 = cell[0].innerText;
    let val2 = cell[1].innerText;
    let val3 = cell[2].innerText;
    let val4 = cell[3].innerText;
    let val5 = cell[4].innerText;
    let val6 = cell[5].innerText;
    let val7 = cell[6].innerText;  
    let val8 = cell[7].innerText;
    let val9 = cell[8].innerText;

    if(
        (val1!=''&&val1==val2&&val2==val3)||
        (val4!=''&&val4==val5&&val5==val6)||
        (val7!=''&&val7==val8&&val8==val9)||
        (val1!=''&&val1==val4&&val4==val7)||
        (val2!=''&&val2==val5&&val5==val8)||
        (val3!=''&&val3==val6&&val6==val9)||
        (val1!=''&&val1==val5&&val5==val9)||
        (val3!=''&&val3==val5&&val5==val7)
    )
    {
        gameOver.style.display = "flex";
        result.innerText = player1?"player X won":"player O won";
        instructor.innerText="";
        return 
    }                           

    if(count==9)
    {
        result.innerText = "It's a tie";
        gameOver.style.display = 'flex';
        instructor.innerText="";
        return;
    }
    player1=!player1;

    if(player1){
        instructor.innerText = 'player X turn';
    }
    else{
        instructor.innerText  = 'player O turn';
    }
}
function resetGame(){
    gameOver.style.display = 'none';
    cell.forEach(cell=>
        {
            cell.innerText = '';
        })
        startGame();
        player1=true;
        count=0;

        instructor.innerText = "player X turn";
}
startGame();
