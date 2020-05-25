import React, { Component } from 'react';
import Song from './Song';

class SongList extends Component {

    selectSong = (song) => {
        this.props.onSelect(song);
    };

    removeSong = (song) => {
        this.props.onRemove(song);
    };

    render() {
        return(
            <div className="song-list-wrap">
                <div className="container">
                    <span className="song-list-title">#Top songs</span>
                    <div className="song-list">
                        {
                            this.props.songs.map((song, index) =>
                                <Song
                                    key={index}
                                    index={index + 1}
                                    currentSong={song}
                                    isPlaying={this.props.playing && this.props.playing.id === song.id}
                                    onClick={e => this.selectSong(song)}
                                    onRemove={e => this.removeSong(song)}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SongList;
