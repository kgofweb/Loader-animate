function showContent() {
    document.querySelector('.loader-container').classList.add('loading-hidden');
}

setTimeout(showContent, 3000);

//On vas déclancher la function showContent()
//setTimeout prend 2 parm : 1: function executé, 2: la durée

// showContact vas cibler le loaderContainer

// On vas faire disparaitre le loader au bout de 3s et faire apparaitre le Jumbotrom