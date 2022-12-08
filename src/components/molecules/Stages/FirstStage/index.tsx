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
                    disabled={data.date !== "today" && activeStage > 0}
                    onClick={() => handleSelectDate("today")}
                />

                <Button
                    title="Outra data"
                    disabled={data.date !== "other" && activeStage > 0}
                    onClick={() => handleSelectDate("other")}
                />
            </div>
        </>
    );
};
