const prekvapeni = document.querySelector('#prekvapeni');
    const spoustec = document.querySelector('#spoustec');
    const zavrit = document.querySelector('#zavrit');

    // otevre se po kliknuti na tlacitko
    spoustec.addEventListener('click', () => {
        prekvapeni.classList.add('zobrazit');
    });

    // zavre se po kliknuti na tlacitko
    zavrit.addEventListener('click', () => {
        prekvapeni.classList.remove('zobrazit');
    });

    prekvapeni.addEventListener('click', (e) => {
        if (e.target === prekvapeni) {
            prekvapeni.classList.remove('zobrazit');
        }
    });