import { ChangeEventHandler, ReactNode } from "react";
export interface OptionProps {
    value?: string | number;
    label?: string | number;
}
export interface SelectProps {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    selectedOption?: OptionProps | null;
    options: Array<OptionProps>;
    searchable?: boolean;
    leftIcon?: ReactNode;
    leftIconLoc?: string;
    placeholder: string;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    title: string;
    onSelect: any;
    name: string;
}
