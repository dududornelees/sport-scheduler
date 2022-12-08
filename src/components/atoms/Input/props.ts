import { ChangeEvent, InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
