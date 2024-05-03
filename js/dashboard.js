let dash = document.getElementById('dash');
let isDashboardVisible = true;
let logo = document.getElementById('log');

function toggleSection(sectionId) {
    var sections = document.querySelectorAll('.hidden');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    if (sectionId == 'Calendar') {
        document.getElementById(sectionId).style.display = 'flex';
        document.getElementById('Dasboard').style.display = 'none';
    } else {
        document.getElementById(sectionId).style.display = 'block';
        document.getElementById('Calendar').style.display = 'none';
    }
    document.getElementById('dash').style.display = 'none';
}



function showDashboard() {
    if (isDashboardVisible) {
        dash.style.display = "none";
        logo.style.display = "none";
        isDashboardVisible = false;
    } else {
        dash.style.display = "block";
        logo.style.display = "block";
        dash.style.zIndex = "2";
        dash.style.height = "100vh";
        dash.style.top = "-50px";
        dash.style.position = "absolute";
        isDashboardVisible = true;
    }
}
let index = document.getElementById('index');
let index2 = document.getElementById('index2');
let index3 = document.getElementById('index3');
let index4 = document.getElementById('index4');
function notifToggle() {
   
    var notificationContent = document.querySelector('.notication-content');
    if (notificationContent.classList.contains('small')) {
        notificationContent.style.display = "block";
        notificationContent.classList.remove('small');
        index.style.display = "block";
        index2.style.display = "flex";
        index3.style.display = "flex";
        index4.style.display = "flex";
    } else {
        index.style.display = "none";
        index2.style.display = "none";
        index3.style.display = "none";
        index4.style.display = "none";
        console.log(index)
        notificationContent.classList.add('small');
    }
}

