const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const english = 'SAHILAMANFAZALCHIRAGYASHDHAVALMEETOMSOHILJAIMINAYESADHYEYANANTANKITJATINPIYUSHPREETTIRTHRIDHAMDHARSHAN';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '9313121066';

const alphabet = english + latin + nums;

const fontSize = 16;
const columns = canvas.width;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = 'rgba(0,0,0,0.05)'
  context.fillRect(0,0, canvas.width, canvas.height);
  
    context.fillStyle = '#0F0';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 80);