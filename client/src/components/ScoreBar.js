import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const ScoreBar = (props) => {
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={props.score}
      duration={3}
      easingFunction={easeQuadInOut}
    >
      {(value) => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            value={value}
            text={`${roundedValue}%`}
            /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
            styles={buildStyles({ pathTransition: "none" })}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default ScoreBar;
