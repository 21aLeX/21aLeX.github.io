import initializeInteractivity from './components/skils/skils.js'

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
    './components/experience/experience.html',
    './components/skils/skils.html',
    './components/projects/projects.html',
    './components/education/education.html',
    './components/footer/footer.html'
];

async function loadComponents() {
    for (const component of components) {
        await loadComponent(component, 'app');
    }
    initializeInteractivity();
}

loadComponents();