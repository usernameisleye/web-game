let char = document.getElementById('char');
let obs = document.getElementById('obs');

document.addEventListener('keyup', e =>{
    if(e.key === '' || e.code === 'Space'){
        char.classList.toggle('animate')
    }
})