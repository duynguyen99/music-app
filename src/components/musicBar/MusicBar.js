import React, { Component } from 'react';
import MusicPlayer from './components/MusicPlayer';

class MusicBar extends Component {

    reload() {
        if (this.ref) {
            this.ref.reload();
        }
    }

    render() {
        return(
            <div className={'music-bar' + (this.props.currentSong ? ' show' : '')}>
                {
                    this.props.currentSong &&
                    <div className="music-bar-container">
                        <div className="song-playing">
                            <span className="song-playing-name">{this.props.currentSong.name}</span>
                            -
                            <span className="song-playing-singer">{this.props.currentSong.singer}</span>
                        </div>
                        <div className="audio-player">
                            <MusicPlayer
                                src={this.props.currentSong.src}
                                ref={el => this.ref = el}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MusicBar;
