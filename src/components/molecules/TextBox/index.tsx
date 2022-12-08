import * as P from "./props";

export const TextBox = ({ texts }: P.Props) => {
    return (
        <div className="flex items-center flex-col my-6 text-center">
            {texts.map((text, index) => (
                <p key={index} className="text-lg text-white">
                    {text}
                </p>
            ))}
        </div>
    );
};
