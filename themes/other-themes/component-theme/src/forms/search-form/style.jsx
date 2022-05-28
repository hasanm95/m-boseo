import styled, { themeGet } from "@boseo/shared/styled";

export const StyledForm = styled.form`
    background-color: ${themeGet("colors.white")};
    box-shadow: ${themeGet("shadows.md")};
    border-radius: 0 0 5px 5px;
    padding: 25px 20px;
    width: 100%;
`;

export const StyledFormGroup = styled.div`
    position: relative;
`;

export const StyledInput = styled.input`
    background-color: ${themeGet("colors.sand")};
    border: none;
    border-radius: 5px;
    height: 50px;
    padding: 7px 30px 7px 20px;
    width: 100%;
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${themeGet("colors.heading")};
    height: 100%;
    padding-left: 15px;
    position: absolute;
    right: 8px;
    top: 52%;
    transform: translateY(-50%);
`;
