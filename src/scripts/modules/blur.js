let blur =  {
    init() {
        let wrapper = document.querySelector('.contact-me');
        let form = document.querySelector('.contact-me__bg');
        let background = document.querySelector('.speaking__bg');
        let imgWidth = background.offsetWidth;
        let imgHeight = background.offsetHeight;
        let posLeft = -wrapper.offsetLeft;
        // let posTop = -wrapper.offsetTop;
        

        let imgTop = background.offsetTop;
        let posTop = -(wrapper.offsetTop - imgTop);

        let blurCSS = form.style;
        blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + -imgHeight + 'px';
        blurCSS.backgroundPosition = (posLeft+187) + 'px' + ' ' + (posTop+230) + 'px';
        // blurCSS.backgroundPosition = posLeft + 'px' + ' ' + '-100px';
        // blurCSS.backgroundPosition = (posLeft ) + 'px' + ' ' + 'bottom';
 
    }
    
}

module.exports = blur;