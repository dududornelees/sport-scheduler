import { TextBox, Button } from "components";
import * as P from "./props";

export const ThirdStage = ({ data, setData, activeStage, setActiveStage }: P.Props) => {
    const handleSelectHour = (hour: string) => {
        setData({ ...data, hour });
        setActiveStage(3);
    };

    return (
        <>
            <TextBox texts={["Escolha um dos horários disponíveis:"]} />

            <div className="grid grid-cols-2 gap-3">
                <Button
                    title="15:00"
                    onClick={() => handleSelectHour("15:00")}
                    selected={data.hour === "15:00" && activeStage > 2}
                    disabled={data.hour !== "15:00" && activeStage > 2}
                />

                <Button
                    title="17:00"
                    onClick={() => handleSelectHour("17:00")}
                    selected={data.hour === "17:00" && activeStage > 2}
                    disabled={data.hour !== "17:00" && activeStage > 2}
                />

                <Button
                    title="18:00"
                    onClick={() => handleSelectHour("18:00")}
                    selected={data.hour === "18:00" && activeStage > 2}
                    disabled={data.hour !== "18:00" && activeStage > 2}
                />

                <Button
                    title="21:00"
                    onClick={() => handleSelectHour("21:00")}
                    selected={data.hour === "21:00" && activeStage > 2}
                    disabled={data.hour !== "21:00" && activeStage > 2}
                />

                <Button
                    title="22:00"
                    onClick={() => handleSelectHour("22:00")}
                    selected={data.hour === "22:00" && activeStage > 2}
                    disabled={data.hour !== "22:00" && activeStage > 2}
                />

                <Button
                    title="23:00"
                    onClick={() => handleSelectHour("23:00")}
                    selected={data.hour === "23:00" && activeStage > 2}
                    disabled={data.hour !== "23:00" && activeStage > 2}
                />
            </div>
        </>
    );
};
