import { TextBox, Button } from "components";
import * as P from "./props";

export const SecondStage = ({ data, setData, activeStage, setActiveStage, sports }: P.Props) => {
    return (
        <>
            <TextBox texts={["Qual o tipo de quadra?"]} />

            <div className="flex items-center justify-center flex-col gap-3">
                {sports.map((sport: Sport) => (
                    <Button title={sport.title} />
                ))}
            </div>
        </>
    );
};
