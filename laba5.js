document.getElementById('get-weather').addEventListener('click', function() {
    const apiKey = 'b1ac0d87c5590c78787de2c47f0cf89e';
    const city = 'Helsinki';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            console.log('HTTP статус:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! статус: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Дані про погоду:', data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Помилка завантаження:', error);
            document.getElementById('weather-display').innerText = 'Не вдалося отримати дані про погоду.';
        });
});

function displayWeather(data) {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `
        <p><strong>Температура:</strong> ${temperature}°C</p>
        <p><strong>Вологість:</strong> ${humidity}%</p>
        <p><strong>Швидкість вітру:</strong> ${windSpeed} м/с</p>
    `;
}


