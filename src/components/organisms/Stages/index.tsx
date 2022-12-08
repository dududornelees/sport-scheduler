import { useState } from "react";
import { FirstStage, FourthStage, SecondStage, ThirdStage } from "components";
import * as P from "./props";

export const Stages = ({ sports }: P.Props) => {
    const [activeStage, setActiveStage] = useState(0);
    const [data, setData] = useState({ date: "", block: "", hour: "", name: "", cellphone: "" });

    return (
        <>
            {activeStage >= 0 && (
                <FirstStage data={data} setData={setData} activeStage={activeStage} setActiveStage={setActiveStage} />
            )}

            {activeStage >= 1 && (
                <SecondStage
                    data={data}
                    setData={setData}
                    activeStage={activeStage}
                    setActiveStage={setActiveStage}
                    sports={sports}
                />
            )}

            {activeStage >= 2 && (
                <ThirdStage data={data} setData={setData} activeStage={activeStage} setActiveStage={setActiveStage} />
            )}

            {activeStage >= 3 && (
                <FourthStage data={data} setData={setData} activeStage={activeStage} setActiveStage={setActiveStage} />
            )}
        </>
    );
};
