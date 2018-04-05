let authBtn =  {
    init() {
        let auth = document.getElementById('auth');
        // let close = document.getElementByClassName('hamburger-menu--close');
        let flipper = document.getElementsByClassName('flipper')[0];
        let toMain = document.getElementById('to-main');
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        } 
        let nav = getParameterByName('auth');
        
        if (nav) {
            flipper.classList.add('flipper--flip');
            auth.classList.add('visually-hidden');
        }  

        auth.addEventListener('click', e => {
            e.preventDefault();
            flipper.classList.add('flipper--flip');
            auth.classList.add('visually-hidden');
            }); // auth END
  
        toMain.addEventListener('click', e => {
        e.preventDefault();
        flipper.classList.remove('flipper--flip');
        auth.classList.remove('visually-hidden');
        }); // toMain END

     
    }, // end
}
    
module.exports = authBtn;
