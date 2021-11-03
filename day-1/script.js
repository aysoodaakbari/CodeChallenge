const counters = document.querySelectorAll(".counter");
const speed = 1000;
counters.forEach(counter => {
    const NumUpdate = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = +counter.innerText;
        const increase = target / speed;
        if (count < target) {
            counter.innerText = Math.ceil(count + increase);
            setTimeout(NumUpdate, 1);
        } else {
            count.innerText = target;
        }
    }
    NumUpdate();
});