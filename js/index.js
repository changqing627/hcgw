$(function (){
    //right 悬浮
    var $scrW=$(window).width();
    // alert($scrW)
    if($scrW>1080){
        var $scrR=($scrW-1080)/2;
        $(".xfbox").css('right',$scrR+'px')  
    }
   

   $(".infobox").find('li').each(function (){

    $(this).find('a').click(function (){
        alert(1)
    })

    //    $(this).find('a').mouseover(function (){
    //        alert(1)
    //        $(this).prev('p').css({'opacity':1});
    //    }).mouseout(function (){
    //        $(this).prev('p').css({'opacity':0})
    //    })

   })

































})