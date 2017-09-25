import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'void-matches',
  providers: [ MatchService ],
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  matches = null;
  matchMeta = null;
  selectedMatch: Match;
  onSelect(match: Match): void {
    this.selectedMatch = match;
  }

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data['data'];
      this.matchMeta = {
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
