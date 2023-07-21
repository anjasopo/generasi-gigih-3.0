# Simple Playlist Spotify Server API Documentation

The Simple Playlist Spotify Server API allows you to manage playlists and songs. It provides endpoints to add songs to playlists, play a song, and retrieve a list of songs from a playlist.

## Base URL

```
http://localhost:3000
```

## Endpoints

### Get All Playlists

Retrieve a list of all playlists.

- **URL:** `/playlists`
- **Method:** GET
- **Response:**

```json
[
  {
    "playlistId": "1",
    "songs": [
      {
        "id": "1",
        "title": "Song Title 1",
        "artists": ["Artists 1", "Artists 2"],
        "url": "https://example.com/song_url_1",
        "currentlyPlaying": 0
      },
      // More songs in the playlist...
    ]
  },
  // More playlists...
]
```

### Get Songs in Playlist

Retrieve a list of songs in a specific playlist.

- **URL:** `/playlists/:playlistId/songs`
- **Method:** GET
- **Parameters:**
  - `playlistId`: The ID of the playlist to retrieve songs from.
- **Response:**

```json
{
  "playlistId": "1",
  "songs": [
    {
      "id": "1",
      "title": "Song Title 1",
      "artists": ["Artists 1", "Artists 2"],
      "url": "https://example.com/song_url_1",
      "currentlyPlaying": 0
    },
    // More songs in the playlist...
  ]
}
```

### Add Song to Playlist

Add a new song to a playlist.

- **URL:** `/playlists/:playlistId/songs/:songId`
- **Method:** POST
- **Parameters:**
  - `playlistId`: The ID of the playlist to add the song to.
  - `songId`: The ID of the song to add to the playlist.
- **Response:**
  - `201 Created`: Song added to playlist successfully.
  - `404 Not Found`: Playlist or Song not found.

### Play Song

Play a song from a playlist. The "currentlyPlaying" attribute will be temporarily changed to 1 for the played song.

- **URL:** `/playlists/:playlistId/songs/:songId/play`
- **Method:** POST
- **Parameters:**
  - `playlistId`: The ID of the playlist containing the song to play.
  - `songId`: The ID of the song to play.
- **Response:**
  - `200 OK`: Song is now playing.
  - `404 Not Found`: Playlist or Song not found.

### Get All Songs

Retrieve a list of all songs available.

- **URL:** `/songs`
- **Method:** GET
- **Response:**

```json
[
  {
    "id": "1",
    "title": "Song Title 1",
    "artists": ["Artists 1", "Artists 2"],
    "url": "https://example.com/song_url_1",
    "currentlyPlaying": 0
  },
  // More songs...
]
```

### Get Song by ID

Retrieve a specific song by its ID.

- **URL:** `/songs/:songId`
- **Method:** GET
- **Parameters:**
  - `songId`: The ID of the song to retrieve.
- **Response:**

```json
{
  "id": "1",
  "title": "Song Title 1",
  "artists": ["Artists 1", "Artists 2"],
  "url": "https://example.com/song_url_1",
  "currentlyPlaying": 0
}
```

### Add New Song

Add a new song to the list of available songs.

- **URL:** `/songs`
- **Method:** POST
- **Request Body:**

```json
{
  "id": "4",
  "title": "New Song Title",
  "artists": ["New Artist 4"],
  "url": "https://example.com/song_url_4",
}
```

- **Response:**
  - `201 Created`: Song added successfully.
  - `409 Conflict`: A song with the provided ID already exists.

## Note

- The "currentlyPlaying" attribute does not need to be created when adding a new song to the server. It will be automatically added by default with a value of 0.
- The "currentlyPlaying" attribute will only be temporarily changed when using the `/playlists/:playlistId/songs/:songId/play` endpoint. The changes will not be persisted in the `data.json` file after the server is stopped.