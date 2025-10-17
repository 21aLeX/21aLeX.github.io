function loadComponent(filePath, containerId) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(containerId);
            container.innerHTML += html; // Добавляем загруженный HTML
        })
        .catch(error => {
            console.error(`Ошибка при загрузке ${filePath}:`, error); // Логируем ошибку
        });
}

const components = [
    './components/info/info.html',
    './components/contacts/contacts.html',
    './components/description/description.html',
    './components/skils/skils.html',
    './components/experience/experience.html'
];

async function loadComponents() {
    for (const component of components) {
        await loadComponent(component, 'app');
    }
}

loadComponents();