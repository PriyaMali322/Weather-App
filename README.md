# Weather-App
A simple weather web app using WeatherAPI that shows current weather and 5-day forecast based on user input.

🔧 Features:
Current Weather: Displays the current temperature, weather condition, humidity, and wind speed for any location.
5-Day Forecast: Provides a 5-day weather forecast, including high and low temperatures for each day.
User Input: Users can search for weather information by entering the location of their choice.
Weather Icons: Weather condition icons are displayed along with their descriptions.

🛠️ Tech Stack:
Frontend: HTML, CSS, JavaScript
Weather API: WeatherAPI (for fetching weather data)

🔒 API Key:
The app uses a WeatherAPI key to fetch weather data.
To keep the API key secure, a proxy server is used to handle requests to the WeatherAPI, ensuring the key is never exposed on the frontend.

📦 How to Set Up:
1. Clone the repository to your local machine:
git clone https://github.com/your-username/weather-app.git
2. Open the index.html file in your browser to view the app
3. To run the app locally with a proxy server:
Set up a Node.js server to handle requests to the WeatherAPI (see proxy-server.js for example).
The server will securely store and use the WeatherAPI key to fetch weather data.
4. Alternatively, you can deploy the app using GitHub Pages for frontend and a backend platform like Heroku for the proxy server.

🌍 Usage:
Enter a city or location in the input field to get the current weather and forecast for the next 5 data.

🌟 Contributions:
Contributions to improve the app are welcome! Feel free to fork the repository, submit issues, and create pull requests.

