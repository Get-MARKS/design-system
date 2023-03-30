export interface PaginationStepsProps {
    size?: "small" | "default" | "large";
    type?: "dot" | "line";
    currentStep: number;
    totalSteps: number;
}
