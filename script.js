let char = document.getElementById('char');
let obs = document.getElementById('obs');
let obs1 = document.getElementById('obs1');

document.addEventListener('keydown', e =>{
    if(e.key === '' || e.code === 'Space'){
        char.classList.toggle('animate')
        }
}) 

const checkGame = setInterval(() =>{
    const charCheck = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    const obsCheck = parseInt(window.getComputedStyle(obs && obs1).getPropertyValue('left'));

//     if(obsCheck > 6 && obsCheck < 8 && charCheck >= 8){
//         obs.style.animation = 'none';
//         obs.style.display = 'none';
//         alert('GAME OVER LOSER!!')
//     }
// }, 10)