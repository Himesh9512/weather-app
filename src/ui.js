// create html element and add class to it
function create_element(elementName, className) {
  const element = document.createElement(elementName);
  element.classList.add(className);

  return element;
}

// create search bar
function create_search_bar(){
  const search = create_element('div','search');
  const searchBar = create_element('input','search-input');
  searchBar.setAttribute('placeholder','Search your city...')

  const searchButton = create_element('button','search-button');
  searchButton.innerHTML = '<span class="material-icons">search</span>';

  search.appendChild(searchBar);
  search.appendChild(searchButton);
  
  return search;
}

// create body part of page
function create_body() {
  const body = create_element("div", "body");

  body.appendChild(create_search_bar());

  return body;
}

// create footer of page
function create_footer() {
  const footer = create_element("div", "footer");

  const textContent = create_element("div", "footer-content");
  textContent.innerText = "© created by ";
  textContent.appendChild(craete_hyperlink());

  footer.appendChild(textContent);
  return footer;
}

function craete_hyperlink() {
  const link = document.createElement("a");
  link.innerText = "Himesh9512";
  link.href = "https://github.com/Himesh9512";

  return link;
}

export default function create_page() {
  const main = document.getElementById("container");

  main.appendChild(create_body());
  main.appendChild(create_footer());
}
