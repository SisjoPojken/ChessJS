//Ref to the reset button
const resetBtn = document.querySelector('.btn');
//Use bubble up for the click events 
const board = document.querySelector(".chess-bord");
//Keep track of all white pieces
const wPlayer = document.querySelectorAll(".white-player");
const allSquares = document.querySelectorAll('.square');
//Boolean to keep track of first and second click
let firstMove;
//Boolean player turn
let whitePlayerTurn =true;

let chessPieceToMove = [];

//Initiate a new player
let whitePlayer = new ChessPlayer('WhitePlayer');
let blackPlayer = new ChessPlayer('BlackPlayer');

console.log(board);
resetBtn.addEventListener('click',(e) => {
    console.log(e.target);
    location.reload();
    return false;
});

board.addEventListener('click',e => movePiece(e));

function  movePiece(e){
    let target = e.target;
    console.log(e);
    console.log(target);
    if(firstMove){
//    Second click
        if((target.classList.contains('square') || target.parentElement.classList.contains('square')) && target !== chessPieceToMove.Start){
            // move the piece if its positioned in a square   
            checkMoveAndScore(target);
            target.innerHTML += chessPieceToMove.html;
            chessPieceToMove.Start.innerHTML = '';

            firstMove = !firstMove;
            whitePlayerTurn = !whitePlayerTurn;
        }
    }else {
        //first click
         if(target.classList.contains('square') || target.parentElement.classList.contains('square')){
                if(target.innerHTML){
                    chessPieceToMove.Start = target;
                    chessPieceToMove.html = target.innerHTML;
                    firstMove = !firstMove || true;
                }
        }
    }
        
}

function checkMoveAndScore(target){
    if(target.innerHTML){
        console.log(target.innerHTML);
        console.log(target.textContent);
        if(whitePlayerTurn){
            whitePlayer.score += 1;
            whitePlayer.takenPieces.push(target.textContent.trim());

        }else{
            blackPlayer.score += 1;
            blackPlayer.takenPieces.push(target.textContent.trim());

        }
    }
    console.log(whitePlayer);
    console.log(blackPlayer);
}
