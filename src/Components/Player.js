import { React, useState, useRef, useEffect } from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

function Player(props) {

  const audioEl = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    }
    else{
      audioEl.current.pause()
    }
   
  })

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let now = props.currentSongIndex;
        now++;
        if (now > props.songs.length - 1) {
          now = 0;
        }
        return now;
      });

    } else {
      props.setCurrentSongIndex(() => {
        let now = props.currentSongIndex;
        now--;
        if (now < 0) {
          now = props.songs.length - 1;
        }
        return now;
      });
    }
  }

    return (
      <div className='player'>
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>

        <h4>Playing Now</h4>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong} />

        <p><strong>Next up: </strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
      </div>
    )
  }


export default Player