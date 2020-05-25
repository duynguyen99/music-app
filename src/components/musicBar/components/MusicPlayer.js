import React, { Component } from 'react';
import playIcon from '../../../assets/images/play.svg';
import pauseIcon from '../../../assets/images/pause.svg';
import prevIcon from '../../../assets/images/prev.svg';
import nextIcon from '../../../assets/images/next.svg';

class MusicPlayer extends Component {

    state = {
        isPlaying: true,
        currentPercent: 0,
        durationStr: '00:00',
        currentTimeStr: '00:00',
    };

    componentDidMount() {
        this.audio.play();
    }

    playOrPause = () => {
        const isPlaying = this.state.isPlaying;
        this.setState({isPlaying: !isPlaying});
        isPlaying ? this.audio.pause() : this.audio.play();
    };

    onTimeUpdate = (e) => {
        const currentPercent = e.target.currentTime/this.audio.duration * 100;

        const currentMinute = Math.floor(this.audio.currentTime / 60);
        const currentSecond = Math.round(this.audio.currentTime - 60 * currentMinute);

        this.setState({
            currentPercent,
            currentTimeStr: (currentMinute < 10 ? '0' : '') + currentMinute + ':' + (currentSecond < 10 ? '0' : '') + currentSecond
        });
    };

    handleClickOnSlider = (e) => {
        this.audio.currentTime = this.audio.duration * (e.pageX - this.slider.offsetLeft) / this.slider.offsetWidth;
    };

    onCanPlay = () => {
        const min = Math.floor(this.audio.duration / 60);
        const second = Math.round(this.audio.duration - 60 * min);
        this.setState({
            durationStr: (min < 10 ? '0' : '') + min + ':' + (second < 10 ? '0' : '') + second
        });
    };

    reload() {
        this.audio.load();
        this.audio.play();
        this.setState({isPlaying: true});
    }

    render() {
        return(
            <div className="music-player">
                {
                    this.props.src &&
                    <audio
                        ref={(el) => this.audio = el}
                        controls
                        onTimeUpdate={this.onTimeUpdate}
                        onCanPlay={this.onCanPlay}
                    >
                        <source src={this.props.src} type="audio/mpeg" />
                    </audio>
                }

                <div className="music-player-controls">
                    <span className="time music-player-duration">
                        {this.state.durationStr}
                    </span>
                    <span className="btn-action btn-prev">
                        <img src={prevIcon} alt="Prev"/>
                    </span>
                    <span onClick={this.playOrPause} className="btn-action btn-play-pause">
                        {
                            !this.state.isPlaying &&
                            <img src={playIcon} alt="Play" className="btn-play"/>
                        }
                        {
                            this.state.isPlaying &&
                            <img src={pauseIcon} alt="Pause"/>
                        }
                    </span>
                    <span className="btn-action btn-next">
                        <img src={nextIcon} alt="Next"/>
                    </span>
                    <span className="time music-player-current-time">
                        {this.state.currentTimeStr}
                    </span>
                </div>

                <div
                    className="music-player-slider-wrap"
                    onClick={(e) => this.handleClickOnSlider(e)}
                >
                    <div
                        className="music-player-slider"
                        ref={el => this.slider = el}
                    >
                        <div
                            className="music-player-slider-fill"
                            style={{width: this.state.currentPercent + '%'}}
                        >
                            <span className="music-player-slider-handler" style={{left: this.state.currentPercent + '%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicPlayer;
