import React, { Component } from 'react';
import Header from './components/header/Header';
import SongList from './components/songList/SongList';
import MusicBar from './components/musicBar/MusicBar';
import {songs} from './constant/song.constant';

class App extends Component {

    state = {
        songs: songs,
        currentSong: null
    };

    selectSong = (song) => {
        if (!song) {
            return;
        }
        this.setState({
            currentSong: song
        });
        this.player.reload();
    };

    removeSong = (song) => {
        if (!song) {
            return;
        }
        const songs = this.state.songs.filter(s => s.id !== song.id);
        this.setState({
            songs: [...songs]
        });
    };

    render() {
        return (
            <div className="app">
                <Header />
                <SongList
                    songs={this.state.songs}
                    playing={this.state.currentSong}
                    onSelect={this.selectSong}
                    onRemove={this.removeSong}
                />
                <MusicBar
                    currentSong={this.state.currentSong}
                    ref={el => this.player = el}
                />
            </div>
        );
    }
}

export default App;
