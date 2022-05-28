/** @jsx jsx */
import { jsx } from "theme-ui";
import { FormGroup, Input, Textarea, Button } from "gatsby-theme-ui";
import { useForm } from "react-hook-form";
import { hasKey } from "@boseo/helper/methods";

const FaqForm = () => {
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
        <form className="faq-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row">
                <div className="col-md-4">
                    <FormGroup sx={{ mb: ["15px", null, "25px"] }}>
                        <Input
                            type="text"
                            id="faq_name"
                            placeholder="Name*"
                            layout={2}
                            sx={{ height: "50px", bg: "white", mb: "5px" }}
                            feedbackText={errors?.faq_name?.message}
                            state={
                                hasKey(errors, "faq_name") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "faq_name")}
                            {...register("faq_name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Minimum length is 2",
                                },
                            })}
                        />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup sx={{ mb: ["15px", null, "25px"] }}>
                        <Input
                            type="email"
                            id="faq_email"
                            placeholder="Email*"
                            layout={2}
                            sx={{ height: "50px", bg: "white", mb: "5px" }}
                            feedbackText={errors?.faq_email?.message}
                            state={
                                hasKey(errors, "faq_email")
                                    ? "error"
                                    : "success"
                            }
                            showState={!!hasKey(errors, "faq_email")}
                            {...register("faq_email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                    </FormGroup>
                </div>
                <div className="col-md-4">
                    <FormGroup sx={{ mb: ["15px", null, "25px"] }}>
                        <Input
                            type="text"
                            id="faq_subject"
                            placeholder="Subject*"
                            layout={2}
                            sx={{ height: "50px", bg: "white", mb: "5px" }}
                            feedbackText={errors?.faq_subject?.message}
                            state={
                                hasKey(errors, "faq_subject")
                                    ? "error"
                                    : "success"
                            }
                            showState={!!hasKey(errors, "faq_subject")}
                            {...register("faq_subject", {
                                required: "Subject is required",
                            })}
                        />
                    </FormGroup>
                </div>
            </div>
            <FormGroup sx={{ mb: ["25px", null, "45px"] }}>
                <Textarea
                    id="faq_message"
                    placeholder="Your Question*"
                    layout={2}
                    sx={{
                        bg: "white",
                        height: ["150px", null, "210px"],
                        mb: "5px",
                    }}
                    feedbackText={errors?.faq_message?.message}
                    state={hasKey(errors, "faq_message") ? "error" : "success"}
                    showState={!!hasKey(errors, "faq_message")}
                    {...register("faq_message", {
                        required: "Question is required",
                        minLength: {
                            value: 2,
                            message: "Minimum length is 5",
                        },
                    })}
                />
            </FormGroup>
            <Button fullwidth type="submit">
                Scan Now
            </Button>
        </form>
    );
};
export default FaqForm;
