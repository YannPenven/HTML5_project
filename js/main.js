$("document").ready(function(){
  $.ajax({
  		type: "GET",
  		url: "https://api.myjson.com/bins/2gmcn",
  		dataType : 'json',
      contentType: "application/json; charset=utf-8",
    
  		success : function(json_file, statut){ // code_html contient le HTML renvoyé
          console.log(json_file); 
      },
    
      error : function(resultat, statut, erreur){
          console.log("echec");
       },
  })

});
