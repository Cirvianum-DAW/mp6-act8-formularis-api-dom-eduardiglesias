document
  .getElementById('meteoForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const cp = document.getElementById('cp').value;
    const country = document.getElementById('country').value;

    if (!city) {
      alert('El camp ciutat és obligatòri');
      return; // Prevent further execution
    }

    const apiKey = 'aef9c398358a5ed79ee96e6aae1afcf4';

    const currentWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=es`;

    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&lang=es&days=2`;
    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(currentWeatherUrl),
        fetch(forecastUrl),
      ]);

      const [currentData, forecastData] = await Promise.all(
        currentResponse.json(),
        forecastResponse.json()
      );
      console.log(currentData);
      console.log(forecastData);

      const weatherData = {
        current: {
          city: currentData.location.name,
          country: currentData.location.country,
          region: currentData.location.region,
          weatherIcon: currentData.current.condition.icon,
          temperature: `${currentData.current.temp_c}°C`,
          weatherDescription: currentData.condition.text,
        },
        forecast: {
          city: forecastData.location.name,
          country: forecastData.location.country,
          region: forecastData.location.region,
          weatherIcon: forecastData.forecast.forecastday[1].day.condition.icon,
          temperature: `${forecastData.forecast.forecastday[1].day.avgtemp_C}°C`,
          weatherDescription: forecastData.condition.text,
        },
      };

      //És una bona pràctica separar ara la lògica per modificar l'HTML

      displayWeatherResults(weatherData);
    } catch (error) {
      // Handle errors
      alert('Error fetching weather data');
      console.error('Error:', error);
    }
  });

  function displayWeatherResults(weatherData) {
    
  }
