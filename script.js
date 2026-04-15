document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DEL MODAL DE VIDEO ---
    const modal = document.getElementById("video-modal");
    const modalIframe = document.getElementById("modal-iframe");
    const closeModal = document.querySelector(".close-modal");

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.open-video');
        if (card) {
            e.preventDefault();
            const videoURL = card.getAttribute('data-video');
            modalIframe.src = videoURL;
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });

    if (closeModal) {
        closeModal.onclick = () => {
            modal.style.display = "none";
            modalIframe.src = "";
            document.body.style.overflow = "auto";
        };
    }

    // --- LÓGICA DE CAMBIO DE IDIOMA ---
    const langBtn = document.getElementById('language-toggle');
    
    // Al cargar, ver si ya había una preferencia
    if (localStorage.getItem('language') === 'es') {
        document.body.classList.add('es-active');
    }

    langBtn.addEventListener('click', () => {
        document.body.classList.toggle('es-active');
        const currentLang = document.body.classList.contains('es-active') ? 'es' : 'en';
        localStorage.setItem('language', currentLang);
    });
});