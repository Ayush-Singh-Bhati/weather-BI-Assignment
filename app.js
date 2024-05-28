let inputvalue = document.querySelector('#city');
let submit = document.querySelector('#submit');
let cityName = document.querySelector('#cityName');
let temp = document.querySelector('#temp');
let temp_min = document.querySelector('#temp_min');
let temp_max = document.querySelector('#temp_max');
let wind = document.querySelector('#wind');
let humidity = document.querySelector('#humidity');

apikey = "e60c70c9374f09276d4715795c77cd59"

function conversion(fahr) {
    return (fahr - 273).toFixed(2);
}

submit.addEventListener('click', function () {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apikey)
        .then(response => response.json())
        .then(data => {
            let nameval = data['name']
            let tempM = data['main']['temp']
            let tempMin = data['main']['temp_min']
            let tempMax = data['main']['temp_max']
            let humi = data['main']['humidity']
            let windval = data['wind']['speed']
            let desc = data['weather']['0']['description']

            console.log(nameval)

            cityName.innerHTML = `${nameval} <h6>(${desc})</h6>`
            temp.innerHTML = ` <h6>Temprature</h6> <br> ${conversion(tempM)}&deg <span>C<span/>`
            temp_min.innerHTML = `${conversion(tempMin)}&deg `
            temp_max.innerHTML = `/ ${conversion(tempMax)}&deg`
            wind.innerHTML = `<h6>Wind</h6> <br> ${windval}<span>km/h<span/>`
            humidity.innerHTML = `<h6>Humidity</h6> <br> ${humi}<span>%<span/>`

        })

        .catch(err => alert("Please enter the valid city name!"))
})