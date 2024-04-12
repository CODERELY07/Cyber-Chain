const bar = document.getElementById('bar');
const icon = document.getElementById('icon');

bar.addEventListener('click', function() {
    var nav = document.querySelector('header nav');
    var search = document.querySelector('.search');
    
    if (nav.style.opacity === "1") {
        nav.style.opacity = "0";
        search.style.opacity = "0";
        setTimeout(function() {
            search.style.opacity = "0";
        }, 300); 
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
        document.body.style.overflow = "auto";
        
    } else {
        nav.style.opacity = "1";
        search.style.opacity = "1";
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
        document.body.style.overflow = "hidden";
    }
});
window.addEventListener('resize', function() {
    location.reload();
});

