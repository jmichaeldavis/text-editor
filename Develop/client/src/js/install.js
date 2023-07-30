const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.beforeInstallPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const eventHandler = window.beforeInstallPrompt;

    if (!eventHandler) {
        return;
    }

    eventHandler.prompt();

    window.beforeInstallPrompt = null;

    butInstall.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {
    window.beforeInstallPrompt = null;
});
