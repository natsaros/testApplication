
$( document ).bind( 'mobileinit', function(){
    $.mobile.defaultPageTransition='slide';
    $.mobile.allowCrossDomainPages=true;
    $.mobile.phonegapNavigationEnabled=true;
    $.mobile.loadingMessage = "loading";
    $.mobile.loadingMessageTheme = false;
    $.mobile.loadingMessageTheme= "a";
    $.mobile.loader.defaultHtml="";
    $.mobile.dialogHashKey.closeBtnText="Close Pop";
    $.mobile.pageLoadErrorMessage="Error Loading Page";
    $.mobile.pageLoadErrorMessageTheme="e";
});
