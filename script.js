let char = document.getElementById('char');
let obs = document.getElementById('obs');

document.addEventListener('keydown', e =>{
    if(e.key === '' || e.code === 'Space'){
        char.classList.toggle('animate')
        }
}) 

const checkGame = setInterval(() =>{
    const charCheck = parseInt(window.getComputedStyle(char).getPropertyValue('top'));
    const obsCheck = parseInt(window.getComputedStyle(obs).getPropertyValue('left'));

    if(obsCheck > 5 && obsCheck < 15 && charCheck >= 16){
        obs.style.animation = 'none';
        alert('GAME OVER LOSER!!')
    }
}, 10)