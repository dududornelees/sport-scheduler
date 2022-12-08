import { TextBox, Button, Input } from "components";
import * as P from "./props";

export const FourthStage = ({ data, setData, activeStage, setActiveStage }: P.Props) => {
    return (
        <>
            <TextBox texts={["Agora só precisamos de alguns", "dados para confirmar o agendamento:"]} />

            <div className="flex flex-col items-center justify-center gap-3 mb-5">
                <Input placeholder="Nome:" />
                <Input placeholder="Celular:" />
                <Button selected title="Confirmar agendamento!" />
            </div>
        </>
    );
};
