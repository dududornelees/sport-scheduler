import { useState } from "react";
import { FirstStage, FourthStage, SecondStage, ThirdStage } from "components";
import * as P from "./props";

export const Stages = ({ sports }: P.Props) => {
    const [activeStage, setActiveStage] = useState(0);
    const [data, setData] = useState({ date: "", block: "", hour: "", name: "", cellphone: "" });

    return (
        <>
            <div className={`transition-all duration-300 ${activeStage >= 0 ? "opacity-100 pt-0" : "opacity-0 pt-6"}`}>
                <FirstStage data={data} setData={setData} activeStage={activeStage} setActiveStage={setActiveStage} />
            </div>

            <div className={`transition-all duration-300 ${activeStage >= 1 ? "opacity-100 pt-0" : "opacity-0 pt-6"}`}>
                <SecondStage
                    data={data}
                    setData={setData}
                    activeStage={activeStage}
                    setActiveStage={setActiveStage}
                    sports={sports}
                />
            </div>

            <div className={`transition-all duration-300 ${activeStage >= 2 ? "opacity-100 pt-0" : "opacity-0 pt-6"}`}>
                <ThirdStage data={data} setData={setData} activeStage={activeStage} setActiveStage={setActiveStage} />
            </div>

            <div className={`transition-all duration-300 ${activeStage >= 3 ? "opacity-100 pt-0" : "opacity-0 pt-6"}`}>
                <FourthStage data={data} setData={setData} activeStage={activeStage} setActiveStage={setActiveStage} />
            </div>
        </>
    );
};
