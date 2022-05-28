import { Button } from "gatsby-theme-ui";
import { useForm } from "react-hook-form";
import { hasKey } from "@boseo/helper/methods";
import { StyledInput } from "./style";

const NewsletterForm = () => {
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <StyledInput
                type="email"
                id="news_email"
                placeholder="Email Address *"
                sx={{ mb: "8px" }}
                feedbackText={errors?.news_email?.message}
                state={hasKey(errors, "news_email") ? "error" : "success"}
                showState={!!hasKey(errors, "news_email")}
                {...register("news_email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address",
                    },
                })}
            />
            <Button type="submit" sx={{ mt: "8px" }}>
                Subscribe
            </Button>
        </form>
    );
};

export default NewsletterForm;
