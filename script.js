const searchForm = document.querySelector(".search-location");
const cityName = document.querySelector(".city-name p");

const updateWeather = (city) => {
  cityName.innerText = city.name;
};

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = document.querySelector(".search-location input").value;
  // console.log(cityValue);
  searchForm.reset();

  requestCity(cityValue).then((data) => updateWeather(data))
});