let score=JSON.parse(localStorage.getItem('score'));
            if(score===null){
                score={
                    wins:0,
                    losses:0,
                    ties:0
                };
            }

            updateScore();

            let result='';
            function res(yourMove)
            {
                let move = pickMove();
                if(yourMove==='rock'){
                if(move==='rock')
                result='tie';
                else if(move==='paper')
                result='lose';
                else
                result='win';
                }
                else if(yourMove==='paper'){
                if(move==='rock')
                result='win';
                else if(move==='paper')
                result='tie';
                else
                result='lose';
                }
                else {
                if(move==='rock')
                result='lose';
                else if(move==='paper')
                result='win';
                else
                result='tie';
                }
                if (result==='win')
                score.wins+=1;
                else if(result === 'lose')
                score.losses+=1;
                else 
                score.ties+=1;

                localStorage.setItem('score',JSON.stringify(score));
                
                updateScore();

                document.querySelector('.result').
                    innerHTML =result;
                document.querySelector('.moves').
                    innerHTML =`you <img src="images/${yourMove}.jpg" 
                    class="move-icon"> 
                    <img src="images/${move}.jpg" 
                    class="move-icon"> 
                     computer`;

            }
           

            function updateScore()
            {
                document.querySelector('.scores')
                .innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
            }
            function pickMove()
            {    
            const randomNum= Math.random();
            let move='';
            if(randomNum>=0 && randomNum<1/3)
            move= 'rock';
            else if(randomNum>=1/3 && randomNum<2/3)
            move= 'paper';
            else 
            move='scissors';
            return move;
            }
           
