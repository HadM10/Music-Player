import { useState, useEffect } from "react";
import Player from "./Components/Player";


function App() {
  const [songs, setSongs] = useState([
    {
      title: "Demons",
      artist: "Imagine Dragons",
      image: "https://i1.sndcdn.com/artworks-000241938427-nscbv9-t500x500.jpg",
      src: "./Songs/Imagine Dragons - Demons (Lyrics).mp3"
    },
    {
      title: "Radioactive",
      artist: "Imagine Dragons",
      image: "https://i1.sndcdn.com/artworks-000052911031-fuh0ub-t500x500.jpg",
      src: "./Songs/Imagine Dragons - Radioactive (Lyrics).mp3"
    },
    {
      title: "Whatever It Takes",
      artist: "Imagine Dragons",
      image: "https://upload.wikimedia.org/wikipedia/en/2/20/Whatever_It_Takes_Imagine_Dragons.jpg",
      src: "./Songs/Imagine Dragons - Whatever It Takes (Lyrics   Lyric Video).mp3"
    },
    {
      title: "Wrecked",
      artist: "Imagine Dragons",
      image: "https://pics.filmaffinity.com/Imagine_Dragons_Wrecked_Animated_Version_Music_Video-730684571-mmed.jpg",
      src: "./Songs/Imagine Dragons - Wrecked (Lyrics).mp3"
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      else
        return currentSongIndex + 1;
    })
  }, [currentSongIndex])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        nextSongIndex={nextSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
