import hot from './assets/images/hot.png'
import cold from './assets/images/104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png'
import { hourlyData } from './apiGather';

let hrs = {hr1: false, hr2: false, hr3: false};
/**
 * Effect: Displays today's main weather forecast
 * as a general forecast on the left side of the
 * screen.
 */
function displayMain(todayWeather){
    let name = document.getElementById('nameCity');
    let temp = document.getElementById('tempCity');
    let feel = document.getElementById('feelCity');
    let chance = document.getElementById('rainCity');
    let wind = document.getElementById('windCity');
    name.innerHTML = `${todayWeather.name}`
    
    temp.innerHTML = `Temperature: ${Math.round((todayWeather.main.temp - 273.15) * (9/5) + 32)}° F`
    feel.innerHTML = `Feels Like: ${Math.round((todayWeather.main.feels_like - 273.15) * (9/5) + 32)}° F`
    wind.innerHTML = `Wind Speeds: ${Math.round(todayWeather.wind.speed)} MPH`
    chance.innerHTML = `Current Weather: ${todayWeather.weather[0].main}`
}
/**
 * Effect: Displays maximum and minimum temperatures
 * for the entire week on the footer of the screen
 */
function displayFooter(maxTemps, minTemps){
    //Create all base elements for footer
    let max = document.createElement('h3');
    let min = document.createElement('h3');
    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    let todayDate = document.createElement('h4');
    image1.src = hot;
    image2.src = cold;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let date1 = parseInt(dd);
    let date2 = parseInt(dd) + 1;
    let date3 = parseInt(dd) + 2;
    let date4 = parseInt(dd) + 3;
    let date5 = parseInt(dd) + 4;
    let date6 = parseInt(dd) + 5;
    let date7 = parseInt(dd) + 6;

    today = mm + '/' + date1.toString() + '/' + yyyy;
    todayDate.innerText = today;

    //Get all divs to place info into
    let day1 = document.getElementById('day-1');
    let day2 = document.getElementById('day-2');
    let day3 = document.getElementById('day-3');
    let day4 = document.getElementById('day-4');
    let day5 = document.getElementById('day-5');
    let day6 = document.getElementById('day-6');
    let day7 = document.getElementById('day-7');

    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[0])}° F`
    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[0])}° F`
    day1.innerHTML = ``
    if(Math.round(maxTemps.daily.temperature_2m_max[0]) > 40){
        day1.appendChild(image1);
        day1.appendChild(max);
        day1.appendChild(min);
    }
    else{
        day1.appendChild(image2);
        day1.appendChild(max);
        day1.appendChild(min);
    }
    day1.appendChild(todayDate);


    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
    //Creates today's date
    todayDate = document.createElement('h4');
    today = mm + '/' + date2.toString() + '/' + yyyy;
    todayDate.innerText = today;

    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[1])}° F`
    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[1])}° F`
    day2.innerHTML = ``
    if(Math.round(maxTemps.daily.temperature_2m_max[1]) > 40){
        day2.appendChild(image1);
        day2.appendChild(max);
        day2.appendChild(min);
    }
    else{
        day2.appendChild(image2);
        day2.appendChild(max);
        day2.appendChild(min);
    }
    day2.appendChild(todayDate);

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    //Creates today's date
    todayDate = document.createElement('h4');
    today = mm + '/' + date3.toString() + '/' + yyyy;
    todayDate.innerText = today;

    max = document.createElement('h3');
    min = document.createElement('h3');
    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[2])}° F`
    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[2])}° F`
    day3.innerHTML = ``
    if(Math.round(maxTemps.daily.temperature_2m_max[2]) > 40){
        day3.appendChild(image1);
        day3.appendChild(max);
        day3.appendChild(min);
    }
    else{
        day3.appendChild(image2);
        day3.appendChild(max);
        day3.appendChild(min);
    }
    day3.appendChild(todayDate);

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    //Creates today's date
    todayDate = document.createElement('h4');
    today = mm + '/' + date4.toString() + '/' + yyyy;
    todayDate.innerText = today;

    max = document.createElement('h3');
    min = document.createElement('h3');
    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[3])}° F`
    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[3])}° F`
    day4.innerHTML = ``
    if(Math.round(maxTemps.daily.temperature_2m_max[3]) > 40){
        day4.appendChild(image1);
        day4.appendChild(max);
        day4.appendChild(min);
    }
    else{
        day4.appendChild(image2);
        day4.appendChild(max);
        day4.appendChild(min);
    }
    day4.appendChild(todayDate);

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
    //Creates today's date
    todayDate = document.createElement('h4');
    today = mm + '/' + date5.toString() + '/' + yyyy;
    todayDate.innerText = today;

    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[4])}° F`
    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[4])}° F`
    day5.innerHTML = ``
    if(Math.round(maxTemps.daily.temperature_2m_max[4]) > 40){
        day5.appendChild(image1);
        day5.appendChild(max);
        day5.appendChild(min);
    }
    else{
        day5.appendChild(image2);
        day5.appendChild(max);
        day5.appendChild(min);
    }
    day5.appendChild(todayDate);

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
    //Creates today's date
    todayDate = document.createElement('h4');
    today = mm + '/' + date6.toString() + '/' + yyyy;
    todayDate.innerText = today;

    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[5])}° F`
    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[5])}° F`
    day6.innerHTML = ``
    if(Math.round(maxTemps.daily.temperature_2m_max[5]) > 40){
        day6.appendChild(image1);
        day6.appendChild(max);
        day6.appendChild(min);
    }
    else{
        day6.appendChild(image2);
        day6.appendChild(max);
        day6.appendChild(min);
    }
    day6.appendChild(todayDate);

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
    //Creates today's date
    todayDate = document.createElement('h4');
    today = mm + '/' + date7.toString() + '/' + yyyy;
    todayDate.innerText = today;

    max.innerHTML = `High: ${Math.round(maxTemps.daily.temperature_2m_max[6])}° F`
    min.innerHTML = `Low: ${Math.round(minTemps.daily.temperature_2m_min[6])}° F`
    day7.innerHTML = ``
    if(Math.round(maxTemps.daily.temperature_2m_max[6]) > 40){
        day7.appendChild(image1);
        day7.appendChild(max);
        day7.appendChild(min);
    }
    else{
        day7.appendChild(image2);
        day7.appendChild(max);
        day7.appendChild(min);
    }
    day7.appendChild(todayDate);
}

