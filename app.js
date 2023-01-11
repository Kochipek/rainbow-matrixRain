const canvas = document.querySelector('#matrixRain');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 20;
const columns = canvas.width/fontSize;

const rainDrops = Array.from({ length: columns }).fill(canvas.height);
const gradient = context.createLinearGradient(100, 10, 1900, 1);

const draw = () => {
	context.fillStyle = 'rgba(1, 0, 0, 0.05)';
	context.fillRect(0, 0, window.innerWidth, window.innerHeight);
	gradient.addColorStop(0, 'red');
	gradient.addColorStop(1 / 6, 'orange');
	gradient.addColorStop(2 / 6, 'yellow');
	gradient.addColorStop(3 / 6, 'green');
	gradient.addColorStop(4 / 6, 'blue');
	gradient.addColorStop(1 / 6, 'indigo');
	gradient.addColorStop(1, 'violet');
	context.fillStyle = gradient;
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
};

setInterval(draw, 40);