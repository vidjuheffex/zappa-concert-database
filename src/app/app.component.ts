import { Component } from '@angular/core';
import shows from './showdata';

export class Show {
    slot: string;
    date: string;
    setlist: string[];
    venue: string;
    lineup: string[];    
}

const SHOWS: Show[] = shows;


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: string = 'Zappa Show DB';
    shows = SHOWS;
    selectedShow;
    filter = null;

    onSelect(show: Show): void {
        this.selectedShow = show;
    }

    onSelectMusician(musician: string): void{
        this.filter = musician;
        this.shows = SHOWS.filter(e => e.lineup.includes(musician))
    }

    onSelectSong(song: string): void{
        this.filter = song;
        this.shows = SHOWS.filter(e => e.setlist.includes(song))
    }

    resetFilter(): void{
        this.filter = null;
        this.shows = SHOWS;
    }
}


