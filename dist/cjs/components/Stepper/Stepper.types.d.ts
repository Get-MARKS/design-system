export interface StepperProps {
    direction?: "top" | "bottom" | "left" | "right";
    status: "complete" | "current" | "incomplete";
    caption?: string;
    label?: string;
}
