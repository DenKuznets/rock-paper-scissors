import React, { useRef } from "react";
import Step1 from "../../app/steps/Step1/Step1";

const Main = () => {
    const step1ref = useRef(null);
    return (
        <div>
            <Step1 stepRef={step1ref} />
        </div>
    );
};

export default Main;
