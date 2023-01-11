let dataObj = { err: false };
let maxWeekData = {};
let minWeekData = {};
let hourlyData = {};
async function fetchData(city){
    let obj;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cc08e61c3eaa3f813da239cf0ddbb6eb`)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        if(data.cod === '404'){
            throw new Error("Failed to fetch from API");
        }
        dataObj = data;
        console.log(dataObj)
    })
    .catch((err) => {
        console.log(err)
        dataObj.err = true;
    })
}
//MAX AND MIN TEMP FOR 7 DAYS ALONG WITH HOURLY
/**
 * `https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&daily=temperature_2m_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&daily=temperature_2m_min&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
`https://api.open-meteo.com/v1/forecast?latitude=${dataObj.coord.lat}&longitude=${dataObj.coord.lon}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`
 */

/**
 * Effect: Gathers the weekly data (max and min) and hourly data
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
        console.log(maxWeekData)
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
        console.log(minWeekData)
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
        console.log(hourlyData)
    })
    .catch((err) => {
        console.log(err)
    })
}

async function gatherAll(city='Ithaca'){
    await fetchData(city);
    if(!dataObj.err){
        await specificGather();
    }
    else{
        console.log('please enter actual values')
    }
}

export default gatherAll