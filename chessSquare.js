class ChessSquare {
    
    constructor(chessColor, boardLocation, pieceType) {
        this.pieceType = pieceType || '';
        this.chessColor = chessColor || none;
        this.boardLocation = boardLocation;
    }

    squareHasPiece(){
        return (this.pieceType !== '') ? true : false;
   
    }
    
    
    
    //On Hover all possibilities are shown
    AvailableMoves(){
        switch(this.pieceType){
            //Case for king
            case '♔':
            case '♚':
                console.log('Found a king');
            break;
            // Case queen
            case '♕':
            case '♛':
                console.log('Found a queen');
            break;
            // Case rook
            case '♖':
            case '♜':
                console.log('Found a rook');
            break;
            // Case bishop
            case '♗':
            case '♝':
                console.log('Found a bishop');
            break;
            // Case knight
            case '♘':
            case '♞':
                console.log('Found a knight');
            break;
            // Case pawn
            case '♙':
            case '♟︎':
                console.log('Found a pawn');
            break;
            default:
                console.log('No piece found in switch statement');
        }

    }

    //Creates the html and adds it to the chessboard
    CreateSquare(classArray){
        let classStr = '';
        classArray.forEach(function(value, i) {
            if(classArray.length < i){
                classStr += value + ' ';
            }else{
                classStr += value;
       }
            
      });
      return `<div class="${classStr}">
                    <div class="${classPieceStr}">
                        <span>${this.pieceType}</span>
                    </div>
             </div>`;
    }
     
}