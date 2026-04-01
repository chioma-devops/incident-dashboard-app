function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("live-time");

  if (timeElement) {
    const formatted = now.toLocaleString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    timeElement.textContent = formatted;
  }
}

function updateLastRefresh() {
  const el = document.getElementById("last-refresh");
  if (el) {
    el.textContent = new Date().toLocaleTimeString();
  }
}

let countdown = 30;

function updateCountdown() {
  const timerEl = document.getElementById("refresh-timer");

  if (timerEl) {
    timerEl.textContent = countdown;
  }

  countdown--;

  if (countdown < 0) {
    window.location.reload();
  }
}

function pulseBanner() {
  const banner = document.querySelector(".banner-card");
  if (banner) {
    banner.style.opacity = "0.7";
    setTimeout(() => {
      banner.style.opacity = "1";
    }, 300);
  }
}

// Initial runs
updateTime();
updateLastRefresh();

// Intervals
setInterval(updateTime, 1000);
setInterval(updateCountdown, 1000);
setInterval(pulseBanner, 5000);