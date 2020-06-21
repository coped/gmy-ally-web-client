import React, { useEffect, useState } from "react";
import Api from "lib/api";
import { PageLoader } from "components/common";
import { useExercises } from "context/exercises";

export default function Exercises() {
  const {
    allExercises,
    muscleGroups,
    categorizedExercises,
    setAllExercises,
  } = useExercises();
  const [loading, setLoading] = useState(false);
  const [currentMuscleGroup, setCurrentMuscleGroup] = useState("abdominals");

  // Fetch exercise data on component mount
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await Api.indexExercises();
      setAllExercises(data.payload.exercises);
      setLoading(false);
    }
    !allExercises && fetchData();
  }, []);

  function showThisMuscleGroup(name) {
    setCurrentMuscleGroup(name);
  }

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
      <div className="columns">
        <div className="column is-3">
          <aside className="menu">
            <p className="menu-label">SEARCH EXERCISES BY MUSCLE GROUP</p>
            <ul className="menu-list">
              {muscleGroups &&
                muscleGroups.map((name) => (
                  <li key={name}>
                    <a onClick={() => showThisMuscleGroup(name)}>
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
                  <li className="list-item">
                    <a>{exercise.title}</a>
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
