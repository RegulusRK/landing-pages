(function() {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/simplebar/dist/simplebar.min.js';
    document.head.appendChild(script);
})();
document.querySelectorAll('.arrow').forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        var answer = this.parentElement.nextElementSibling;
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            answer.classList.add('shown');
            this.src = "images/arrow-up.png"; 
        } else {
            answer.classList.remove('shown');
            answer.classList.add('hidden');
            this.src = "images/arrow-down.png";
        }
    });
});