import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
               <img className="footer__albumLogo" src="data:image/jpeg;base64,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" alt=""/>
               <div className="footer__songInfo">
                   <h4>Yeah!</h4>
                   <p>Usher</p>
               </div>
            </div>


            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>


            <div className="footer__right">
            <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
            </div>


        </div>
    )
}

export default Footer
