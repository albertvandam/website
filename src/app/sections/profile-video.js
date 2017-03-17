import React from 'react';

const IMAGE_URL = process.env.IMAGE_URL;
const VIDEO_URL = process.env.VIDEO_URL;

class ProfileVideo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            full  : false,
            paused: true
        };

        this.togglePlay = this.togglePlay.bind(this);
        this.resetVideo = this.resetVideo.bind(this);
    }

    togglePlay() {
        let videoElement = this.refs.profileVideo;

        if (videoElement.paused) {
            this.setState({
                full  : true,
                paused: false
            });

            videoElement.play();

        } else {
            this.setState({
                full  : true,
                paused: true
            });

            videoElement.pause();
        }
    }

    resetVideo() {
        this.setState({
            full  : false,
            paused: true
        });

        this.refs.profileVideo.load();
    }

    render() {
        return (
            <div>
                <div className={'profileVideoBackground' + (this.state.full ? ' full' : '')}></div>
                <div className={'profileVideoClose material-icons' + (this.state.full ? ' full' : '')}
                     onClick={this.resetVideo}
                     title="Close video">close
                </div>
                <div className={'profileVideoContainer' + (this.state.full ? ' full' : '')}>
                    <video className={'profileVideo' + (this.state.full ? ' full' : '')} ref="profileVideo"
                           preload="auto" poster={IMAGE_URL + '/poster.png'}
                           title={this.state.paused ? 'Play video' : 'Pause video'}
                           onClick={this.togglePlay} onEnded={this.resetVideo}>
                        <source src={VIDEO_URL + '/profile.mp4'} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <div
                        className={'playButton material-icons' + (this.state.full ? ' full' : '') + (this.state.paused ? '' : ' hidden')}
                        onClick={this.togglePlay}
                        title={this.state.paused ? 'Play video' : 'Pause video'}>{this.state.paused ? 'play_circle_filled' : 'pause'}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileVideo;
