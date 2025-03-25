particlesJS.load('particles-js', '/particles.json', function () {
    console.log('particles.js config loaded');
});

document.getElementById("downloadResume").addEventListener("click", function (e) {
    e.preventDefault();

    // Show a SweetAlert2 notification
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Downloading resume...',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.open('/images/André%20Bachman%20CV%20Sve.pdf', '_blank');
    });
});

document.getElementById("downloadCert1").addEventListener("click", function (e) {
    e.preventDefault();

    // Show a SweetAlert2 notification
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Downloading certification...',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.open('/images/certAcademy.pdf', '_blank');
    });
});

document.getElementById("downloadCert2").addEventListener("click", function (e) {
    e.preventDefault();

    // Show a SweetAlert2 notification
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Downloading certification...',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        window.open('/images/Microsoft.pdf', '_blank');
    });
});
