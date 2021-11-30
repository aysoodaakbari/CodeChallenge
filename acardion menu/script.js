let acardion = document.querySelector('.acardion');
Array.from(acardion.children).forEach(wrapper => {
    wrapper.querySelector('span').addEventListener('click', e => {
        let span = e.target;
        let wrapper = span.parentElement;
        wrapper.classList.toggle("show");




    })
})