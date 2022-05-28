import { useState } from "react";
import { navigate } from "gatsby";
import {
    StyledForm,
    StyledFormGroup,
    StyledInput,
    StyledButton,
} from "./style";

const SearchForm = () => {
    const [value, setValue] = useState();
    const handleInput = (e) => setValue(e.target.value);

    const handlSubmit = (e) => {
        e.preventDefault();

        const query = value
            .toLowerCase()
            .trim()
            .replace(/[^\w ]/g, "");
        // .replace(/\&+/g, '-')

        navigate(`/search?query=${query}`, { state: { query } });
    };
    return (
        <StyledForm onSubmit={handlSubmit}>
            <StyledFormGroup>
                <label htmlFor="search" className="sr-only">
                    Search...
                </label>
                <StyledInput
                    onChange={handleInput}
                    type="text"
                    id="search"
                    placeholder="Search..."
                />
                <StyledButton type="submit">
                    <i className="lnr lnr-magnifier" />
                </StyledButton>
            </StyledFormGroup>
        </StyledForm>
    );
};

export default SearchForm;
