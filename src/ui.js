function create_body () {
    const body = document.createElement('div');

    return body;

} 

function create_footer () {
    const footer = document.createElement('div');
    footer.classList.add('flex', 'justify-center', 'content-center');
}
export default function create_page () {
    const main = document.getElementById('container');

    main.classList.add('bg-image');

    main.appendChild(body);
}