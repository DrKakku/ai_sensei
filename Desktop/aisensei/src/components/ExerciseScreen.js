import React from "react";
import Header from "./Header";
import Pushups from "./exercises/Pushups";

const ExerciseScreen = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Exercises</h1>
        <div>
          <h2>Warm Up</h2>
          <a></a>
          <div>
            <p>Jumping Jacks</p>
          </div>
          <div>
            <p>High Knees</p>
          </div>
        </div>
        <br />
        <div>
          <h2>Lower Body</h2>
          <div>
            <p>Squats</p>
          </div>
          <div>
            <p>Lunges</p>
          </div>
        </div>
        <br />
        <div>
          <h2>Upper Body</h2>
          <a href="/pushups">
            <div>
              <p>Push Ups</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExerciseScreen;
