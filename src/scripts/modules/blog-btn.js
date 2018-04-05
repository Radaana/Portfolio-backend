let blogBtn = {
    init() {
        let button = document.getElementById('blog-btn');
        let aside = document.getElementsByClassName('contents__left')[0];
        let right = document.getElementsByClassName('contents__right')[0];

        button.addEventListener('click', e => {
            e.preventDefault();
            aside.classList.add('contents__left--shown');
        }); 
        right.addEventListener('click', e => {
            e.preventDefault();
            if (aside.classList.contains('contents__left--shown')) {
                aside.classList.remove('contents__left--shown');
            }
        });
    }
}

module.exports = blogBtn;