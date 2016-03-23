$(".case").click(function(){  // Lors d'un clic sur une case 
    
    /****** Ne pas oublier de mettre le nom de la div ******/
    /****** Ne pas oublier de remplacer case_ par la case cliqué ******/
  
    var case_selectionné;
    
    if(case_.getEst_destructible){  // Vérification si la case est cliquable ou non
        
        
        case_.setEst_detruit(1);
        
        
        case_.setEst_destructible(1);   // Rendre les cases adjacentes destructibles
        
        if(Math.random() <= plateau_de_jeu.getTaux_monstre){   // Calcul si il y a un monstre ou non
            
            case_.setMonstre(new monstre("a",100,100));
            
        }
        
        if(Math.random() <= plateau_de_jeu.getTaux_cle){
            
            
            
        }
        
    }else{
        
        alert("Coup interdit - La case ne peut pas être détruite");
        
    }       
  
});