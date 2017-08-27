# ZappaDB

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

Zappa Concert Database intends to be a complete source for information on Zappa concerts.


## Why?

Sites like FZShows or the Zappa Gig List have a lot of great information, but aren't the best in terms of layouting data or making it easy to browse. Additionally, with techonlogies like Git, dealing with contributions is easier and more transparent than relying on emailing a webmaster with corrections. Lastly, storing the information in JSON is better than the current CSV option on the Gig List or the embedded-in-html-only data on FZShows. 

## Live Demo

Vist the site at https://vidjuheffex.github.io/zappa-concert-database/ to view it in action.

## Features

Click on a show to view available setlist data as well as that shows lineup. Alternatively, click on a musician to see only shows in which they are part of the lineup.

## Todo

- Convert JSON structure to a true DB. (Likely PostgreSQL).
- Allow mutiple filters
- Remove garbage or messy entries.
- 

## Special Thanks
A very special thanks to [FZShows](http://www.zappateers.com/fzshows/) from where I scraped the data.

FZShows was created in 1996 by Jon Naurin. It's currently maintained by Oscar Bianco.

## Web Scraping

This is the code I ran to get the starter dataset.

``` javascript
var myObj = {};
myObj.groups = [];
var lastGroup = false;
Object.assign(document.querySelectorAll("#content>h3"), Object.Array)
  .forEach((e,i, a) => {
    //set shows
    var shows = [];
    var bands = Object.assign(document.querySelectorAll("p.band"), Object.Array);
    if(i == a.length - 1){
      lastGroup = true;
    }
    var lastShow = false;
    Object.assign(document.querySelectorAll("#content>h4"), Object.Array)
      .forEach((show,i2,a2) => {
        if(i2 == a2.length - 1){
          lastShow=true;
        }
        let foundSetlist = false;
        let foundSlot = false;
        var setlists = [];
        if((!lastGroup && (show.compareDocumentPosition(a[i+1]) & Node.DOCUMENT_POSITION_FOLLOWING) && (show.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING))
           || (lastGroup && show.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING)) {
          let dateVenue = show.innerText.split(" - ", 2).map(s => s.trim());
          Object.assign(document.querySelectorAll("#content>p.setlist"), Object.Array)
              .forEach(setlist => {
                if((!lastShow && (setlist.compareDocumentPosition(a2[i2+1]) & Node.DOCUMENT_POSITION_FOLLOWING) && (setlist.compareDocumentPosition(show) & Node.DOCUMENT_POSITION_PRECEDING))
                   || (lastShow && setlist.compareDocumentPosition(show) & Node.DOCUMENT_POSITION_PRECEDING)) {
                  foundSetlist = true;
                  console.log(foundSetlist);
                  setlists.push(setlist.innerText);
                }
              });

          //find early or lates, push the appropriate set list to each respective show
          Object.assign(document.querySelectorAll("#content>h5"), Object.Array)
            .forEach((slot) => {
              if((!lastShow && (slot.compareDocumentPosition(a2[i2+1]) & Node.DOCUMENT_POSITION_FOLLOWING) && (slot.compareDocumentPosition(show) & Node.DOCUMENT_POSITION_PRECEDING))
                 || (lastShow && slot.compareDocumentPosition(show) & Node.DOCUMENT_POSITION_PRECEDING)) {
                foundSlot = true;
                console.log(foundSlot);
                let slotText = slot.innerText.toLowerCase();
                let matchedSetlist = [];
                if (setlists.length > 0){
                  if (slotText.startsWith("early") ){
                    matchedSetlist = setlists[0].split(",").map(s => s.trim());
                  }
                  else{
                    try{
                      matchedSetlist = setlists[1].split(",").map( s => s.trim());
                    }
                    catch (err){
                      matchedSetlist = setlists[0].split(",").map( s => s.trim());
                    }
                  }
                }
                shows.push({date: dateVenue[0], venue: dateVenue[1], lineup: bands[i].innerText.split(",").map(s => s.trim()), slot: slotText, setlist: matchedSetlist});
              }
            });
          if(!foundSlot){
            let setlist = [];
            if(setlists.length > 0){
              setlist = setlists[0].split(",").map(s => s.trim());
            }
            shows.push({date: dateVenue[0], venue: dateVenue[1], lineup: bands[i].innerText.split(",").map(s => s.trim()), slot: "", setlist: setlist});
          }
        }
      });
    return myObj.groups.push({name: e.innerText, shows: shows});
  });

var masterShowArray = myObj.groups.reduce( (a,e) => a.concat(e.shows), [])
console.log(JSON.stringify(masterShowArray))
```

The lack of containers for each show made this more difficult than I would have liked, which is why there is so much `compareDOcumentPosition` going on.
