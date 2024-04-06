const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from propagating to document
        // console.log("Printed");
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.add('active')
            });
        });
    });
});

// Event listener to close dropdown when clicking outside
document.addEventListener('click', (event) => {
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.menu');
        if (!menu.contains(event.target)) {
            menu.classList.remove('menu-open');
            dropdown.querySelector('.select').classList.remove('select-clicked');
            dropdown.querySelector('.caret').classList.remove('caret-rotate');
        }
    });
});
