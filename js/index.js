$(function (){
    //right 悬浮
    var $scrW=$(window).width();
    // alert($scrW)
    if($scrW>1080){
        var $scrR=($scrW-1080)/2;
        $(".xfbox").css('right',$scrR+'px');

        // languarge
        $(".selShow").click(function (){
            $(".selBox").slideToggle('slow')
        });
        var $langLi=$(".selBox li");
        $langLi.click(function (){
            var flag=$(this).children('.flagImg');
        })

    }

    

    // alert($(".content").height())
    var windW=$(window).height();
    var contW=$(".content").height()+110+300;
    
   if(contW<windW){
       $(".fdbox").css('marginTop',windW-contW+'px');
   }


































})