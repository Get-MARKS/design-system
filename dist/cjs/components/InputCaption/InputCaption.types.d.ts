export interface InputCaptionProps {
    type: "default" | "success" | "error" | "info" | "password" | "passwordState";
    size: "default" | "small" | "medium" | "large";
    passwordState: number;
    content: string;
}
