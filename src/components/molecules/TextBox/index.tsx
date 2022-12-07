import * as P from "./props";

export const TextBox = ({ texts }: P.Props) => {
    return (
        <div className="flex items-center flex-col mt-8 mb-8">
            {texts.map((text) => (
                <p className="text-lg text-white -mt-1">{text}</p>
            ))}
        </div>
    );
};
