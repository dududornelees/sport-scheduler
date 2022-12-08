import * as P from "./props";

export const SportCard = ({ sportCard }: P.Props) => {
    return (
        <div className="relative">
            <img
                src={sportCard.photo}
                className="rounded-xl shadow-md bg-primary flex items-center justify-center h-40 md:h-48 lg:h-60 w-full object-cover"
            />

            <h2 className="text-white text-xl font-semibold absolute inset-0 flex items-center justify-center">
                {sportCard.title}
            </h2>
        </div>
    );
};
