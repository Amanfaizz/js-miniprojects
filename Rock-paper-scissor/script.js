        const score = JSON.parse(localStorage.getItem('score')) || 
        {wins : 0,
        loss : 0,
        tie: 0}
    
        
        
        
        function computersMove() {
            const randNumber = Math.random();
            let computerMove = '';
            if (randNumber >= 0 && randNumber < 1 / 3) {
                computerMove = 'Rock';
            }
            else if (randNumber >= 1 / 3 && randNumber < 2 / 3) {
                computerMove = 'Paper';
            }
            else {
                computerMove = 'Scissor';
            }
            return computerMove;
        }

        function playGame(playerMove) {
            let result = ''
            const computerMove = computersMove();
            if (playerMove === 'Rock') {
                if (computerMove === 'Rock') {
                    result = 'tie'
                }
                else if (computerMove === 'Paper') {
                    result = 'You Lose'
                }
                else {
                    result = 'You Win';
                }

           
                

            }

            else if (playerMove === 'Paper') {
                if (computerMove === 'Paper') {
                    result = 'tie'
                }
                else if (computerMove === 'Scissor') {
                    result = 'You Lose'
                }
                else {
                    result = 'You Win'
                }
            }

            else {
                if (computerMove === 'Scissor') {
                    result = 'tie'
                }
                else if (computerMove === 'Rock') {
                    result = 'You Lose'
                }
                else {
                    result = 'You Win'
                }
            }
             if(result==='You Win'){
                score.wins ++;
            }

            else if(result==='You Lose'){
                score.loss ++;
            }

            else{
                score.tie ++;
            }

            localStorage.setItem('score',JSON.stringify(score));

           
                alert(`you chose: ${playerMove}. Computer chose ${computerMove} , result ${result}`)


                
        console.log(score);

        }


        function reset(){
           score.wins = 0;
           score.loss = 0;
           score.tie = 0;
           localStorage.setItem('score',JSON.stringify(score));

           console.log(score);

        }
