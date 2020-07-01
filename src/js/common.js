(function vcCommon() {
    // ScrollToTop Button 
    window.addEventListener('scroll', scrollBtnFunction);
    function scrollBtnFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.querySelector('.btn-scroll-top').style.display = 'block';
        } else {
            document.querySelector('.btn-scroll-top').style.display = 'none';
        }
    }

    // ScrollToTop Behaviour
    document.querySelector('.btn-scroll-top').addEventListener('click', scrollToTop);
    function scrollToTop() {
        let scrollDuration = 300;
        let scrollStep = -window.scrollY / (scrollDuration / 15);
        let scrollInterval = setInterval(function() {
            if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval);
        },15);
    }

    // Wishlist Animation 
    let btnWish = document.querySelectorAll('.wishIconAnimate button');          
    btnWish.forEach(function(item) {
        item.addEventListener('click', function(e){
            e.preventDefault();
            this.classList.toggle('pulse-animation')
        } , {
            once: true,
        })
    })

    // Accordion Icons Plus/Minus 
    $(function(){
        $(".collapse.show").each(function(){
            $(this).prev(".vc-card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });     
        $(".collapse").on('show.bs.collapse', function(){
            $(this).prev(".vc-card-header").find(".fas").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
            $(this).prev(".vc-card-header").find(".fas").removeClass("fa-minus").addClass("fa-plus");
        });
    })

}());