

jQuery(document).ready(function() {
    // loadBundles('ch');
    loadBundles(document.cookie.split("=")[1]);
    jQuery('#lang').change(function() {
        var selection = jQuery('#lang option:selected').val();
        loadBundles(selection != 'browser' ? selection : null); 
        document.cookie="lang="+selection;
        
    });
    
});




function loadBundles(lang) {
    jQuery.i18n.properties({
        name:'Messages',
        path:'/bundle/',
        mode:'both',
        language:lang,
        callback: function() {
            updateExamples();
        }
    });
}

function updateExamples() {
   
// 首页
    jQuery('#index01').empty().append(jQuery.i18n.prop('index01'));
    jQuery('#index02').empty().append(jQuery.i18n.prop('index02'));
    jQuery('#index021').empty().append(jQuery.i18n.prop('index021'));
    jQuery('#index03').empty().append(jQuery.i18n.prop('index03'));
    jQuery('#index04').empty().append(jQuery.i18n.prop('index04'));
    jQuery('#index05').empty().append(jQuery.i18n.prop('index05'));
    jQuery('#index06').empty().append(jQuery.i18n.prop('index06'));
    jQuery('#index07').empty().append(jQuery.i18n.prop('index07'));
    jQuery('#index08').empty().append(jQuery.i18n.prop('index08'));
    jQuery('#index09').empty().append(jQuery.i18n.prop('index09'));
    jQuery('#index10').empty().append(jQuery.i18n.prop('index10'));
    jQuery('#index11').empty().append(jQuery.i18n.prop('index11'));
    // 工业互联网+定制解决方案
    jQuery('#indus01').empty().append(jQuery.i18n.prop('indus01'));
    jQuery('#indus02').empty().append(jQuery.i18n.prop('indus02'));
    jQuery('#indus03').empty().append(jQuery.i18n.prop('indus03'));
    jQuery('#indus04').empty().append(jQuery.i18n.prop('indus04'));
    jQuery('#indus041').empty().append(jQuery.i18n.prop('indus041'));
    jQuery('#indus05').empty().append(jQuery.i18n.prop('indus05'));
    jQuery('#indus06').empty().append(jQuery.i18n.prop('indus06'));
    jQuery('#indus07').empty().append(jQuery.i18n.prop('indus07'));
    jQuery('#indus08').empty().append(jQuery.i18n.prop('indus08'));
    jQuery('#indus09').empty().append(jQuery.i18n.prop('indus09'));
    jQuery('#indus10').empty().append(jQuery.i18n.prop('indus10'));
    jQuery('#indus11').empty().append(jQuery.i18n.prop('indus11'));
    jQuery('#indus12').empty().append(jQuery.i18n.prop('indus12'));
    jQuery('#indus13').empty().append(jQuery.i18n.prop('indus13'));
    jQuery('#indus14').empty().append(jQuery.i18n.prop('indus14'));
    jQuery('#indus15').empty().append(jQuery.i18n.prop('indus15'));
    jQuery('#indus16').empty().append(jQuery.i18n.prop('indus16'));
    jQuery('#indus17').empty().append(jQuery.i18n.prop('indus17'));
    jQuery('#indus18').empty().append(jQuery.i18n.prop('indus18'));
    jQuery('#indus19').empty().append(jQuery.i18n.prop('indus19'));
    jQuery('#indus20').empty().append(jQuery.i18n.prop('indus20'));
    jQuery('#indus21').empty().append(jQuery.i18n.prop('indus21'));
    jQuery('#indus22').empty().append(jQuery.i18n.prop('indus22'));
    jQuery('#indus221').empty().append(jQuery.i18n.prop('indus221'));
    jQuery('#indus23').empty().append(jQuery.i18n.prop('indus23'));
    jQuery('#indus24').empty().append(jQuery.i18n.prop('indus24'));
    jQuery('#indus241').empty().append(jQuery.i18n.prop('indus241'));
    jQuery('#indus25').empty().append(jQuery.i18n.prop('indus25'));
    jQuery('#indus26').empty().append(jQuery.i18n.prop('indus26'));
    jQuery('#indus27').empty().append(jQuery.i18n.prop('indus27'));
    jQuery('#indus28').empty().append(jQuery.i18n.prop('indus28'));
    jQuery('#indus29').empty().append(jQuery.i18n.prop('indus29'));
    jQuery('#indus30').empty().append(jQuery.i18n.prop('indus30'));
    jQuery('#indus31').empty().append(jQuery.i18n.prop('indus31'));
    jQuery('#indus32').empty().append(jQuery.i18n.prop('indus32'));
    jQuery('#indus33').empty().append(jQuery.i18n.prop('indus33'));
    jQuery('#indus34').empty().append(jQuery.i18n.prop('indus34'));
    jQuery('#indus35').empty().append(jQuery.i18n.prop('indus35'));
    jQuery('#indus36').empty().append(jQuery.i18n.prop('indus36'));
    jQuery('#indus37').empty().append(jQuery.i18n.prop('indus37'));
    jQuery('#indus38').empty().append(jQuery.i18n.prop('indus38'));
    jQuery('#indus39').empty().append(jQuery.i18n.prop('indus39'));
    jQuery('#indus40').empty().append(jQuery.i18n.prop('indus40'));
    jQuery('#indus41').empty().append(jQuery.i18n.prop('indus41'));
    jQuery('#indus42').empty().append(jQuery.i18n.prop('indus42'));
    jQuery('#indus43').empty().append(jQuery.i18n.prop('indus43'));
    jQuery('#indus44').empty().append(jQuery.i18n.prop('indus44'));
    jQuery('#indus45').empty().append(jQuery.i18n.prop('indus45'));
    jQuery('#indus46').empty().append(jQuery.i18n.prop('indus46'));
    jQuery('#indus47').empty().append(jQuery.i18n.prop('indus47'));
    jQuery('#indus48').empty().append(jQuery.i18n.prop('indus48'));
    jQuery('#indus49').empty().append(jQuery.i18n.prop('indus49'));
    jQuery('#indus50').empty().append(jQuery.i18n.prop('indus50'));
    jQuery('#indus51').empty().append(jQuery.i18n.prop('indus51'));
    jQuery('#indus52').empty().append(jQuery.i18n.prop('indus52'));
    jQuery('#indus53').empty().append(jQuery.i18n.prop('indus53'));
    jQuery('#indus54').empty().append(jQuery.i18n.prop('indus54'));
    jQuery('#indus55').empty().append(jQuery.i18n.prop('indus55'));
    jQuery('#indus56').empty().append(jQuery.i18n.prop('indus56'));
    jQuery('#indus57').empty().append(jQuery.i18n.prop('indus57'));
    // skf
    jQuery('#skf01').empty().append(jQuery.i18n.prop('skf01'));
    jQuery('#skf02').empty().append(jQuery.i18n.prop('skf02'));
    jQuery('#skf03').empty().append(jQuery.i18n.prop('skf03'));
    jQuery('#skf04').empty().append(jQuery.i18n.prop('skf04'));
    // 关于我们
    jQuery('#about01').empty().append(jQuery.i18n.prop('about01'));
    jQuery('#about02').empty().append(jQuery.i18n.prop('about02'));
    jQuery('#about03').empty().append(jQuery.i18n.prop('about03'));
    jQuery('#about04').empty().append(jQuery.i18n.prop('about04'));
    jQuery('#about05').empty().append(jQuery.i18n.prop('about05'));
    jQuery('#about06').empty().append(jQuery.i18n.prop('about06'));
    jQuery('#about07').empty().append(jQuery.i18n.prop('about07'));
    jQuery('#about08').empty().append(jQuery.i18n.prop('about08'));
    jQuery('#about09').empty().append(jQuery.i18n.prop('about09'));
    jQuery('#about10').empty().append(jQuery.i18n.prop('about10'));
    jQuery('#about11').empty().append(jQuery.i18n.prop('about11'));
    jQuery('#about12').empty().append(jQuery.i18n.prop('about12'));
    jQuery('#about13').empty().append(jQuery.i18n.prop('about13'));
    jQuery('#about14').empty().append(jQuery.i18n.prop('about14'));
    // footer
    jQuery('#foot01').empty().append(jQuery.i18n.prop('foot01'));
    jQuery('#foot02').empty().append(jQuery.i18n.prop('foot02'));
    jQuery('#foot03').empty().append(jQuery.i18n.prop('foot03'));
    jQuery('#foot04').empty().append(jQuery.i18n.prop('foot04'));
    jQuery('#foot05').empty().append(jQuery.i18n.prop('foot05'));
    jQuery('#foot06').empty().append(jQuery.i18n.prop('foot06'));
    jQuery('#foot07').empty().append(jQuery.i18n.prop('foot07'));
    jQuery('#foot08').empty().append(jQuery.i18n.prop('foot08'));
    jQuery('#foot09').empty().append(jQuery.i18n.prop('foot09'));


}

