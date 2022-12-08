import { TextBox, Button } from "components";
import * as P from "./props";

export const ThirdStage = ({ data, setData, activeStage, setActiveStage }: P.Props) => {
    return (
        <>
            <TextBox texts={["Escolha um dos horários disponíveis:"]} />

            <div className="grid grid-cols-2 gap-3">
                <Button title="15:00" />
                <Button title="17:00" />
                <Button title="18:00" />
                <Button title="21:00" />
                <Button title="22:00" />
                <Button title="23:00" />
            </div>
        </>
    );
};
