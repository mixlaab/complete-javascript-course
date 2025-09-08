const song = {
    title: 'A Day in the Life',
    artist: 'The Beatles',
    album: 'Sgt. Pepper\'s Lonely Hearts Club Band',
    releaseYear: 1967,
    genres: ['Rock', 'Psychedelic Rock'],
    duration: 337, // duration in seconds
    label: {
      name: 'Parlophone',
      location: 'London, UK'
    },
    formats: ['Vinyl', 'CD', 'Digital'],
    isPlatinum: true
};

const songProps = Object.keys(song);
console.log(songProps);

const songInfo = Object.values(song);
console.log(songInfo);

const songEntries = Object.entries(song);
console.table(songEntries);

for (const [songKey, songValue] of songEntries) {
    if (Array.isArray(songValue)) {
        const verb = songValue.length === 1 ? 'is' : 'are';
        console.log(`The ${songKey} of the song ${verb} ${songValue.join(', ')}`);
    } else {
        console.log(`The ${songKey} of the song is ${songValue}`);
    }
}
