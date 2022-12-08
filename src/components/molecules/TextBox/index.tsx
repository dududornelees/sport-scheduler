import * as P from "./props";

export const TextBox = ({ texts }: P.Props) => {
    return (
        <div className="flex items-center flex-col my-6 lg:my-8">
            {texts.map((text, index) => (
                <p key={index} className="text-lg text-white -mt-1">
                    {text}
                </p>
            ))}
        </div>
    );
};
