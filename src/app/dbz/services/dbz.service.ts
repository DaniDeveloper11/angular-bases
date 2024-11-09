import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'


@Injectable({providedIn: 'root'})
export class DBZService {


  public Characters: Character[] = [{
    id:uuid(),
    name: "Krillin",
    power: 1000,
  },
{
  id:uuid(),
  name: "Goku",
  power: 9500
},
{
  id:uuid(),
  name:"Vegeta",
  power: 7500
}];

onNewCharacter(character:Character):void{

  const newCharacter:Character = {id:uuid(),...character};

  this.Characters.push(newCharacter);
};

// onDeleteCharacter(index:number):void{
//   this.Characters.splice(index,1)
// }
deleteCharacterById(id:string):void{
  this.Characters = this.Characters.filter(character => character.id !== id);
}

}
