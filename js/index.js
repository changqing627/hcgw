$(function (){
    //right 悬浮
   $(".infobox").find('li').each(function (){
       $(this).find('a').mouseover(function (){
           $(this).prev('p').css({'opacity':1});
       }).mouseout(function (){
           $(this).prev('p').css({'opacity':0})
       })
   })

































})