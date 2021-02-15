import { Constructable } from "./Constructable";
import "reflect-metadata"

export class Injector {
    private dependenciesMap = new Map();
  
    getInstance<T>(contr: Constructable<T>) : T  {
       const instance = this.constructObject(contr);
       return instance;
     }
  
    private constructObject(constructor: Constructable) {
  
      let currentInstance = this.dependenciesMap.get(constructor)
      if (currentInstance) return currentInstance;
  
      const metaData: Constructable[] = Reflect.getMetadata('design:paramtypes', constructor);
      const argumentsInstances = metaData.map((params) => this.constructObject(params));
      currentInstance = new constructor(... argumentsInstances);
      this.dependenciesMap.set(constructor, currentInstance);
      return currentInstance;
    }
  }