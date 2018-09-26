
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
var idPOST = jQuery("input.idPOST").val();
var namePOST = jQuery("input.nameUser").val();

  function myAJAX(){
    /*alert (IPData + ' => ' + date);*/
 	  jQuery.ajax({
  	    url : myAjax.ajaxurl,
  	    type: "POST",
  	    data :  { 
          action: 'MyAjaxIP',
          a : IPData,
          b : date,
          c : idPOST,
          d : namePOST
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