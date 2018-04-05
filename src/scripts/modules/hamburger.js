let ham = {
    init() {
        let hamburger = document.getElementById('hamburger-menu');
        // let close = document.getElementByClassName('hamburger-menu--close');
        let nav = document.getElementsByClassName('fullscreen')[0];
        let navItem = nav.getElementsByClassName('nav__link');
        let wrapper = document.getElementsByClassName('header__menu')[0];
        let body = document.getElementsByTagName('body')[0];
        let animation = false;

        wrapper.addEventListener('click', e => {
          e.preventDefault();
          // console.log('test');
          if (hamburger.classList.contains('hamburger-menu--close')) {
            // nav.classList.add('visually-hidden');
            nav.classList.remove('fullscreen--shown');
            hamburger.classList.remove('hamburger-menu--close');
            wrapper.classList.remove('header__menu--fixed');
            body.classList.remove('overflow-hidden');

          } else {
            // nav.classList.remove('visually-hidden');
            nav.classList.add('fullscreen--shown');
            hamburger.classList.add('hamburger-menu--close');
            wrapper.classList.add('header__menu--fixed');
            body.classList.add('overflow-hidden');
          }
        }); // hamburger END
      
        for (var i = navItem.length - 1; i >= 0; i--) {
          navItem[i].addEventListener('click', e => { 
            // e.preventDefault();
            // nav.classList.add('visually-hidden');
            nav.classList.remove('fullscreen--shown');
            hamburger.classList.remove('hamburger-menu--close');
            wrapper.classList.remove('header__menu--fixed');
            body.classList.remove('overflow-hidden');
          })
        } // navItem END
    }
}

module.exports = ham;

