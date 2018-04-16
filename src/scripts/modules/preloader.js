let preloader = {
    init() {
        const loader = document.getElementById('loader');
        const windowLoad = new Promise( function (resolve) {
            window.addEventListener("load", function(event)  {
                resolve();
            });
        });
        windowLoad.then(function() {
            loader.classList.add('loader--hide');
        });
    }
}

module.exports = preloader;