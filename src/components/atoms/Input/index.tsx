import * as P from "./props";

export const Input = ({ placeholder, onChange }: P.Props) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            className="w-full h-10 rounded-lg bg-transparent border-2 border-primary px-3 placeholder:text-white"
        />
    );
};
