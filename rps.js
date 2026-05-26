 let score = JSON.parse(localStorage.getItem('score'))||{
            wins :0,
            losses:0,
            ties:0
        };
        updatescoreelement();

        let isautoplay= false;
        let interval;

        
       
        function autoplay(){
if(!isautoplay){
    interval= setInterval(function(){
                const playermove = pickcomputermove();
                playgame(playermove);
            },1000);
            isautoplay = true;

}else{
    clearInterval(interval);
    isautoplay=false;

}

           
        }

        document.body.addEventListener('keydown',()=>{
if(event.key == 'r'){
    playgame('rock');
}
else if(event.key == 'p'){
    playgame('paper');
}else if (event.key == 's'){
    playgame('scissor');
}

        })



    function playgame(playermove){
    const computermove = pickcomputermove();
    let r='';
        if(playermove === 'scissor'){
            if(computermove === 'rock'){
                r='You lose';
            }else if(computermove === 'paper'){
                r='You win'
            }else if(computermove === 'scissor'){
                r='Tie';
            }
        } else if (playermove === 'paper'){
            if(computermove === 'rock'){
                r='You win';
            }else if(computermove === 'paper'){
                r='Tie'
            }else if(computermove === 'scissor'){
                r='You lose';
            }
        
        }else if(playermove === 'rock'){
            if(computermove === 'rock'){
                r='Tie';
            }else if(computermove === 'paper'){
                r='You lose'
            }else if(computermove === 'scissor'){
                r='You win';
            }

        }

         if (r === 'You win') {
                score.wins += 1;
            } 
            else if (r === 'You lose') {
                score.losses += 1;
            } 
            else if (r === 'Tie') {
                score.ties += 1;
            }
localStorage.setItem('score',JSON.stringify(score));

updatescoreelement();

document.querySelector('.js-result').innerHTML=r;

document.querySelector('.js-moves').innerHTML=
 `you <img src="images/${playermove}-emoji.png" alt="" class="move-icon">
    <img src="images/${computermove}-emoji.png" alt="" class="move-icon">
computer`;}

    function updatescoreelement(){
    document.querySelector('.js-score').innerHTML = `wins: ${score.wins},losses :${score.losses} ,ties: ${score.ties}`
    };

    function pickcomputermove(){
            const random_no=Math.random();
            let computermove='';
            if(random_no>=0 && random_no<1/3){
                computermove='rock';

            }else if(random_no>=1/3 && random_no<2/3){
                computermove='paper';

            }else if(random_no>=2/3 && random_no<1){
                computermove='scissor';
            }
            return computermove;
}
    