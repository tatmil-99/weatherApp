const searchForm = document.querySelector(".search-location");
const cityName = document.querySelector(".city-name p");
const temperature = document.querySelector(".temp span");
const high = document.querySelector(".high");
const low = document.querySelector(".low");
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");
const condition = document.querySelector(".condition");
const weatherIcon = document.querySelector(".icon-container img");
const dayOrNight = document.querySelector(".card-top img");

const tempConvert = (kelvin) => {
  const fahrenheit = Math.round((kelvin - 273.15) * 9 / 5 + 32);
  return fahrenheit;
};

const textWhite = () => {
  cityName.style.color = "white";
}

const textBlack = () => {
  cityName.style.color = "#707070";
}

const updateWeather = (city) => {
  const icon = city.weather[0].icon;
  const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  cityName.innerText = city.name;
  temperature.innerText = `${tempConvert(city.main.temp)}°F`;
  high.innerText = `Hi ${tempConvert(city.main.temp_max)}°F`;
  low.innerText = `Lo ${tempConvert(city.main.temp_min)}°F`;
  feelsLike.innerText = `${tempConvert(city.main.feels_like)}°F`;
  humidity.innerText = `${city.main.humidity}%`;
  condition.innerText = `${city.weather[0].description}`;
  weatherIcon.src = imgUrl;

  if (icon.includes("d")) {
    dayOrNight.src = "img/day_image.svg";
    textBlack();
  } else {
    dayOrNight.src = "img/night_image.svg";
    textWhite();
  };
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = document.querySelector(".search-location input").value;
  searchForm.reset();

  requestCity(cityValue).then((data) => updateWeather(data));
});