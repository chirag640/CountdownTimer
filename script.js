let timer;
let hoursInput, minutesInput, secondsInput;
let timeInSeconds = 0;

// Variable to store the remaining time when stopped
let remainingTime = 0;

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatTime(timeInSeconds);
}

function startTimer() {
  if (!timer) {
    hoursInput = parseInt(document.getElementById('hours').value) || 0;
    minutesInput = parseInt(document.getElementById('minutes').value) || 0;
    secondsInput = parseInt(document.getElementById('seconds').value) || 0;

    // If there is remaining time from the stop action, use it
    timeInSeconds = remainingTime || (hoursInput * 3600 + minutesInput * 60 + secondsInput);
    updateTimerDisplay();

    timer = setInterval(() => {
      if (timeInSeconds > 0) {
        timeInSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        timer = null;
        alert('Timer has ended!');
        // Reset background color when the timer is reset
      }
    }, 1000);
    document.getElementById('timer').style.backgroundColor = '#62e674';
  }
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;

    // Store the remaining time when stopped
    remainingTime = timeInSeconds;
    // Change background color of #timer to red when the timer is stopped
    document.getElementById('timer').style.backgroundColor = '#e74c3c';
  }
}

function resetTimer() {
  stopTimer();
  timeInSeconds = 0;
  updateTimerDisplay();

  // Reset background color when the timer is reset
  document.getElementById('timer').style.backgroundColor = '#ecf0f1';

  // Reset the remaining time variable
  remainingTime = 0;

  // Reset input fields to zero
  document.getElementById('hours').value = 0;
  document.getElementById('minutes').value = 0;
  document.getElementById('seconds').value = 0;
}

