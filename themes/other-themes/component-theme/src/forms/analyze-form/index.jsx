/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Input, Button } from "gatsby-theme-ui";
import { useForm } from "react-hook-form";
import { hasKey } from "@boseo/helper/methods";
import { StyledInputGroup } from "./style";

const AnalyzeForm = ({ layout, sx }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // eslint-disable-next-line no-console
        console.log(data);
    };
    return (
        <StyledInputGroup layout={layout} sx={sx}>
            {layout !== 2 && (
                <Input
                    type="text"
                    id="web_url"
                    placeholder="Web URL"
                    state={hasKey(errors, "web_url") ? "error" : "success"}
                    showState={!!hasKey(errors, "web_url")}
                    {...register("web_url", {
                        required: "Url is required",
                        pattern: {
                            value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                            message: "invalid url",
                        },
                    })}
                />
            )}
            <Input
                type="email"
                id="web_email"
                placeholder="Email"
                state={hasKey(errors, "web_email") ? "error" : "success"}
                showState={!!hasKey(errors, "web_email")}
                {...register("web_email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address",
                    },
                })}
            />
            <Button type="button" onClick={handleSubmit(onSubmit)}>
                Analyze
            </Button>
        </StyledInputGroup>
    );
};

AnalyzeForm.propTypes = {
    layout: PropTypes.oneOf([1, 2]),
    sx: PropTypes.shape({}),
};

AnalyzeForm.defaultProps = {
    layout: 1,
};

export default AnalyzeForm;
