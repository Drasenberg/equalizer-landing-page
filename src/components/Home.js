import React from "react";
import classes from "../styles/Home.module.scss";

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.background}></div>
      <header>
        <div className={classes.logo}></div>
      </header>
      <main>
        <h1>We make your music sound extraordinary.</h1>
        <p>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
        <h2>Premium EQ</h2>
        <p>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <p>
          <span>$4</span> / month{" "}
        </p>
        <button>iOS Download</button>
        <button>Android Download</button>
      </main>

      <footer>
        All rights reserved © Equalizer 2021 Have any problems? Contact us via
        social media or email us at equalizer@example.com
      </footer>
    </div>
  );
}

export default Home;