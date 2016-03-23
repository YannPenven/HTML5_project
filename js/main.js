$("document").ready(function(){
  
  var heroList = [];
  var monstreList = [];
  
  $.ajax({
  		type: "GET",
  		url: "https://api.myjson.com/bins/2qw6u",
  		dataType : 'json',
      contentType: "application/json; charset=utf-8",
    
  		success : function(json_file, statut){ // code_html contient le HTML renvoyé
          console.log(json_file);
           //var parsed_data = JSON.parse(json_file);
           var hero_data = json_file.hero;
           var monster_data = json_file.monstre;
           for(var i in hero_data){
             console.log(hero_data[i].life);
             console.log(hero_data[i].damage);
              heroList.push(new hero(hero_data[i].life,hero_data[i].damage));
            }
           for(var j in monster_data){
              monstreList.push(new hero(monster_data[i].life,monster_data[i].damage));
            }
          console.log(heroList);
          //affiche plateau
          
      },
    
      error : function(resultat, statut, erreur){
          console.log("echec");
       },
  })
  
  //console.log(heroList);

});