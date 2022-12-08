import { TextBox, Button } from "components";
import * as P from "./props";

export const SecondStage = ({ data, setData, activeStage, setActiveStage, sports }: P.Props) => {
    const handleSelectBlock = (block: string) => {
        setData({ ...data, block });
        setActiveStage(2);
    };

    return (
        <>
            <TextBox texts={["Qual o tipo de quadra?"]} />

            <div className="flex items-center justify-center flex-col gap-3">
                {sports.map((sport: Sport, index) => (
                    <Button
                        key={index}
                        title={sport.title}
                        onClick={() => handleSelectBlock(sport.title)}
                        disabled={data.block !== sport.title && activeStage > 1}
                        selected={data.block === sport.title && activeStage > 1}
                    />
                ))}
            </div>
        </>
    );
};
