import * as P from "./props";

export const Input = ({ placeholder, onChange, ...props }: P.Props) => {
    return (
        <input
            {...props}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full h-10 text-white rounded-lg bg-transparent border-2 border-primary px-3 placeholder:text-white focus:outline focus:border-secondary"
        />
    );
};
