// Dark / Light Mode
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Demo Notifications
const notifyBtn = document.getElementById('notify-btn');
notifyBtn.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        new Notification("Demo Notification", { body: "This is a futuristic demo!" });
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') new Notification("Demo Notification", { body: "Welcome to the demo!" });
        });
    }
});

// Voice Recognition Demo
const startVoice = document.getElementById('start-voice');
const voiceOutput = document.getElementById('voice-output');
startVoice.addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = e => {
        voiceOutput.textContent = `You said: "${e.results[0][0].transcript}"`;
    };
});

// Contact Form Placeholder
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("Form submitted! (placeholder)");
});
