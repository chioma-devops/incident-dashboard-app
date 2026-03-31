function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("live-time");
  if (timeElement) {
    timeElement.textContent = now.toLocaleString();
  }
}

updateTime();
setInterval(updateTime, 1000);

// Auto-refresh every 30 seconds so new deployments appear without manual reload
setInterval(() => {
  window.location.reload();
}, 30000);