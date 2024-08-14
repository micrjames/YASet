import { Collection } from "./Collection/Collection";
import { dataObj } from "./Collection/utils/utils";

export class YASet extends Collection {
   constructor() {
	  super();
   }
   has(element: any): boolean {
	  for(let item of this) {
		 if(item === element)
			return true;
	  }
      return false;
   }
   add(element: any) {
	  if(!this.has(element)) super.push(element);
   }
   delete(element: any) {
	  const data = super.get();
	  const indexes = Object.keys(data);
	  for(const index of indexes) {
		 if(data[index] === element) {
			delete data[index];
		 }
	  }
   }
   clear() {
	  for(let i = 0; i < super.size; i++)
		 this.delete(super._data[i]);
   }
}
