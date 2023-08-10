var roundScore, activePlayer, scores, gamePlaying = true;

init();

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    if (gamePlaying){
         //1.create a random number;
    var dice = Math.floor(Math.random () * 6) + 1;
    //2.display the random number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
        //3.update the round score if not 1
    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //nextPlayer
        nextPlayer();
    }
    }

});

    document.querySelector('.btn-hold').addEventListener('click',function(){
        //add current score to global score
        scores[activePlayer] += roundScore;
        
        //update the ui 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        //check if player won the game
        if (scores[activePlayer] >=20){ 
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
        
        //next player
        nextPlayer();
    });
    
    function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //change the active player
        roundScore = 0; 
        document.getElementById('current-0').textContent = 0; //daca ai nimerit 1 => pierzi tot punctajul
        document.getElementById('current-1').textContent = 0;
        //change the player 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }

    document.querySelector('.btn-new').addEventListener('click',init);

    function init(){
        scores = [0,0];
        activePlayer = 0;
        roundScore = 0;
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

    }