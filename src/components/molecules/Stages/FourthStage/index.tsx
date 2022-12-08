import { TextBox, Button, Input } from "components";
import { ChangeEvent } from "react";
import * as P from "./props";

export const FourthStage = ({ data, setData, activeStage, setActiveStage }: P.Props) => {
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: [e.target.value] });
    };

    const handleFinishSchedule = () => {
        alert("Em desenvolvimento!");
        setData({ date: "", block: "", hour: "", name: "", cellphone: "" });
        setActiveStage(0);
    };

    return (
        <>
            <TextBox texts={["Agora só precisamos de alguns", "dados para confirmar o agendamento:"]} />

            <div className="flex flex-col items-center justify-center gap-3 mb-5">
                <Input type="text" name="name" placeholder="Nome:" onChange={(e) => handleChangeInput(e)} />
                <Input type="number" name="cellphone" placeholder="Celular:" onChange={(e) => handleChangeInput(e)} />
                <Button selected onClick={handleFinishSchedule} title="Confirmar agendamento!" />
            </div>
        </>
    );
};
