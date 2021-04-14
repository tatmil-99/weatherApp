const searchForm = document.querySelector(".search-location");
const cityName = document.querySelector(".city-name p");
const temperature = document.querySelector(".temp span");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const condition = document.querySelector(".condition");

const tempConvert = (kelvin) => {
  const fahrenheit = Math.round((kelvin - 273.15) * 9 / 5 + 32);
  return fahrenheit;
};

const updateWeather = (city) => {
  console.log(city);
  cityName.innerText = city.name;
  temperature.innerText = `${tempConvert(city.main.temp)}°F`;
  high.innerText = `Hi ${tempConvert(city.main.temp_max)}°F`;
  low.innerText = `Lo ${tempConvert(city.main.temp_min)}°F`;
  feelsLike.innerText = `${tempConvert(city.main.feels_like)}°F`;
  humidity.innerText = `${city.main.humidity}%`;
  condition.innerText = `${city.weather[0].description}`;
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = document.querySelector(".search-location input").value;
  searchForm.reset();

  requestCity(cityValue).then((data) => updateWeather(data));
});