/**
 * Effect: Displays hourly temperatures for today
 * on the screen through hourlyTemps object data
 */
function displaySide(hourlyTemps, hourType=8){
    let hr1 = hourlyTemps.hourly.time[hourType];
    let cutHR1 = hr1.slice(hr1.indexOf('T') + 1);
    let actualHR1 = parseInt(cutHR1.slice(0, cutHR1.indexOf(':')));

    let hr2 = hourlyTemps.hourly.time[hourType + 1];
    let cutHR2 = hr2.slice(hr1.indexOf('T') + 1);
    let actualHR2 = parseInt(cutHR2.slice(0, cutHR1.indexOf(':')));

    let hr3 = hourlyTemps.hourly.time[hourType + 2];
    let cutHR3 = hr3.slice(hr1.indexOf('T') + 1);
    let actualHR3 = parseInt(cutHR3.slice(0, cutHR1.indexOf(':')));

    let hr4 = hourlyTemps.hourly.time[hourType + 3];
    let cutHR4 = hr4.slice(hr1.indexOf('T') + 1);
    let actualHR4 = parseInt(cutHR4.slice(0, cutHR1.indexOf(':')));

    let hr5 = hourlyTemps.hourly.time[hourType + 4];
    let cutHR5 = hr5.slice(hr1.indexOf('T') + 1);
    let actualHR5 = parseInt(cutHR5.slice(0, cutHR1.indexOf(':')));

    let hr6 = hourlyTemps.hourly.time[hourType + 5];
    let cutHR6 = hr6.slice(hr1.indexOf('T') + 1);
    let actualHR6 = parseInt(cutHR6.slice(0, cutHR1.indexOf(':')));

    let hr7 = hourlyTemps.hourly.time[hourType + 6];
    let cutHR7 = hr7.slice(hr1.indexOf('T') + 1);
    let actualHR7 = parseInt(cutHR7.slice(0, cutHR1.indexOf(':')));

    let hr8 = hourlyTemps.hourly.time[hourType + 7];
    let cutHR8 = hr8.slice(hr1.indexOf('T') + 1);
    let actualHR8 = parseInt(cutHR8.slice(0, cutHR1.indexOf(':')));

    let temp = document.createElement('h2');
    let hour = document.createElement('h3');

    let hour1 = document.getElementById('hour-1');
    let hour2 = document.getElementById('hour-2');
    let hour3 = document.getElementById('hour-3');
    let hour4 = document.getElementById('hour-4');
    let hour5 = document.getElementById('hour-5');
    let hour6 = document.getElementById('hour-6');
    let hour7 = document.getElementById('hour-7');
    let hour8 = document.getElementById('hour-8');

    if(actualHR1 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR1 < 12){
        hour.innerHTML = `${actualHR1}:00 AM`;
    }
    else if(actualHR1 === 12){
        hour.innerHTML = `${actualHR1}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR1 - 12}:00 PM`;
    }
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType])}° F`
    hour1.innerHTML = ``;
    hour1.appendChild(temp);
    hour1.appendChild(hour);

    hour = document.createElement('h3');
    if(actualHR2 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR2 < 12){
        hour.innerHTML = `${actualHR2}:00 AM`;
    }
    else if(actualHR2 === 12){
        hour.innerHTML = `${actualHR2}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR2 - 12}:00 PM`;
    }
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+1])}° F`
    hour2.innerHTML = ``;
    hour2.appendChild(temp);
    hour2.appendChild(hour);

    hour = document.createElement('h3');
    if(actualHR3 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR3 < 12){
        hour.innerHTML = `${actualHR3}:00 AM`;
    }
    else if(actualHR3 === 12){
        hour.innerHTML = `${actualHR3}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR3 - 12}:00 PM`;
    }
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+2])}° F`
    hour3.innerHTML = ``
    hour3.appendChild(temp);
    hour3.appendChild(hour);

    hour = document.createElement('h3');
    if(actualHR4 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR4 < 12){
        hour.innerHTML = `${actualHR4}:00 AM`;
    }
    else if(actualHR4 === 12){
        hour.innerHTML = `${actualHR4}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR4 - 12}:00 PM`;
    }
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+3])}° F`
    hour4.innerHTML = ``
    hour4.appendChild(temp);
    hour4.appendChild(hour);

    hour = document.createElement('h3');
    if(actualHR5 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR5 < 12){
        hour.innerHTML = `${actualHR5}:00 AM`;
    }
    else if(actualHR5 === 12){
        hour.innerHTML = `${actualHR5}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR5 - 12}:00 PM`;
    }
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+4])}° F`
    hour5.innerHTML = ``
    hour5.appendChild(temp);
    hour5.appendChild(hour);

    hour = document.createElement('h3');
    if(actualHR6 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR6 < 12){
        hour.innerHTML = `${actualHR6}:00 AM`;
    }
    else if(actualHR6 === 12){
        hour.innerHTML = `${actualHR6}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR6 - 12}:00 PM`;
    }
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+5])}° F`
    hour6.innerHTML = ``
    hour6.appendChild(temp);
    hour6.appendChild(hour);

    hour = document.createElement('h3');
    if(actualHR7 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR7 < 12){
        hour.innerHTML = `${actualHR7}:00 AM`;
    }
    else if(actualHR7 === 12){
        hour.innerHTML = `${actualHR7}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR7 - 12}:00 PM`;
    }
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+6])}° F`
    hour7.innerHTML = ``
    hour7.appendChild(temp);
    hour7.appendChild(hour);

    hour = document.createElement('h3');
    if(actualHR8 === 0){
        hour.innerHTML = `12:00 AM`;
    }
    else if(actualHR8 < 12){
        hour.innerHTML = `${actualHR8}:00 AM`;
    }
    else if(actualHR8 === 12){
        hour.innerHTML = `${actualHR8}:00 PM`;
    }
    else{
        hour.innerHTML = `${actualHR8 - 12}:00 PM`;
    }
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[hourType+7])}° F`
    hour8.innerHTML = ``
    hour8.appendChild(temp);
    hour8.appendChild(hour);
}

