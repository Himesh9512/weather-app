function temp_section(temp, weather) {
	const tempSection = document.createElement("div");
	tempSection.classList.add("temp-section");

	const temperature = document.createElement("span");
	temperature.classList.add("temperature");
	temperature.innerText = temp + " " + "℃";

	const weatherInfo = document.createElement("div");
	weatherInfo.classList.add("weather");
	weatherInfo.innerText = weather;

	tempSection.appendChild(temperature);
	tempSection.appendChild(weatherInfo);

	return tempSection;
}

function other_info_section(fillsLike, humidity, windSpeed, maxTemp) {
	const otherInfoSection = document.createElement("div");
	otherInfoSection.classList.add("other-info-section");

	const fillsLikeInfo = document.createElement("div");
	fillsLikeInfo.classList.add("card-text");
	fillsLikeInfo.innerText = "fills like: " + fillsLike + "℃";

	const humidityInfo = document.createElement("div");
	humidityInfo.classList.add("card-text");
	humidityInfo.innerText = "humidity: " + humidity + "%";

	const windSpeedInfo = document.createElement("div");
	windSpeedInfo.classList.add("card-text");
	windSpeedInfo.innerText = "wind speed: " + windSpeed + " m/s";

	const maxTempInfo = document.createElement("div");
	maxTempInfo.classList.add("card-text");
	maxTempInfo.innerText = "max temp: " + maxTemp + "℃";

	otherInfoSection.appendChild(fillsLikeInfo);
	otherInfoSection.appendChild(humidityInfo);
	otherInfoSection.appendChild(windSpeedInfo);
	otherInfoSection.appendChild(maxTempInfo);

	return otherInfoSection;
}

export function location_title(cityName, countryName) {
	const locationTitle = document.createElement("div");
	locationTitle.classList.add("location-title");
	locationTitle.innerText = cityName + ", " + countryName;

	return locationTitle;
}

export default function create_weather_card(temp, weather, fillsLike, humidity, windSpeed, maxTemp) {
	const weatherCard = document.createElement("div");
	weatherCard.classList.add("card");

	weatherCard.appendChild(temp_section(temp, weather));
	weatherCard.appendChild(other_info_section(fillsLike, humidity, windSpeed, maxTemp));

	return weatherCard;
}
