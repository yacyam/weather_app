import './styles/style.css';
import gatherAll from './apiGather';

gatherAll();

document.getElementById('form').addEventListener('submit', (val) => {
    val.preventDefault();
    let cityName = document.getElementById('locSub').value
    console.log(cityName);

    //gatherAll(cityName)
})