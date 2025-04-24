async function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (!location) return;
  
    const apiKey = 'c889eaf2c5ee40b3a4b171659252404';
    const query = encodeURIComponent(location + ', India');
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.error) {
        document.getElementById('weatherResult').innerText = data.error.message;
      } else {
        const temp = data.current.temp_c;
        const condition = data.current.condition.text;
        const humidity = data.current.humidity;
        const wind = data.current.wind_kph;
        const icon = data.current.condition.icon;
  
        document.getElementById('weatherResult').innerHTML = `
          <strong>Location:</strong> ${data.location.name}, ${data.location.country}<br>
          <strong>Temperature:</strong> ${temp}&deg;C<br>
          <strong>Condition:</strong> ${condition}<br>
          <strong>Humidity:</strong> ${humidity}%<br>
          <strong>Wind:</strong> ${wind} kph<br>
          <img src="https:${icon}" alt="${condition}" class="icon">
        `;
      }
    } catch (error) {
      document.getElementById('weatherResult').innerText = 'Failed to fetch weather data';
    }
  
    // Get 5-day forecast
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=5&aqi=yes`;
    try {
      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();
  
      if (forecastData.error) {
        document.getElementById('forecastResult').innerText = forecastData.error.message;
      } else {
        const forecastHTML = forecastData.forecast.forecastday.map(day => {
          const date = new Date(day.date).toLocaleDateString();
          const dayCondition = day.day.condition.text;
          const dayIcon = day.day.condition.icon;
          const maxTemp = day.day.maxtemp_c;
          const minTemp = day.day.mintemp_c;
          return `
            <div class="forecast-day">
              <img src="https:${dayIcon}" alt="${dayCondition}" class="icon"><br>
              <strong>${date}</strong><br>
              ${dayCondition}<br>
              <strong>Max Temp:</strong> ${maxTemp}&deg;C<br>
              <strong>Min Temp:</strong> ${minTemp}&deg;C
            </div>
          `;
        }).join('');
        document.getElementById('forecastResult').innerHTML = forecastHTML;
      }
    } catch (error) {
      document.getElementById('forecastResult').innerText = 'Failed to fetch forecast data';
    }
  }
  