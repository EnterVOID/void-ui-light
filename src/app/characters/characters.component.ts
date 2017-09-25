import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'void-characters',
  providers: [ CharacterService ],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters = null;
  characterResults = null;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters().subscribe(data => {
      this.characters = data['data'];
      this.characterResults = {
        total: data['total'],
        perPage: data['per_page'],
        currentPage: data['current_page'],
        lastPage: data['last_page'],
        nextPageUrl: data['next_page_url'],
        prevPageUrl: data['prev_page_url'],
        from: data['from'],
        to: data['to']
      }
    });
  }

}
