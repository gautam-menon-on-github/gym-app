import React from "react";
import Button from "./Button";

function Hero() {
    
    return (
        <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
            
            <div className="flex flex-col gap-4">
                <p>WELCOME TO</p>
                <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">CIRCUIT<span className="text-blue-400">WORKS</span></h1>
            </div>
            <p className="text-sm md:text-base font-light">
            This will help you make a <span className="text-blue-400 font-bold">simple</span> and <span className="font-bold text-blue-400">effective</span>, workout routine. You can make your own complete and fully customized workout <span className="font-bold text-blue-400"> in 3 easy steps! </span> It is thus perfect for beginners or the most experienced gym-goers.
            </p>

            <Button func={() => {
                window.location.href = '#generate';
            }} text={"Accept and Begin!"} />
        </div>
    )
}

export default Hero;