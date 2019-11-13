const body = document.body;
const btn = document.querySelector('.btn-menu');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});

btn.addEventListener('mousedown', (e) => { e.preventDefault();});

function closeMenu(){
    document.getElementById("navbar").style.height = "0%";
}