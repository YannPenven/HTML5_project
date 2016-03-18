
function hero(_life,_damage){
	
		this.life = _life;
		this.damage = _damage;
		this.lifechange = new Event(this);
	
  
  this.setlife = function(_life){
		this.life = _life;
		this.lifechange.notify(_life);
	}
	
	this.getLife = function(){
		return this.life;
	}
	
	this.getDamage = function(){
		return this.damage;
	}
	
}

function event(_sender){
	
		this.sender = _sender;//qui va trigger l'action
		this.listeners = [];//liste de fonction à call
	
	
	this.attach = function(listener){
		this.listerners.push(listener);//ajout d'un listener 
	}
	
	this.notify = function(args){
		for(var index = 0; index < this.listeners.length; index+=1){
			this.listeners[index](this.sender,args) //call les fonction
		}
	}
}