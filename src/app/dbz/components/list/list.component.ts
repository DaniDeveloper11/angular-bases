import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public CharacterList: Character[] = [{
    name: "Trunks",
    power: 10
  }];

  //onDelete = Index value:number
@Output()
  public onDelete: EventEmitter<string> = new EventEmitter

  onDeleteCharacter(id?:string):void {
    //TODO Emitir el Id del Personaje
    // console.log("Index a eliminar",index)
    if(!id) return;
    this.onDelete.emit(id)
  }
}
