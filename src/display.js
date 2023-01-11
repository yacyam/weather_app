/**
 * Effect: Displays today's main weather forecast
 * as a general forecast on the left side of the
 * screen.
 */
function displayMain(todayWeather){
    console.log(todayWeather)
    let name = document.getElementById('nameCity');
    let temp = document.getElementById('tempCity');
    let max = document.getElementById('maxCity');
    let min = document.getElementById('minCity');
    let feel = document.getElementById('feelCity');
    let chance = document.getElementById('rainCity');
    let wind = document.getElementById('windCity');
    name.innerHTML = `${todayWeather.name} `
    
    temp.innerHTML = `Temperature: ${Math.round((todayWeather.main.temp - 273.15) * (9/5) + 32)}° F`
    max.innerHTML = `Today's High: ${Math.round((todayWeather.main.temp_max - 273.15) * (9/5) + 32)}° F`
    min.innerHTML = `Today's Low: ${Math.round((todayWeather.main.temp_min - 273.15) * (9/5) + 32)}° F`
    feel.innerHTML = `Feels Like: ${Math.round((todayWeather.main.feels_like - 273.15) * (9/5) + 32)}° F`
    wind.innerHTML = `Wind Speeds: ${Math.round(todayWeather.wind.speed)} MPH`
    chance.innerHTML = `Current Weather: ${todayWeather.weather[0].main}`
}
/**
 * Effect: Displays maximum and minimum temperatures
 * for the entire week on the footer of the screen
 */
function displayFooter(maxTemps, minTemps){
    console.log(maxTemps)
    console.log(minTemps)
}

/**
 * Effect: Displays hourly temperatures for today
 * on the screen through hourlyTemps object data
 */
function displaySide(hourlyTemps){
    console.log(hourlyTemps)
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

export default displayAll