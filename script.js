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

loadComponent('./components/info/info.html', 'app');
setTimeout(()=>{
    animOnScroll();
}, 300);
// document.addEventListener('DOMContentLoaded', animOnScroll);
document.addEventListener("scroll", animOnScroll);
    
function animOnScroll(){
    let animItems = document.querySelectorAll('._animItems');
    if(animItems.length > 0){
        for(let i = 0; i < animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight/animStart;

            if(animItemHeight >window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
                 }

                 if((pageYOffset > animItemOffset - animItemPoint)&&pageYOffset<(animItemOffset+animItemHeight)){
                     animItem.classList.add('_active');
                 }else{
                     if(!animItem.classList.contains('_anim-no-hide')){

                     animItem.classList.remove('_active');
                     }
                 }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top:rect.top +scrollTop, left: rect.left+scrollLeft}
    }
}