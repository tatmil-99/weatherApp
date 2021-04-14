const searchForm = document.querySelector(".search-location");
const cityName = document.querySelector(".city-name p");
const temperature = document.querySelector(".temp span")

const updateWeather = (city) => {
  console.log(city);
  const tempConvert = Math.round((city.main.temp - 273.15) * 9 / 5 + 32); 

  cityName.innerText = city.name;
  temperature.innerText = `${tempConvert}°F`;
};



searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = document.querySelector(".search-location input").value;
  searchForm.reset();

  requestCity(cityValue).then((data) => updateWeather(data))
});