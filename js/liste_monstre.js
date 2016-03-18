var bibliotheque_monstre = [new monstre("Rhela",2,1),
             new monstre("Commercial",4,3),
             new monstre("Canard Laqué",3,3)];

function monstre(Nom,Vie,Attaque){
  
  this.Nom=Nom;
  this.pointVie=Vie;
  this.pointAttaque=Attaque;
  this.pourcentageDrop=Drop;
  this.image;
  
}

function liste(){
  
  this.liste_monstre = creationListeAleatoire;
  this.taille_liste = function (){
                        return this.liste_monstre.length;
                      }
  
}

function creationListeAleatoire(){
  
  var nombre_monstre = 3;
  var liste_monstre_choisi = [];
  
  for(var i=0;i<nombre_monstre;i++){
    
     var valeur = Math.round(Math.random()*(bibliotheque_monstre.length-1));
     liste_monstre_choisi.push(bibliotheque_monstre[valeur]);
    
  }
 
  
 
  return liste_monstre_choisi;
}







