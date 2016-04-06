var clic_case = new event();


function evenOnClick(id){  // Lors d'un clic sur une case 
    
    /****** Ne pas oublier de mettre le nom de la div ******/
    /****** Ne pas oublier de remplacer case_ par la case cliqué ******/
  
    //var case_selectionné;
    var str = id.id;
    var caseTab = str.split("_");
  
    if(!grille[caseTab[0]][caseTab[1]].getEst_detruit){ // Vérification si la case est détruite ou non
      
      if(grille[caseTab[0]][caseTab[1]].getEst_destructible){  // Vérification si la case est cliquable ou non


          grille[caseTab[0]][caseTab[1]].setEst_detruit(true);


          grille[caseTab[0]][caseTab[1]].cases_adjacentes_revelees(true);   // Rendre les cases adjacentes destructibles

          if(Math.random() <= plateau_de_jeu.getTaux_monstre){   // Calcul si il y a un monstre ou non

              case_.setMonstre(monstreList[Math.random() * (monstreList.size - 0) + 0]);

          }

          if(Math.random() <= plateau_de_jeu.getTaux_cle){    // Calcul si il y a une clé ou non



          }

      }else{

          alert("Coup interdit - La case ne peut pas être détruite");

      }    
  
    
      
    }
  affichePlateau(grille);
}

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
              monstreList.push(new monstre(monster_data[j].id,monster_data[j].life,monster_data[j].damage,"blocked img"));//crée une liste des monstre disponible
            }
          //console.log(monstreList);
          //affiche plateau
   
      },
    
      error : function(resultat, statut, erreur){
          console.log("echec");
       },
  })

  

});