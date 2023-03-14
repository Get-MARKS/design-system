import styled from "styled-components";

import { ButtonVarient, ButtonSize, ButtonPadding, Buttonheights} from "./button";

type StateColors = {
    regular: {
        bg: string,
        color: string,
    };
    hover: {
        bg: string,
        color: string
    };
    pressed: {
        bg: string,
        color: string
    };
    focused: {
        bg: string,
        color: string
    };
    disabled: {
        bg: string,
        color: string
    };
}

const variables: {[key in ButtonVarient]: StateColors} = {
    primary: {
        regular: {
            bg:'#2F86FF',
            color: "white"
        },
        hover: {
            bg: '#3479E9',
            color: "white"
        },
        pressed: {
            bg: '#91C3FD',
            color: "white"
        },
        focused: {
            bg: "#2F86FF",
            color: "white"
        },
        disabled: {
            bg: "#E1E7EF",
            color: "white"
        }

    },
    secondary: {
        regular: {
            bg:'transparent',
            color: "black"
        },
        hover: {
            bg: '#dbdbdb',
            color: "black"
        },
        pressed: {
            bg: '#91C3FD',
            color: "white"
        },
        focused: {
            bg: "#2F86FF",
            color: "white"
        },
        disabled: {
            bg: "#E1E7EF",
            color: "white"
        }
    },
    ternary: {
        regular: {
            bg:'#000',
            color: "#fff"
        },
        hover: {
            bg: '#3d3d3d',
            color: "#000"
        },
        pressed: {
            bg: '#91C3FD',
            color: "white"
        },
        focused: {
            bg: "#2F86FF",
            color: "white"
        },
        disabled: {
            bg: "#E1E7EF",
            color: "white"
        }
    }
};

interface StyledButtonProps {
    varient: ButtonVarient;
    withText: boolean;
    size: ButtonSize;
}

/* Real tag is assigned dynamically */
export const StyledButton = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    /* Add margin in case of loading or icon */
    & > *:nth-child(1) {
        margin-left: ${pr => pr.withText ? 7 : 0}px;
    }
    font-size: 15px;

    border: none;
    cursor: pointer;
    background-color: ${ (pr) => variables[pr.varient].regular.bg };
    color: ${ pr => variables[pr.varient].regular.color};
    padding: 0 ${ pr => ButtonPadding[pr.size]}px;
    height: ${ pr => Buttonheights[pr.size]}px;
    border-radius: 8px;
    outline: none;

    &:disabled{
        cursor: not-allowed;
        color: ${ (pr) => variables[pr.varient].pressed.color };
        background-color: ${ (pr) => variables[pr.varient].disabled.bg };

        &:hover{
            color: ${ (pr) => variables[pr.varient].pressed.color };
            background-color: ${ (pr) => variables[pr.varient].disabled.bg };
        }
    }

    &:pressed{
        color: ${ (pr) => variables[pr.varient].pressed.color };
        background-color: ${ (pr) => variables[pr.varient].pressed.bg };
    }

    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ (pr) => variables[pr.varient].regular.bg };
    }

    &:hover {
        color: ${ (pr) => variables[pr.varient].hover.color };
        background-color: ${ (pr) => variables[pr.varient].hover.bg };
    }
`;