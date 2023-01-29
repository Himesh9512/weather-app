import create_weather_card, { location_title } from "./card";

function create_card_with_data(location) {
	const cardSection = document.querySelector(".card-section");
	cardSection.innerHTML = "";

	cardSection.appendChild(location_title(location.name, location.sys.country));
	cardSection.appendChild(
		create_weather_card(
			location.main.temp,
			location.weather[0].main,
			location.main.feels_like,
			location.main.humidity,
			location.wind.speed,
			location.main.temp_max
		)
	);
}

function display_error(code, errorDes) {
	const cardSection = document.querySelector(".card-section");
	cardSection.innerHTML = "";

	const error = location_title(code, errorDes);
	error.style.color = "red";
	error.style.fontSize = "1.9rem";
	cardSection.appendChild(error);
}

export default async function call_api(query) {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=fd51d746b5ce2f2079f70daeb6304632&units=metric`);
	const data = await response.json();

	switch (data.cod) {
		case 200:
			create_card_with_data(data);
			break;
		case "404":
			display_error("error", "city not found!");
			break;
		case "400":
			display_error("error", "enter city name!");
			break;
		default:
			console.log(data.cod, "unknown error");
			break;
	}
}
