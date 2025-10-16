// Функция для загрузки HTML из файла
function loadHTML(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.statusText}`);
            }
            return response.text();
        });
}

loadHTML('info.html').then(html => {
    const app = document.getElementById('app');
    app.innerHTML += html;
}).catch(error => {
    console.error(error);
});

export default loadHTML;
