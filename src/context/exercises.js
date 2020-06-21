import React, { createContext, useContext, useState } from "react";

const ExercisesContext = createContext();

function ExercisesProvider(props) {
  const [allExercises, setAllExercises] = useState(null);
  const muscleGroups = getMuscleGroups();
  const categorizedExercises = getCategorizedExercises();

  // Get all unique muscle groups from exercises
  function getMuscleGroups() {
    return (
      allExercises &&
      allExercises
        .reduce((allGroups, exercise) => {
          const newGroups = [];
          const groupNames = exercise.muscle_groups.map(
            (muscle_group) => muscle_group.name
          );
          for (const group of groupNames) {
            !allGroups.includes(group) && newGroups.push(group);
          }
          return [...allGroups, ...newGroups];
        }, [])
        .sort()
    );
  }

  // Get exercises categorized by muscle group
  function getCategorizedExercises() {
    if (!allExercises) return allExercises;

    let categories = {};
    for (const muscleGroup of muscleGroups) {
      const exercises = allExercises
        .filter((exercise) => {
          const exerciseGroups = exercise.muscle_groups.map(
            (group) => group.name
          );
          return exerciseGroups.includes(muscleGroup);
        })
        .sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
          return 0;
        });
      categories[muscleGroup] = exercises;
    }
    return categories;
  }

  return (
    <ExercisesContext.Provider
      value={{
        allExercises,
        muscleGroups,
        categorizedExercises,
        setAllExercises,
      }}
      {...props}
    />
  );
}

const useExercises = () => useContext(ExercisesContext);
export { ExercisesProvider, useExercises };
