

$(document).ready(function(){

    $(".question__answers").on('click', function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active')
            $(this).children('.answer').slideUp()
        }else{
            $(this).addClass('active');  
            $(this).children('.answer').slideDown()
            $(this).siblings().removeClass('active')
            $(this).siblings().children('.answer').slideUp()

        };
    });
})