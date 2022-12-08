import { TextBox, Button } from "components";
import * as P from "./props";

export const FirstStage = ({ data, setData, activeStage, setActiveStage }: P.Props) => {
    const handleSelectDate = (date: string) => {
        setData({ ...data, date });
        setActiveStage(1);
    };

    return (
        <>
            <TextBox texts={["Olá, vamos dar início ao agendamento!", "Qual a data do agendamento?"]} />

            <div className="flex items-center justify-center flex-col gap-3">
                <Button
                    title="Hoje"
                    onClick={() => handleSelectDate("today")}
                    disabled={data.date !== "today" && activeStage > 0}
                    selected={data.date === "today" && activeStage > 0}
                />

                <Button
                    title="Outra data"
                    onClick={() => handleSelectDate("other")}
                    disabled={data.date !== "other" && activeStage > 0}
                    selected={data.date === "other" && activeStage > 0}
                />
            </div>
        </>
    );
};
