import { MouseEventHandler, ReactNode } from "react";
interface option {
    label: string;
    icon?: ReactNode;
    iconLoc?: string;
    onClick: MouseEventHandler<HTMLLIElement>;
}
export interface DropdownProps {
    options: Array<option>;
    className?: string;
}
export {};
