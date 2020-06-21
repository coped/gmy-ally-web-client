import React from "react";
import "assets/Welcome.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Larry from "images/larry-1x1.jpg";
import Sandy from "images/buff-sandy-1x1.jpg";
import EyeMuscles from "images/eyeball-muscles-1x1.jpg";
import MusclesOnMuscles from "images/muscles-on-muscles-1x1.jpg";
import KaliMuscle from "images/kali-muscle-1x1.jpg";
import BelgianBlue from "images/belgian-blue-1x1.jpg";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div id="Welcome">
      <h1 className="title has-text-centered is-size-1">
        Welcome to Gym Partner!
      </h1>
      <div className="columns section">
        <div className="column content">
          <div className="container">
            <h2 className="has-text-centered">
              Gym Partner is a web and mobile application built to help you:
            </h2>
            <div>
              <ul className="is-size-5">
                <li>Schedule workout routines</li>
                <li>Set fitness goals</li>
                <li>Track your improvement over time</li>
              </ul>
            </div>
          </div>
          <div className="has-text-centered section">
            <h2>Sign up and try it out!</h2>
            <Link to="/signup" className="button is-primary is-large">
              <strong>Sign up</strong>
            </Link>
          </div>
        </div>
        <div className="column is-5">
          <div className="box">
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
                <img src={KaliMuscle} alt="Kali muscle" />
              </div>
              <div>
                <img src={Sandy} alt="Sandy Cheeks" />
              </div>
              <div>
                <img src={BelgianBlue} alt="Belgian blue" />
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
    </div>
  );
}
