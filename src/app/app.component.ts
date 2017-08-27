import { Component } from '@angular/core';

export class Show {
    time: string;
    date: Date;
    setlist: string[];
    location: object;
    lineup: string[];    
}

const SHOWS: Show[] = [{
    "time" : "early",
    "date" : new Date("1975-04-11T00:00:00.000Z"),
    "setlist" : [ 
        "intro", 
        "A Token Of My Extreme", 
        "Stinkfoot", 
        "Carolina Hard-Core Ecstasy", 
        "Velvet Sunrise", 
        "A Pound For A Brown", 
        "Sleeping In A Jar", 
        "Poofter's Froth Wyoming Plans Ahead", 
        "Echidna's Arf ", 
        "improvisations (q: Don't Be Shy", 
        "Under Milk Wood)", 
        "Don't You Ever Wash That Thing?", 
        "Advance Romance", 
        "Portuguese Lunar Landing", 
        "Debra Kadabra", 
        "Florentine Pogen", 
        "Orange Claw Hammer", 
        "George's Boogie", 
        "I'm Not Satisfied", 
        "Willie The Pimp"
    ],
    "location" : {
        "city" : "Claremont",
        "state_province" : "CA",
        "country" : "USA",
        "venue" : "Bridges Auditorium Pomona College"
    },
    "lineup" : [ 
        "Frank Zappa", 
        "Denny Walley", 
        "Captain Beefheart", 
        "Tom Fowler", 
        "Terry Bozzio", 
        "Napoleon Murphy Brock", 
        "George Duke", 
        "Bruce Fowler"
    ]
},


{
    "time" : "only",
    "date" : new Date("1979-02-12T00:00:00.000Z"),
    "setlist" : [ 
        "Persona Non Grata", 
        "Dead Girls Of London", 
        "I Ain't Got No Heart", 
        "Brown Shoes Don't Make It", 
        "Cosmik Debris", 
        "Tryin' To Grow A Chin", 
        "City Of Tiny Lights", 
        "Dancin' Fool", 
        "Easy Meat", 
        "Jumbo Go Away", 
        "Andy", 
        "Inca Roads", 
        "Florentine Pogen", 
        "Honey Don't You Want A Man Like Me?", 
        "Keep It Greasey", 
        "The Meek Shall Inherit Nothing", 
        "For The Young Sophisticate", 
        "Wet T-Shirt Nite", 
        "Why Does It Hurt When I Pee?", 
        "Peaches En Regalia", 
        "Yellow Snow Suite", 
        "Strictly Genteel", 
        "Montana", 
        "A Pound For A Brown (incl. Thirteen", 
        "The Deathless Horsie)", 
        "Five-Five-Five"
    ],
    "location" : {
        "city" : "Manchester",
        "state_province" : "Greater Manchester",
        "country" : "UK",
        "venue" : "Apollo Theater"
    },
    "lineup" : [ 
        "Frank Zappa", 
        "Ike Willis", 
        "Denny Walley", 
        "Warren Cucurullo", 
        "Arthur Barrow", 
        "Vinnie Colaiuta", 
        "Ed Mann", 
        "Tommy Mars", 
        "Peter Wolf"
    ]
},
{
    "time" : "only",
    "date" : new Date("1980-03-25T00:00:00.000Z"),
    "setlist" : [ 
        "Don't Eat The Yellow Snow", 
        "intros/Nanook Rubs It vamp", 
        "Teenage Wind", 
        "Harder Than Your Husband", 
        "Bamboozled By Love", 
        "Pick Me I'm Clean", 
        "Society Pages", 
        "I'm A Beautiful Guy", 
        "Beauty Knows No Pain", 
        "Charlie's Enormous Mouth", 
        "Any Downers?", 
        "Conehead", 
        "Easy Meat", 
        "Mudd Club", 
        "The Meek Shall Inherit Nothing", 
        "Heavenly Bank Account", 
        "Suicide Chump", 
        "Jumbo Go Away", 
        "If Only She Woulda", 
        "I Don't Wanna Get Drafted", 
        "Joe's Garage", 
        "Why Does It Hurt When I Pee?", 
        "Dancin' Fool", 
        "Bobby Brown", 
        "Black Napkins", 
        "Keep It Greasey", 
        "Watermelon In Easter Hay"
    ],
    "location" : {
        "city" : "Seattle",
        "state_province" : "WA",
        "country" : "USA",
        "venue" : "Seattle Center Arena"
    },
    "lineup" : [ 
        "Frank Zappa", 
        "Ike Willis", 
        "Ray White", 
        "Arthur Barrow", 
        "David Logeman", 
        "Tommy Mars"
    ]
}]
      



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title: string = 'Zappa Show DB';
    shows = SHOWS;
    selectedShow;

    onSelect(show: Show): void {
        this.selectedShow = show;
    }
}


