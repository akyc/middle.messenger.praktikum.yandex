//Только для удобства навигации по демо
const homeLinks = document.querySelectorAll('.go-home')
for (let link of homeLinks) {
    link.addEventListener('click', () => {
        window.location.href = '/'
    })
}