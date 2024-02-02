AOS.init();
document.addEventListener('DOMContentLoaded', function() {
  const eventDate = new Date(2024, 1, 13, 10, 0, 0).getTime();
  const countdownInterval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeDifference = eventDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    // Se o tempo acabar, pare o contador
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = 'O evento começou!';
    }
  }, 1000);
});
