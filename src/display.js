/**
 * Effect: Displays today's main weather forecast
 * as a general forecast on the left side of the
 * screen.
 */
function displayMain(todayWeather){
    console.log(todayWeather)
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