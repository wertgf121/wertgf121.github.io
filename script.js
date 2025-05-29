function updateDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();
  document.getElementById('datetime').textContent = `${dateString} ${timeString}`;
}

updateDateTime(); // initial update
setInterval(updateDateTime, 1000); // update every second

document.addEventListener("DOMContentLoaded", () => {
  // Function to fetch and update percent
  function fetchProgress() {
    fetch(`ARB_percent_value.json?t=${Date.now()}`) // cache-busting query
      .then((response) => response.json())
      .then((data) => {
        const percent = Number(data.ARBPercent);
        document.getElementById("percent-display").textContent = `${percent.toFixed(2)}% to ARB Validation`;
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }

  fetchProgress();              // Initial fetch
  setInterval(fetchProgress, 60000);  // Fetch every 60 seconds
});

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;

const eventDate = "10/15/2025";

startCountdown(eventDate);

function startCountdown(eventDate) {
    const countDown = new Date(eventDate).getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDown - now;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "Event started!";
            return;
        }

        const w = Math.floor(distance / week);
        const d = Math.floor((distance % week) / day);
        const h = Math.floor((distance % day) / hour);
        const m = Math.floor((distance % hour) / minute);
        const s = Math.floor((distance % minute) / second);

        document.getElementById("weeks").innerText = w;
        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;
    }, 1000);
}
