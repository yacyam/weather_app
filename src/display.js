import hot from './assets/images/hot.png'
import cold from './assets/images/104203196-simple-icon-liquid-thermometer-cold-at-transparent-effect-background.png'
/**
 * Effect: Displays today's main weather forecast
 * as a general forecast on the left side of the
 * screen.
 */
function displayMain(todayWeather){
    console.log(todayWeather)
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
function displayFooter(maxTemps, minTemps, todayWeather){
    console.log(maxTemps)
    console.log(minTemps)
    let max = document.createElement('h3');
    let min = document.createElement('h3');
    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;

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

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
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

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
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

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
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

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
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

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
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

    image1 = document.createElement('img');
    image2 = document.createElement('img');
    image1.src = hot;
    image2.src = cold;
    max = document.createElement('h3');
    min = document.createElement('h3');
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
}

/**
 * Effect: Displays hourly temperatures for today
 * on the screen through hourlyTemps object data
 */
function displaySide(hourlyTemps){
    console.log(hourlyTemps)
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

    hour.innerHTML = `10:00 AM`;
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[10])}° F`
    hour1.innerHTML = ``;
    hour1.appendChild(temp);
    hour1.appendChild(hour);

    hour = document.createElement('h3');
    hour.innerHTML = `11:00 AM`;
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[11])}° F`
    hour2.innerHTML = ``;
    hour2.appendChild(temp);
    hour2.appendChild(hour);

    hour = document.createElement('h3');
    hour.innerHTML = `12:00 PM`;
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[12])}° F`
    hour3.innerHTML = ``
    hour3.appendChild(temp);
    hour3.appendChild(hour);

    hour = document.createElement('h3');
    hour.innerHTML = `1:00 PM`;
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[13])}° F`
    hour4.innerHTML = ``
    hour4.appendChild(temp);
    hour4.appendChild(hour);

    hour = document.createElement('h3');
    hour.innerHTML = `2:00 PM`;
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[14])}° F`
    hour5.innerHTML = ``
    hour5.appendChild(temp);
    hour5.appendChild(hour);

    hour = document.createElement('h3');
    hour.innerHTML = `3:00 PM`;
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[15])}° F`
    hour6.innerHTML = ``
    hour6.appendChild(temp);
    hour6.appendChild(hour);

    hour = document.createElement('h3');
    hour.innerHTML = `4:00 PM`;
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[16])}° F`
    hour7.innerHTML = ``
    hour7.appendChild(temp);
    hour7.appendChild(hour);

    hour = document.createElement('h3');
    hour.innerHTML = `5:00 PM`;
    temp = document.createElement('h2');
    temp.innerHTML = `${Math.round(hourlyTemps.hourly.temperature_2m[17])}° F`
    hour8.innerHTML = ``
    hour8.appendChild(temp);
    hour8.appendChild(hour);
}

/**
 * Effect: Takes in today's weather, maximum and minimum
 * temperatures for 7 days, and hourly temperatures, and
 * displays each of them in their respective area on screen
 */
function displayAll(today, max, min, hour){
    displayMain(today)
    displayFooter(max, min, today)
    displaySide(hour)
}

export default displayAll