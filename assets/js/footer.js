function generateLog() {
  const logs = [
    "[LOG] Connection stabilized...",
    "[SYS] Memory usage: " + Math.floor(Math.random() * 100) + "%",
    "[SEC] Firewall engaged.",
    "[NET] Ping: " + Math.floor(Math.random() * 100) + "ms",
    "[ERROR] System anomaly detected!",
  ];
  document.querySelector("#sys-logs").innerText =
    logs[Math.floor(Math.random() * logs.length)];
}
setInterval(generateLog, 3000);
