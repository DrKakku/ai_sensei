import React from "react";
import Header from "./Header";
import "./ExerciseScreen.css";

const ExerciseScreen = () => {
  return (
    <div>
      <Header />
      <div className="exerciseBackground">
        <img
          className="backgroundImg"
          src="https://wallpaperaccess.com/full/1087589.jpg"
        />
        <h1 className="exerciseTitle">Exercises</h1>
        <div className="exerciseMain">
          <h2>Warm Up</h2>
          <div className="exerciseSub">
            <a href="/jumpingjacks">
              <div>
                <img
                  className="exerciseImg"
                  src="https://verv.com/wp-content/uploads/2019/08/jumping_jacks-e1564412474145.jpg"
                />
                <p>Jumping Jacks</p>
              </div>
            </a>

            <a href="/highknees">
              <div>
                <img
                  className="exerciseImg"
                  src="https://s3.amazonaws.com/kajabi-storefronts-production/blogs/3762/images/BaAgvwhXS4uKvkYQKOoX_high_knees_steam_engine.jpg"
                />
                <p>High Knees</p>
              </div>
            </a>
          </div>
          <br />
          <h2>Lower Body</h2>
          <div className="exerciseSub">
            <a href="/squats">
              <div>
                <img
                  className="exerciseImg"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-exercising-outdoors-royalty-free-image-649970260-1560430799.jpg"
                />
                <p>Squats</p>
              </div>
            </a>

            <a href="/lunges">
              <div>
                <img
                  className="exerciseImg"
                  src="https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/man-doing-lunges.jpg"
                />
                <p>Lunges</p>
              </div>
            </a>
          </div>
          <br />
          <h2>Upper Body</h2>
          <div className="exerciseSub">
            <a href="/pushups">
              <div>
                <img
                  className="exerciseImg"
                  src="https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/master/pass/Pushup.jpg"
                />
                <p>Push Ups</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseScreen;