function changeSide(num){
    if(num === 1){
        if(!hrs.hr1){
            hrs.hr1 = true;
            hrs.hr2 = false;
            hrs.hr3 = false;
            displaySide(hourlyData, 8);
            document.getElementById('button-hr1').classList = 'active'
            document.getElementById('button-hr2').classList = ''
            document.getElementById('button-hr3').classList = ''
        }
    }
    else if(num === 2){
        if(!hrs.hr2){
            hrs.hr2 = true;
            hrs.hr1 = false;
            hrs.hr3 = false;
            displaySide(hourlyData, 16);
            document.getElementById('button-hr1').classList = ''
            document.getElementById('button-hr2').classList = 'active'
            document.getElementById('button-hr3').classList = ''
        }
    }
    else{
        if(!hrs.hr3){
            hrs.hr3 = true;
            hrs.hr1 = false;
            hrs.hr2 = false;
            displaySide(hourlyData, 24);
            document.getElementById('button-hr1').classList = ''
            document.getElementById('button-hr2').classList = ''
            document.getElementById('button-hr3').classList = 'active'
        }
    }
}
/**
 * Effect: Takes in today's weather, maximum and minimum
 * temperatures for 7 days, and hourly temperatures, and
 * displays each of them in their respective area on screen
 */
function displayAll(today, max, min, hour){
    displayMain(today)
    displayFooter(max, min)
    displaySide(hour)
}

export { displayAll, changeSide }