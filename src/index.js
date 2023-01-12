import './styles/style.css';
import img from './assets/images/pexels-bri-schneiter-346529.jpg'
import gatherAll from './apiGather';


gatherAll();

document.getElementById('form').addEventListener('submit', (val) => {
    val.preventDefault();
    let cityName = document.getElementById('locSub').value
    console.log(cityName);

    gatherAll(cityName);
})