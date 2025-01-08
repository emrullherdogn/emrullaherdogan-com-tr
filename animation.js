function expandBox(element) {
    var box = element.parentElement;
    var allBoxes = document.querySelectorAll('.content-box');
    allBoxes.forEach(function (b) {
        if (b !== box) {
            b.classList.add('hidden');
        }
    });
    box.classList.add('expanded');
}

function collapseBox(element) {
    var box = element.parentElement;
    var allBoxes = document.querySelectorAll('.content-box');
    allBoxes.forEach(function (b) {
        b.classList.remove('hidden');
    });
    box.classList.remove('expanded');
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);
