
function copyIP() {
    const ip = "95.217.38.112:45512";

    navigator.clipboard.writeText(ip)
        .then(() => {
            document.getElementById("copy-message")
                .textContent = "✓ IP успешно скопирован!";
        })
        .catch(() => {
            document.getElementById("copy-message")
                .textContent = "Не удалось скопировать IP.";
        });
}
