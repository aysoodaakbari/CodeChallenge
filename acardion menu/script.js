let acardion = document.querySelector('.acardion');
Array.from(acardion.children).forEach(wrapper => {
    if (wrapper.classList.contains("show")) {
        wrapper.querySelector("div").style.maxHeight = wrapper.querySelector('div').scrollHeight + 30 + 'px';
    }
    wrapper.querySelector('span').addEventListener('click', e => {
        let span = e.target;
        let wrapper = span.parentElement;
        let div = span.nextElementSibling;

        wrapper.classList.toggle("show");
        if (wrapper.classList.contains('show')) {
            div.style.maxHeight = div.scrollHeight + 30 + 'px';
        } else {
            div.style.maxHeight = null;
        }
        // remove show class from another wrapper
        Array.from(acardion.children).forEach(wp => {

            if (wp != wrapper) {
                wp.classList.remove('show')
                wp.querySelector("div").style.maxHeight = null;
            }
        })




    })
})