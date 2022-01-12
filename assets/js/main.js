$(() => {
   
    $(window).scroll(function(){
        if($(this).scrollTop() ) {
            $("#navbar").addClass("scroll-bg");
        } else {
            $("#navbar").removeClass("scroll-bg");
        }
    });







}) // End min statement