import React, { useEffect, useState } from "react";
import { Api } from "lib/api";
import { PageLoader } from "components/common";
import { useExercises } from "context/exercises";
import "bulma-quickview/dist/css/bulma-quickview.min.css";
import bulmaQuickview from "bulma-quickview/dist/js/bulma-quickview.min.js";

export default function Exercises() {
  const {
    allExercises,
    muscleGroups,
    categorizedExercises,
    setAllExercises,
  } = useExercises();
  const [loading, setLoading] = useState(false);
  const [currentMuscleGroup, setCurrentMuscleGroup] = useState("abdominals");
  const [quickviewExercise, setQuickviewExercise] = useState();

  // Fetch exercise data on component mount
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await Api.indexExercises();
      setAllExercises(data.payload.exercises);
      setQuickviewExercise(data.payload.exercises[0]);
      setLoading(false);
    }
    !allExercises && fetchData();
  }, [allExercises, setAllExercises]);

  useEffect(() => {
    if (allExercises && !quickviewExercise)
      setQuickviewExercise(allExercises[0]);
    if (quickviewExercise) bulmaQuickview.attach();
  });

  function showExercises() {
    console.log(allExercises);
    allExercises && console.log(categorizedExercises);
  }

  function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  return (
    <div id="Exercises">
      <PageLoader loading={loading} className="is-info" />
      {quickviewExercise && (
        <div id="quickviewDefault" className="quickview">
          <header className="quickview-header">
            <p className="title">{quickviewExercise.title}</p>
            <span className="delete" data-dismiss="quickview"></span>
          </header>

          <div className="quickview-body">
            <div className="quickview-block section">
              <h3 className="is-size-5">Movement type:</h3>
              <p>{quickviewExercise.movement_type}</p>
              <h3 className="is-size-5">Equipment:</h3>
              <div className="content">
                <ul>
                  {quickviewExercise.equipment.split("\n").map((item) => (
                    <li key={item}>{capitalize(item)}</li>
                  ))}
                </ul>
              </div>
              <h3 className="is-size-5">Steps:</h3>
              <div className="content">
                <ol>
                  {quickviewExercise.steps.split("\n").map((step, index) => (
                    <li key={"step-" + index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <footer className="quickview-footer">GYM PARTNER</footer>
        </div>
      )}
      <div className="columns">
        <div className="column is-3">
          <aside className="menu">
            <p className="menu-label">SEARCH EXERCISES BY MUSCLE GROUP</p>
            <ul className="menu-list">
              {muscleGroups &&
                muscleGroups.map((name) => (
                  <li key={name}>
                    <a onClick={() => setCurrentMuscleGroup(name)}>
                      {capitalize(name)}
                    </a>
                  </li>
                ))}
            </ul>
          </aside>
        </div>
        <div className="column">
          <h3 className="is-size-3 has-text-centered">
            {capitalize(currentMuscleGroup)}
          </h3>
          <div className="box">
            <ul className="menu-list">
              {categorizedExercises &&
                categorizedExercises[currentMuscleGroup].map((exercise) => (
                  <li className="list-item" key={exercise.name}>
                    <a
                      onClick={() => setQuickviewExercise(exercise)}
                      data-show="quickview"
                      data-target="quickviewDefault"
                    >
                      {exercise.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <button onClick={showExercises} className="button">
        Show exercises
      </button>
    </div>
  );
}
