var clic_case = new event();


$(".case").click(function(){  // Lors d'un clic sur une case 
    
    /****** Ne pas oublier de mettre le nom de la div ******/
    /****** Ne pas oublier de remplacer case_ par la case cliqué ******/
  
    var case_selectionné;
  
    if(!case_.getEst_detruit){ // Vérification si la case est détruite ou non
      
      if(case_.getEst_destructible){  // Vérification si la case est cliquable ou non


          case_.setEst_detruit(true);


          case_.setEst_destructible(true);   // Rendre les cases adjacentes destructibles

          if(Math.random() <= plateau_de_jeu.getTaux_monstre){   // Calcul si il y a un monstre ou non

              case_.setMonstre(new monstre("a",100,100));

          }

          if(Math.random() <= plateau_de_jeu.getTaux_cle){    // Calcul si il y a une clé ou non



          }

      }else{

          alert("Coup interdit - La case ne peut pas être détruite");

      }    
  
    
      
    }
  
});