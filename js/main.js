$("document").ready(function(){

  
  var heroList = [];
  var monstreList = [];
  
 
  $.ajax({
  		type: "GET",
  		url: "https://api.myjson.com/bins/2av9o",

  		dataType : 'json',
      contentType: "application/json; charset=utf-8",
    
  		success : function(json_file, statut){ // code_html contient le HTML renvoyé

          console.log(json_file);
           //var parsed_data = JSON.parse(json_file);
           var hero_data = json_file.hero;
           var monster_data = json_file.monstre;
           for(var i in hero_data){
              heroList.push(new hero(hero_data[i].life,hero_data[i].damage));//crée une liste des héro disponible
            }
           for(var j in monster_data){
              monstreList.push(new monstre(monster_data[j].id,monster_data[j].life,monster_data[j].damage));//crée une liste des monstre disponible
            }
          //console.log(monstreList);
          //affiche plateau
   
      },
    
      error : function(resultat, statut, erreur){
          console.log("echec");
       },
  })

  
  //console.log(heroList);
  

});


$("#health").setAttribute("class",heroList[0].getpointVie);

$("#damage").setAttribute("class",heroList[0].getpointAttaque);

