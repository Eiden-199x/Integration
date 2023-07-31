function tabContent(tab) {
  const exploreTabContent = document.querySelector("content");
  exploreTabContent.innerHTML = tab.innerHTML = content[tab];
}

const content = {
  lyrics: "",
  otherAlbums: "",
  relatedArtists: "",
};

const searchQuery = "All Too Well";

const lyricsOptions = {
  method: "GET",
  url: "https://genius-song-lyrics1.p.rapidapi.com/search/",
  params: {
    q: searchQuery,
    per_page: "10",
    page: "1",
  },
  headers: {
    "X-RapidAPI-Key": "bca2f7de25msh9c22e51b8005c61p1b7abejsn375e353a2d38",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};

const spotifyOptions = {
  method: "GET",
  url: "https://spotify23.p.rapidapi.com/search/",
  params: {
    q: searchQuery,
    type: "multi",
    offset: "0",
    limit: "10",
    numberOfTopResults: "5",
  },
  headers: {
    "X-RapidAPI-Key": "bca2f7de25msh9c22e51b8005c61p1b7abejsn375e353a2d38",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};
// console.log(spotifyOptions);

async function fetchData() {
  try {
    const response = await axios.request(lyricsOptions);
    console.log(response.data);

    const lyricsResponse = await axios.get(
      `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "bca2f7de25msh9c22e51b8005c61p1b7abejsn375e353a2d38",
          "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
        },
      }
    );
    console.log(lyricsResponse.data);
  } catch (error) {
    console.error(error);
  }
}

//I CAN'T GET THE DATA FROM THE API. I DON'T KNOW WHY. I'M FOLLOWING WHAT WAS WRITTEN ON THE API AND TRIED DIFFERENT WAY TO GET THE ID OF THE SONG BUT STILL I CAN'T MAKE IT APPEAR ON MY CONSOLE LOG.

//EVERYTHING IS STATIC. I'M SO SORRY. I'M STILL HAVING PROBLEMS WITH MYSELF BUT I PROMISE I WILL FINISH THIS INTEGRATION TO PRACTICE MY CODING SKILL. HOPING TO HAVE A CUP OF COFFEE WITH YOU AND CHARAT64
