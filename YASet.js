function YASet() {
   let coll = new Collection();
   this.has	= function(element) {
		for(let item of coll.get()) {
		   if(item === element) {
			  return true;
		   }
		}
	  	return false;
   };
   this.values = function() {
	  	let length = 0;
	    let items = '[';
	  	for(let item of coll.get()) {
		   if(item) {
			  items += item; 
			  if(length < this.size()-1) {
				 items += ',';
				 length++;
			  }
		   }
		}
	  	items += ']';
	  	return items;
   };
   this.add	= function(element) {
   		if(!this.has(element)) coll.push(element);
   };
   this.remove = function(element) {
	  	let newCollection = new Collection();
	  	for(let item of coll.get()) {
		   if(item) {
			  if(item !== element) newCollection.push(item);
		   }
		}
	  	coll = newCollection;
   };
   this.size = function() {
	  return coll.length();
   };
}
