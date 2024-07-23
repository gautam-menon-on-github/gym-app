import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoledier";
import Button from "./Button";

function Header(props) {
    const { index, title, description } = props;
    
    return(
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout } = props;
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup));
            return;
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup]);
            setShowModal(false);
            return;
        }

        setMuscles([...muscles, muscleGroup])

        if (muscles.length === 2) {
            setShowModal(false);
        }
    }
    

    return (
        <SectionWrapper id={"generate"} className="min-h-screen" header={"generate your workout"} title={['It\'s', 'Huge', 'o\'Clock']}>
           

           <Header index={"01"} title={"Choose the workout!"} description={"Select the workout you wish to enjoy."} />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button onClick={() => {
                            setMuscles([]);
                            setPoison(type);
                        }} className={"bg-slate-950 border-2 duration-200 hover:border-blue-700 px-4 py-3 rounded-lg " + (type === poison ? "border-blue-700" : "border-blue-300")} key={typeIndex}>
                            <p className="capitalize">{type.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>

            <Header index={"02"} title={"Choose the muscles!"} description={"Select the muscle groups you want to target."} />

            <div className="bg-slate-950 border-2 border-solid border-blue-300 rounded-lg flex flex-col hover:border-blue-700 duration-200">
                <button className="relative flex items-center justify-center p-3" onClick={toggleModal}>
                    <p className="capitalize">{muscles.length == 0 ? "Select muscle groups" : muscles.join(', ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>

                {showModal && (
                    <div className="flex flex-col px-3 pb-3">
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup);
                                }} key={muscleGroupIndex} className={"hover:text-blue-400 duration-200 " + (muscles.includes(muscleGroup) ? " text-blue-400" : " ")}>
                                    <p className="capitalize">{muscleGroup.replaceAll("_", " ")}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            <Header index={"03"} title={"Choose the ultimate goal!"} description={"Select your ultimate goal of working out."} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme);
                        }} className={"bg-slate-950 border-2 px-4 duration-200 hover:border-blue-600 py-3 rounded-lg " + (scheme === goal ? "border-blue-600" : "border-blue-300")} key={schemeIndex}>
                            <p className="capitalize">{scheme.replaceAll('_', ' ')}</p>
                        </button>
                    )
                })}
            </div>
            
            <Button func={updateWorkout} text={"Formulate!"} />
        
        </SectionWrapper>

        
    )
}