


function eventOnClick(id){  // Lors d'un clic sur une case 
    
    /****** Ne pas oublier de mettre le nom de la div ******/
    /****** Ne pas oublier de remplacer case_ par la case cliqué ******/
  
    //var case_selectionné;
    var str = id.id;
    var caseTab = str.split("_");
    var grille = plateau.getPlateau();
  
    if(grille[caseTab[0]][caseTab[1]].getEst_revele() === true){ // Vérification si la case est visible ou non
      
      if(grille[caseTab[0]][caseTab[1]].getEst_destructible() === true && grille[caseTab[0]][caseTab[1]].getEst_detruit() === false){  // Vérification si la case est destructible ou non


          grille[caseTab[0]][caseTab[1]].setEst_detruit(true);
          plateau.case_en_moins();

          plateau.cases_adjacentes_revelees(caseTab[0],caseTab[1]);   // Rendre les cases adjacentes destructibles

          if(Math.random() <= parseFloat(plateau.getTaux_monstre())){   // Calcul si il y a un monstre ou non
              console.log(Math.random() * (monstreList.length - 0) + 0);
              grille[caseTab[0]][caseTab[1]].setMonstre(monstreList[Math.floor(Math.random() * (monstreList.length - (monstreList.length - plateau.getNombreMonstre())) + (monstreList.length - plateau.getNombreMonstre()))]);
              plateau.monstre_en_moins();
              plateau.case_adjacentes_destructibles(caseTab[0],caseTab[1],false);
          }

          

      }else{
          if(grille[caseTab[0]][caseTab[1]].getMonstre() !== false){
            heroList[0].setLife(parseInt(heroList[0].getLife()) - parseInt(grille[caseTab[0]][caseTab[1]].getMonstre().getDamage()));
            grille[caseTab[0]][caseTab[1]].getMonstre().setLife(parseInt(grille[caseTab[0]][caseTab[1]].getMonstre().getLife())-parseInt(heroList[0].getDamage()));
            if(parseInt(heroList[0].getLife) <= 0){
              alert("Vous avez perdu, domage :D")
              location.reload();
            }
            if(parseInt(grille[caseTab[0]][caseTab[1]].getMonstre().getLife()) <= 0){
              grille[caseTab[0]][caseTab[1]].setMonstre(false);
              plateau.case_adjacentes_destructibles(caseTab[0],caseTab[1],true);
              
              if(Math.random() <= parseFloat(plateau.getTaux_cle())){    // Calcul si il y a une clé ou non
                 console.log(parseFloat(plateau.getTaux_cle()));
                 alert("victoire :)");
                 location.reload();
              }
            }
          }
          //alert("Coup interdit - La case ne peut pas être détruite");

      }    
  
    
      
    }
  setStatHero(heroList[0].getDamage(),heroList[0].getLife());
  affichePlateau(grille);
  //setEtatCase(1, 1, "blocked");
}



$("document").ready(function(){

  
  heroList = [];
  monstreList = [];
  plateau = new plateau_de_jeu();
  plateau.plateau(); 
 
  $.ajax({
  		type: "GET",
  		url: "https://jsonblob.com/api/jsonBlob/57065df3e4b01190df5c6af4",

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
              monstreList.push(new monstre(monster_data[j].id,monster_data[j].life,monster_data[j].damage,"monster img"));//crée une liste des monstre disponible
            }
        //var grille = plateau.plateau();
        plateau.getPlateau()[0][1].setEst_revele(true);
        //grille[0][1].setEst_destructible(true);
        plateau.getPlateau()[1][0].setEst_revele(true);
        //grille[1][0].setEst_destructible(true);
        affichePlateau(plateau.getPlateau());
        setStatHero(heroList[0].getDamage(),heroList[0].getLife());
          //console.log(monstreList);
          //affiche plateau
   
      },
    
      error : function(resultat, statut, erreur){
          console.log("echec");
          alert("Error in loading hero and monster, check your internet conection and refresh. If it's still not working then maybe the api we use to store json doesn't work anymore")
       },
  });

  

});