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
}

const variables: {[key in ButtonVarient]: StateColors} = {
    primary: {
        regular: {
            bg:'#d93848',
            color: "white"
        },
        hover: {
            bg: '#eb4d5d',
            color: "black"
        },
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
    ${ pr => pr.disabled ? `
        background-color: #a6a6a6;
        color: #5e5e5e;
        cursor: not-allowed;

        &:hover {
            background-color: #a6a6a6 !important;
            color: #5e5e5e !important;
        }
    ` : ''}
    border-radius: 0;
    outline: none;

    &:focus {
        box-shadow: 0 0 0 1px #fff, 0 0 0 2px ${ (pr) => variables[pr.varient].regular.bg };
    }
    &:hover {
        background-color: ${ (pr) => variables[pr.varient].hover.bg };
    }
`;