import React from "react";
import classes from "../styles/Home.module.scss";
import iconApple from "../assets/icon-apple.svg";
import iconAndroid from "../assets/icon-android.svg";

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <div className={classes.innerBg}></div>
      </div>
      <header>
        <div className={classes.logo}></div>
      </header>
      <main>
        <div className={classes.intro}>
          <h1>We make your music sound extraordinary.</h1>
          <p>
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
        <div className={classes.appDesc}>
          <div className={classes.bgContainer}>
            <div className={classes.bgImage}></div>
            <div className={classes.appImage}></div>
          </div>
          <div className={classes.contentDesc}>
            <h2>Premium EQ</h2>
            <p>
              Get expert-level control with a robust equalizer, volume mixer,
              and spatial audio. Take your listening experience to a whole new
              level and access all our incredible features!
            </p>
            <p className={classes.price}>
              <span>$4</span> / month
            </p>
            <div className={classes.controls}>
              <button className={classes.ios}>
                <img src={iconApple} alt="ios download" />
                iOS Download
              </button>
              <button className={classes.android}>
                <img src={iconAndroid} alt="android download" /> Android
                Download
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className={classes.footerContent}>
          <div className={classes.logo}></div>
          <div className={classes.text}>
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at <span>equalizer@example.com</span>
          </div>
        </div>
        <div className={classes.social}>
          <button className={classes.facebook}></button>
          <button className={classes.instagram}></button>
          <button className={classes.twitter}></button>
        </div>
      </footer>
    </div>
  );
}

export default Home;
