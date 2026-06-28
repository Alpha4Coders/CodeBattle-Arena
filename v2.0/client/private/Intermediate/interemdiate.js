const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== menuToggle) {
        sidebar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

sidebar.addEventListener('click', (e) => {
    e.stopPropagation();
});