window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("menubutton", showMenu, false);
document.addEventListener("pause", loading, false);

$( document ).delegate('#mainPage',"pageinit",function(){

})  ;

function onDeviceReady(){
    var options = new ContactFindOptions();
    options.filter="";
    options.multiple=true;
    var contactFields  = ["*"];
    navigator.contacts.find(contactFields,onContactsSuccess,onContactsError,options);
}

function exitApplicaton(){
navigator.exitApp();
}
function onContactsSuccess(contacts){
    console.log(contacts);

    $("#contactInfo li").remove();
    for (var i=0; i<contacts.length; i++) {
        var li = $("<li>" + contacts[i].displayName+'  '+contacts[i].phoneNumbers+"</li>");
        li.appendTo($('#contactInfo'));
        $('#contactInfo').listview("refresh");
    }
}
function onContactsError(){
    alert("Error");
}
function loading(){
    alert("pause!");
}

function showMenu(){
    $('#menuPopup').show();
}
