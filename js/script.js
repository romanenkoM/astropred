

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

    function get_id(element){
        $(element).attr('id')
    };


    //Настройка символов года
    $(".animals__content__symbols__block__icon img").on('click', function(){
        if( $(this).attr('id') == 'rat' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.rat').removeClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'bull' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.bull').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'tiger' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.tiger').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'rabbit' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.rabbit').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'dragon' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.dragon').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'snake' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.snake').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'horse' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.horse').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'sheep' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.sheep').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'monkey' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.monkey').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'hen' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.hen').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'dog' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.dog').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
                $('.animals__content__symbols__block.pig').addClass('hide')
            }
        }else if($(this).attr('id') == 'pig' ){
            if (($('.animals__content__symbols__block').hasClass('hide'))){
                $('.animals__content__symbols__block.pig').removeClass('hide')
                $('.animals__content__symbols__block.rat').addClass('hide')
                $('.animals__content__symbols__block.tiger').addClass('hide')
                $('.animals__content__symbols__block.rabbit').addClass('hide')
                $('.animals__content__symbols__block.dragon').addClass('hide')
                $('.animals__content__symbols__block.snake').addClass('hide')
                $('.animals__content__symbols__block.horse').addClass('hide')
                $('.animals__content__symbols__block.sheep').addClass('hide')
                $('.animals__content__symbols__block.monkey').addClass('hide')
                $('.animals__content__symbols__block.hen').addClass('hide')
                $('.animals__content__symbols__block.dog').addClass('hide')
                $('.animals__content__symbols__block.bull').addClass('hide')
            }
        }
    });








})