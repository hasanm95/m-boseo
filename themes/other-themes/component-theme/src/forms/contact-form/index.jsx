/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { FormGroup, Input, Textarea, Button } from "gatsby-theme-ui";
import { useForm } from "react-hook-form";
import { hasKey } from "@boseo/helper/methods";
import { formUrl } from "@boseo/shared/data/api-keys";
import axios from "axios";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };

    const onSubmit = (data, e) => {
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: formUrl,
            data,
        })
            .then(() => {
                handleServerResponse(true, "Thanks! for contact with us", form);
            })
            .catch((r) => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (
        <form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div className="row">
                <div className="col-md-6">
                    <FormGroup sx={{ mb: ["15px", null, "25px"] }}>
                        <Input
                            type="text"
                            id="con_name"
                            placeholder="Enter Your Name"
                            sx={{ mb: "5px" }}
                            feedbackText={errors?.con_name?.message}
                            state={
                                hasKey(errors, "con_name") ? "error" : "success"
                            }
                            showState={!!hasKey(errors, "con_name")}
                            {...register("con_name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Minimum length is 2",
                                },
                            })}
                        />
                    </FormGroup>
                </div>
                <div className="col-md-6">
                    <FormGroup sx={{ mb: ["15px", null, "25px"] }}>
                        <Input
                            type="email"
                            id="con_email"
                            placeholder="Enter Your Email"
                            sx={{ mb: "5px" }}
                            feedbackText={errors?.con_email?.message}
                            state={
                                hasKey(errors, "con_email")
                                    ? "error"
                                    : "success"
                            }
                            showState={!!hasKey(errors, "con_email")}
                            {...register("con_email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                    </FormGroup>
                </div>
            </div>
            <FormGroup sx={{ mb: ["25px", null, "45px"] }}>
                <Textarea
                    id="con_message"
                    placeholder="Message"
                    sx={{ height: ["150px", null, "210px"], mb: "5px" }}
                    feedbackText={errors?.con_message?.message}
                    state={hasKey(errors, "con_message") ? "error" : "success"}
                    showState={!!hasKey(errors, "con_message")}
                    {...register("con_message", {
                        required: "Message is required",
                        minLength: {
                            value: 2,
                            message: "Minimum length is 10",
                        },
                    })}
                />
            </FormGroup>
            <Button type="submit" disabled={serverState.submitting}>
                Send Message
            </Button>
            {serverState.status && (
                <p
                    className={`form-output ${
                        !serverState.status.ok ? "errorMsg" : "success"
                    }`}
                >
                    {serverState.status.msg}
                </p>
            )}
        </form>
    );
};
export default ContactForm;
