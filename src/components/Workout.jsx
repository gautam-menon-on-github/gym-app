import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

function Workout(props) {
    const {workout} = props;

    return (
        <div className="mt-16">
            <SectionWrapper id={"workout-section"} className="min-h-screen" header={"It's ready!"} title={['YOUR', 'NEW', 'WORKOUT']}>
                <div className="flex flex-col gap-4">
                    {workout.map((exercise, index) => {
                        return (
                            <ExerciseCard exercise={exercise} i={index} key={index} />
                        )
                    })}

                </div>
            </SectionWrapper>
        </div>
    )
}

export default Workout;