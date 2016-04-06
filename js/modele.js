function hero(_life, _damage) {

	this.life = _life;
	this.damage = _damage;
	this.lifechange = new event(this);
	this.lifechange.attach(test_hero);


	this.setlife = function(_life) {
		this.life = _life;
		this.lifechange.notify(_life);
	}

	this.getLife = function() {
		return this.life;
	}

	this.getDamage = function() {
		return this.damage;
	}

}

function event(_sender) {

	this.sender = _sender; //qui va trigger l'action
	this.listeners = []; //liste de fonction à call


	this.attach = function(listener) {
		this.listerners.push(listener); //ajout d'un listener 
	}

	this.notify = function(args) {
		for (var index = 0; index < this.listeners.length; index += 1) {
			this.listeners[index](this.sender, args) //call les fonction
		}
	}
}

function monstre(Nom, Vie, Attaque,img) { //  Class monstre contient sont nom/id, les points de vie, l'attaque et l'image qui le représente

	this.Nom = Nom;
	this.pointVie = Vie;
	this.pointAttaque = Attaque;
	this.image = img;


	this.getNom = function() {
		return this.Nom;
	}

	this.getpointVie = function() {
		return this.pointVie;
	}

	this.getpointAttaque = function() {
		return this.pointAttaque;
	}
	
	this.getImage = function(){
		return this.image;
	}

	this.setpointVie = function(pointVie) {
		this.pointVie = pointVie;
	}

}

function liste() { //  Class liste

	this.bibliotheque_monstre = [new monstre("Rhela", 2, 1),
		new monstre("Commercial", 4, 3),
		new monstre("Canard Laqué", 3, 3)
	];
	this.liste_monstre = function() {

		var nombre_monstre = 3;
		var liste_monstre_choisi = [];

		for (var i = 0; i < nombre_monstre; i++) {

			var valeur = Math.round(Math.random() * (this.bibliotheque_monstre.length - 1));
			liste_monstre_choisi.push(this.bibliotheque_monstre[valeur]);

		}
		return liste_monstre_choisi;
	}

	this.taille_liste = function() {
		return this.liste_monstre.length;
	}
	
}

function plateau_de_jeu() {

	this.colonne = 5;
	this.ligne = 6;
	this.plateau = function() {
		var _tmp = [];

		for (var c = 0; c < this.ligne; c++) {
			_tmp[c] = [];


			for (var f = 0; f < this.colonne; f++) {
				if (c === 0 && f === 0) {
					_tmp[c].push(new case_(true, true));
					_tmp[c][f].setEst_detruit(true);
				} else {
					_tmp[c].push(new case_(true, false));


				}
			}
		}

		return _tmp;
	}

	this.nombre_case_restante = this.colonne*this.ligne;
	
	this.nombre_monstre = 3;
	
	this.taux_cle = 1/this.nombre_monstre;
	
	this.taux_monstre = this.nombre_monstre/this.nombre_case_restante;
	
	this.case_en_moins = function(){
		
		this.nombre_case_restante = this.nombre_case_restante-1;
		this.taux_monstre = this.nombre_monstre/this.nombre_case_restante;
		
	}
	
	this.monstre_en_moins = function(){
		
		this.nombre_monstre = this.nombre_monstre-1;
		this.taux_monstre = this.nombre_monstre/this.nombre_case_restante;
		this.taux_cle = 1/this.nombre_monstre;
		
	}

	
	this.cases_adjacentes_revelees = function(x,y){
		
		if(x+1<6)
			this.plateau[x+1][y].setEst_destructible(1);
		if(x+1<6 && y+1<5)
			this.plateau[x+1][y+1].setEst_destructible(1);
		if(x+1<6 && y-1>=0)
			this.plateau[x+1][y-1].setEst_destructible(1);
		if(y+1<5)
			this.plateau[x][y+1].setEst_destructible(1);
		if(y-1>=0)
			this.plateau[x][y-1].setEst_destructible(1);
		if(x-1>=0)
			this.plateau[x-1][y].setEst_destructible(1);
		if(x-1>=0 && y-1>=0)
			this.plateau[x-1][y-1].setEst_destructible(1);
		if(x-1>=0 && y+1<5)
			this.plateau[x-1][y+1].setEst_destructible(1);
		
	}
	
	this.case_adjacentes_destructibles = function(x,y){
		
		if(x+1<6)
			this.plateau[x+1][y].setEst_revele(true);
		if(x+1<6 && y+1<5)
			this.plateau[x+1][y+1].setEst_revele(true);
		if(x+1<6 && y-1>=0)
			this.plateau[x+1][y-1].setEst_revele(true);
		if(y+1<5)
			this.plateau[x][y+1].setEst_revele(true);
		if(y-1>=0)
			this.plateau[x][y-1].setEst_revele(true);
		if(x-1>=0)
			this.plateau[x-1][y].setEst_revele(true);
		if(x-1>=0 && y-1>=0)
			this.plateau[x-1][y-1].setEst_revele(true);
		if(x-1>=0 && y+1<5)
			this.plateau[x-1][y+1].setEst_revele(true);
		
	}
	
	this.getPlateau = function(){
		return this.plateau;
	}
	
	this.getColonne = function(){
		return this.colonne;
	}
	
	this.getLigne = function(){
		return this.ligne;
	}
	
	this.getTaux_cle = function(){
		return this.taux_cle;
	}
	
	this.getTaux_monstre = function(){
		return this.taux_monstre;
	}



}

function case_(destructible, revele) {

	this.est_revele = revele;
	this.est_destructible = destructible;
	this.est_detruit = false;

	this.monstre = false;


	this.getEst_revele = function() {
		return this.est_revele;
	}

	this.getEst_destructible = function() {
		return this.est_destructible;
	}

	this.getEst_detruit = function() {
		return this.est_detruit;
	}
	
	this.getMonstre = function(){
		return this.monstre;
	}

	this.setEst_revele = function(_revele) {
		this.est_revele = _revele;
	}

	this.setEst_destructible = function(_destructible) {
		this.est_destructible = _destructible;
	}

	this.setEst_detruit = function(_detruit) {
		this.est_detruit = _detruit;
	}
	
	this.setMonstre = function(_monstre){
		this.monstre = _monstre;
	}
	
	
}