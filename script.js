const searchForm = document.querySelector(".search-location");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityValue = document.querySelector(".search-location input").value;
  // console.log(cityValue);
  searchForm.reset();

  requestCity(cityValue);
});