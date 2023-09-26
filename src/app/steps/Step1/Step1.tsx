import { ForwardedRef, TransitionEvent } from "react";
import ChoiceList from "../../../components/ChoiceList/ChoiceList";

type Props = {
    children?: React.ReactNode;
    stepRef?: ForwardedRef<HTMLDivElement>;
    handleTransitionEnd?: (e: TransitionEvent<HTMLDivElement>) => void;
};

const Step1: React.FC<Props> = ({ stepRef: ref, handleTransitionEnd }) => {
    return (
        <div
            onTransitionEnd={(e) =>
                handleTransitionEnd && handleTransitionEnd(e)
            }
            ref={ref}
        >
            <ChoiceList />
        </div>
    );
};

export default Step1;
