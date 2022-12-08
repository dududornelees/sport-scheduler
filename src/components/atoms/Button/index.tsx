import * as P from "./props";

export const Button = ({ title, onClick, disabled, selected }: P.Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full h-10 bg-primary hover:bg-secondary transition-all rounded-lg text-white font-semibold disabled:opacity-30 ${
                selected && "bg-secondary"
            }`}
        >
            {title}
        </button>
    );
};
