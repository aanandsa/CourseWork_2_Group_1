//function to show booking notification//
$(document).ready(function () {

    function showNotification(name) {
        const message = name
            ? `You're all set, <strong>${name}</strong>! We'll see you at your appointment.`
            : `Your appointment has been booked successfully!`;

        $('#notification-message').html(message);

        $('#notification')
            .fadeIn(400)
            .delay(4000)
            .fadeOut(600);
    }

    $('.Appointment-form form').on('submit', function (e) {
        e.preventDefault();

        const name = $('input[placeholder="Enter your full Name"]').val().trim();
        const firstName = name.split(' ')[0];

        showNotification(firstName);
        localStorage.clear();
    });

    $(document).on('click', '.notification-close', function () {
        $('#notification').fadeOut(300);
    });

});

// Register the service worker//
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/cache.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('SW registration failed:', err));
}