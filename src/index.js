import './styles/style.css';
import { gatherAll } from './apiGather';
import { changeSide } from './display';



gatherAll();
const elem = document.documentElement;
if (elem.requestFullscreen) {elem.requestFullscreen()}

document.getElementById('form').addEventListener('submit', (val) => {
    val.preventDefault();
    let cityName = document.getElementById('locSub').value
    console.log(cityName);

    gatherAll(cityName);
})

document.getElementById('button-hr1').addEventListener('click', () => {
    changeSide(1);
})

document.getElementById('button-hr2').addEventListener('click', () => {
    changeSide(2);
})

document.getElementById('button-hr3').addEventListener('click', () => {
    changeSide(3);
})