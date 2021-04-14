const key = "369d22c525938e841fa5991e68e8d7d0";

const requestCity = async (city) => {
  try {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${city}&appid=${key}`;

    let response = await fetch(url + query);
    let json = await response.json();

    return json;
    
  } catch(err) {
    alert(err);
  };
};
