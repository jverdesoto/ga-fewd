document.getElementById('theme').addEventListener('click', function() {
    let container = document.getElementById('container')
    if (container.classList.contains('dark')) {
        container.classList.remove('dark')
    } else {
        container.classList.add('dark');
    }   
})