const footer = document.createElement('footer');
const getFullYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${getFullYear} raysantori`;
document.body.appendChild(footer);