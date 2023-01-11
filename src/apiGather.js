import displayAll from "./display";
let dataObj = { err: false };
let maxWeekData = {};
let minWeekData = {};
let hourlyData = {};

/**
 * Effect: Fetches data from today's forecast and passes it in
 * as data inside of dataObj. If city isn't recognized, err
 * key in dataObj is made to be true and error is logged.
 */
async function fetchData(city){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cc08e61c3eaa3f813da239cf0ddbb6eb`)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        if(data.cod === '404'){
            throw new Error();
        }
        dataObj = data;
        //console.log(dataObj)
    })
    .catch((err) => {
        console.log('Failed to fetch from API')
        dataObj.err = true;
    })
}

/**
 * Effect: Gathers the weekly data (max and min) and hourly data
 * and places each form of data into a specific object that
 * correlates to the data it holds.
 */
async function specificGather(){
    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&daily=temperature_2m_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        if(data.cod === '404'){
            throw new Error("Failed to fetch from API");
        }
        maxWeekData = data;
        //console.log(maxWeekData)
    })
    .catch((err) => {
        console.log(err)
    })

    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&daily=temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        if(data.cod === '404'){
            throw new Error("Failed to fetch from API");
        }
        minWeekData = data;
        //console.log(minWeekData)
    })
    .catch((err) => {
        console.log(err)
    })

    await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        if(data.cod === '404'){
            throw new Error("Failed to fetch from API");
        }
        hourlyData = data;
        //console.log(hourlyData)
    })
    .catch((err) => {
        console.log(err)
    })
}


/**
 * Effect: Gathers all data from city passed in as argument and
 * displays all of it on screen. If city isn't recognized by
 * API, then nothing new will be displayed. Default display will
 * be Ithaca.
 */
async function gatherAll(city='Ithaca'){
    await fetchData(city);
    if(!dataObj.err){
        await specificGather();
        displayAll(dataObj, maxWeekData, minWeekData, hourlyData)
    }
    else{
        console.log('Please Enter City')
    }
}

export default gatherAll