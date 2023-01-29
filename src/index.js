import "./style.css";
import create_page from "./js/ui";
import call_api from "./js/api";

function get_query() {
	const button = document.querySelector(".search-button");
	const searchBar = document.querySelector(".search-input");
	button.addEventListener("click", () => {
		let query = searchBar.value;
		call_api(query);
	});
}

function onload_tasks() {
	create_page();
	get_query();
}
window.onload = onload_tasks();
