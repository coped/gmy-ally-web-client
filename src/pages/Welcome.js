import React from "react";
import "assets/Welcome.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Larry from "images/larry-1x1.jpg";
import Sandy from "images/buff-sandy-1x1.jpg";
import EyeMuscles from "images/eyeball-muscles-1x1.jpg";
import MusclesOnMuscles from "images/muscles-on-muscles-1x1.jpg";

export default function Welcome() {
  return (
    <div id="Welcome">
      <h1 className="title has-text-centered is-size-1">
        Welcome to Gym Partner!
      </h1>
      <div className="columns">
        <div className="column">
          <h2 className="is-size-3 has-text-centered">
            Gym Partner is a web and mobile application built to help you:
          </h2>
          <div>
            <ul>
              <li>Schedule workout routines</li>
              <li>Set fitness goals</li>
              <li>Track your improvement over time</li>
            </ul>
          </div>
        </div>
        <div className="column box is-4">
          <Carousel
            showArrows={false}
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            interval={2500}
            dynamicHeight={true}
            transitionTime={500}
            stopOnHover={false}
          >
            <div>
              <img src={Larry} alt="Larry the Lobster" />
            </div>
            <div>
              <img src={Sandy} alt="Sandy Cheeks" />
            </div>
            <div>
              <img src={EyeMuscles} alt="Eyeball muscles" />
            </div>
            <div>
              <img src={MusclesOnMuscles} alt="Muscles on muscles" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
