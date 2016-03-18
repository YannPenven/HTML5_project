$("document").ready(function(){
  $.ajax({
  		type: "GET",
  		url: "http://api.icndb.com/jokes/random/5",
  		dataType : 'html',
  		success : function(json_file, statut){ // code_html contient le HTML renvoyé
          $("body").html(json_file); 
      }
  })

});