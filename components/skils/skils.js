// Конфигурация сегментов
const segmentsConfig = [
    {
        segment: 'segment1',
        key: 'key-1'
    },
    {
        segment: 'segment2',
        key: 'key-2'
    },
    {
        segment: 'segment3',
        key: 'key-3'
    },
    {
        segment: 'segment4',
        key: 'key-4'
    },
    {
        segment: 'segment5',
        key: 'key-5'
    },
    {
        segment: 'segment6',
        key: 'key-6'
    }
];

let activeSegment = null;

// активация элемента
function activateElement(segmentId) {
    if (activeSegment === segmentId) return;

    deactivateAll();

    const config = segmentsConfig.find(item => item.segment === segmentId);
    if (config) {
        const segmentElement = document.getElementById(config.segment);
        const legendElement = document.getElementById(config.key);

        if (segmentElement && legendElement) {
            segmentElement.classList.add('active');
            legendElement.classList.add('active');
            activeSegment = segmentId;
        }
    }
}

// для деактивации всех элементов
function deactivateAll() {
    segmentsConfig.forEach(item => {
        const segmentElement = document.getElementById(item.segment);
        const legendElement = document.getElementById(item.key);

        if (segmentElement && legendElement) {
            segmentElement.classList.remove('active');
            legendElement.classList.remove('active');
        }
    });
    activeSegment = null;
}


// обработчики событий
function initializeInteractivity() {
    console.log('Инициализация интерактивного круга...');

    segmentsConfig.forEach(config => {
        const segmentElement = document.getElementById(config.segment);
        const legendElement = document.getElementById(config.key);

        if (segmentElement && legendElement) {
            // Обработчики для сегмента
            segmentElement.addEventListener('mouseenter', () => activateElement(config.segment));
            segmentElement.addEventListener('click', () => activateElement(config.segment));

            // Обработчики для элемента легенды
            legendElement.addEventListener('mouseenter', () => activateElement(config.segment));
            legendElement.addEventListener('click', () => activateElement(config.segment));

            console.log(`Обработчики добавлены для ${config.segment}`);
        } else {
            console.warn(`Элементы не найдены: ${config.segment} или ${config.key}`);
        }
    });

    // деактивация при клике вне элементов
    document.addEventListener('click', (e) => {
        if (!isInteractiveElement(e.target)) {
            deactivateAll();
        }
    });

    // деактивация при наведении вне контейнера
    document.addEventListener('mouseover', (e) => {
        if (!e.target.closest('.container')) {
            deactivateAll();
        }
    });
}



export default initializeInteractivity;