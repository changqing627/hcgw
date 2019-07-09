jQuery(document).ready(function() {
    loadBundles('ch');

    // configure language combo box
    jQuery('#lang').change(function() {
        var selection = jQuery('#lang option:selected').val();
        loadBundles(selection != 'browser' ? selection : null);

    });

});

function loadBundles(lang) {
    jQuery.i18n.properties({
        name:'Messages',
        path:'../bundle/',
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

}