/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Input, Button } from "gatsby-theme-ui";
import { useForm } from "react-hook-form";
import { hasKey } from "@boseo/helper/methods";
import { StyledInputGroup } from "./style";

const NewsletterForm = ({ layout, className, sx }) => {
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
        <form
            className={className}
            sx={sx}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <StyledInputGroup layout={layout}>
                <Input
                    type="email"
                    id="newsletter_email"
                    placeholder="Enter Your Email"
                    state={
                        hasKey(errors, "newsletter_email") ? "error" : "success"
                    }
                    showState={!!hasKey(errors, "newsletter_email")}
                    {...register("newsletter_email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                        },
                    })}
                />
                <Button
                    type="submit"
                    color={layout === 1 ? "primary" : "light"}
                >
                    Subscribe
                </Button>
            </StyledInputGroup>
        </form>
    );
};

NewsletterForm.propTypes = {
    layout: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    sx: PropTypes.shape({}),
};

NewsletterForm.defaultProps = {
    layout: 1,
};

export default NewsletterForm;
