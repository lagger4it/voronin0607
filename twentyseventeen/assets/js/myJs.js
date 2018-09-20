
/*
window.onload = function() {
   var myBtn = document.getElementById('testBtnRed');

	myBtn.addEventListener("click", function() {
	  console.log("Кнопка нажата.");
	});
};*/


jQuery(document).ready(function(){
    jQuery('#testBtnRed').on('click', myAJAX);

var date = new Date();
var IPData = jQuery("input.ipData").val();
var PData = jQuery("input.pData").val();

  function myAJAX(){
    /*alert (IPData + ' => ' + date);*/
 	  jQuery.ajax({
  	    url : myAjax.ajaxurl,
  	    type: "POST",
  	    data :  { 
          action: 'MyAjaxIP',
          a : jQuery("input.ipData").val(),
          b : date
        },
  	    success : function(data){
  	        alert(data);
            jQuery('#testBtnRed').text('Мы получили Ваши данные!').css("background-color", "#42f450").attr("disabled", "disabled");

  	    },
        erroe: function(error){
          console.log(error);
        }
  	});
  }
});