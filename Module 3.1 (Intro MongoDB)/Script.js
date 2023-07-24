// Membuat Database
use music

// Membuat collections Songs, Data: title, artist, album
db.Songs.insertMany(
    [{
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "album": "A Night at the Opera"
    },
    {
    "title": "Hotel California",
    "artist": "Eagles",
    "album": "Hotel California"
    },
    {
    "title": "Imagine",
    "artist": "John Lennon",
    "album": "Imagine"
    },
    {
    "title": "Like a Rolling Stone",
    "artist": "Bob Dylan",
    "album": "Highway 61 Revisited"
    },
    {
    "title": "Smells Like Teen Spirit",
    "artist": "Nirvana",
    "album": "Nevermind"
    },
    {
    "title": "Hey Jude",
    "artist": "The Beatles",
    "album": "The Beatles (White Album)"
    },
    {
    "title": "Stairway to Heaven",
    "artist": "Led Zeppelin",
    "album": "Led Zeppelin IV"
    },
    {
    "title": "Purple Haze",
    "artist": "Jimi Hendrix",
    "album": "Are You Experienced"
    },
    {
    "title": "Sweet Child o' Mine",
    "artist": "Guns N' Roses",
    "album": "Appetite for Destruction"
    },
    {
    "title": "Wonderwall",
    "artist": "Oasis",
    "album": "(What's the Story) Morning Glory?"
    }]
)

// Membuat collections Artists, Data: name, date of birth, genre
db.Artists.insertMany([
    { name: "Taylor Swift", dateOfBirth: new Date("1989-12-13"), genres: ["Pop", "Country"] },
    { name: "Ed Sheeran", dateOfBirth: new Date("1991-02-17"), genres: ["Pop", "Folk"] },
    { name: "Adele", dateOfBirth: new Date("1988-05-05"), genres: ["Pop", "Soul"] },
    { name: "Bruno Mars", dateOfBirth: new Date("1985-10-08"), genres: ["Pop", "R&B"] },
    { name: "Beyoncé", dateOfBirth: new Date("1981-09-04"), genres: ["Pop", "R&B"] },
    { name: "Justin Bieber", dateOfBirth: new Date("1994-03-01"), genres: ["Pop", "R&B"] },
    { name: "Rihanna", dateOfBirth: new Date("1988-02-20"), genres: ["Pop", "R&B"] },
    { name: "Drake", dateOfBirth: new Date("1986-10-24"), genres: ["Hip Hop", "R&B"] },
    { name: "Katy Perry", dateOfBirth: new Date("1984-10-25"), genres: ["Pop"] },
    { name: "Coldplay", dateOfBirth: new Date("1996-01-16"), genres: ["Rock", "Alternative"] }
]);

// Membuat collections Popular Songs, Data: title, timesplayed, period
db.PopularSongs.insertMany(
    [{
        "title": "Bohemian Rhapsody",
        "timesPlayed": 1000,
        "period": "2020-2021"
      },
      {
        "title": "Imagine",
        "timesPlayed": 800,
        "period": "2019-2020"
      },
      {
        "title": "Shape of You",
        "timesPlayed": 1200,
        "period": "2018-2019"
      },
      {
        "title": "Rolling in the Deep",
        "timesPlayed": 900,
        "period": "2017-2018"
      },
      {
        "title": "Hey Jude",
        "timesPlayed": 700,
        "period": "2016-2017"
      },
      {
        "title": "Hotel California",
        "timesPlayed": 1100,
        "period": "2015-2016"
      },
      {
        "title": "Thriller",
        "timesPlayed": 1500,
        "period": "2014-2015"
      },
      {
        "title": "Someone Like You",
        "timesPlayed": 950,
        "period": "2013-2014"
      },
      {
        "title": "Billie Jean",
        "timesPlayed": 1300,
        "period": "2012-2013"
      },
      {
        "title": "Wonderwall",
        "timesPlayed": 850,
        "period": "2011-2012"
      }]
)