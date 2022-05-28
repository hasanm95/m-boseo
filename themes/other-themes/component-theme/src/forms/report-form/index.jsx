import React from "react";
import PropTypes from "prop-types";
import { HeadingType } from "@boseo/helper/types";
import { FormGroup, Input, Button } from "gatsby-theme-ui";
import { useForm } from "react-hook-form";
import { hasKey } from "@boseo/helper/methods";
import { StyledWrap, StyledTitle } from "./style";

const ReportForm = ({ heading }) => {
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
        <StyledWrap>
            {heading && (
                <StyledTitle as={heading.level}>{heading.content}</StyledTitle>
            )}
            <form
                className="seo-report-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <FormGroup sx={{ mb: "15px" }}>
                    <Input
                        type="text"
                        id="report_website"
                        placeholder="Website *"
                        layout={2}
                        feedbackText={errors?.report_website?.message}
                        state={
                            hasKey(errors, "report_website")
                                ? "error"
                                : "success"
                        }
                        showState={!!hasKey(errors, "report_website")}
                        {...register("report_website", {
                            required: "Website is required",
                            pattern: {
                                value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                                message: "Invalid Website",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup sx={{ mb: "15px" }}>
                    <Input
                        type="text"
                        id="report_keyword"
                        placeholder="Keyword"
                        layout={2}
                        feedbackText={errors?.report_keyword?.message}
                        state={
                            hasKey(errors, "report_keyword")
                                ? "error"
                                : "success"
                        }
                        showState={!!hasKey(errors, "report_keyword")}
                        {...register("report_keyword", {
                            required: "Keyword is required",
                        })}
                    />
                </FormGroup>
                <FormGroup sx={{ mb: "15px" }}>
                    <Input
                        type="text"
                        id="report_name"
                        placeholder="Name *"
                        layout={2}
                        feedbackText={errors?.report_name?.message}
                        state={
                            hasKey(errors, "report_name") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "report_name")}
                        {...register("report_name", {
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "Minimum length is 2",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup sx={{ mb: "15px" }}>
                    <Input
                        type="email"
                        id="report_email"
                        placeholder="Email *"
                        layout={2}
                        feedbackText={errors?.report_email?.message}
                        state={
                            hasKey(errors, "report_email") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "report_email")}
                        {...register("report_email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup sx={{ mb: "15px" }}>
                    <Input
                        type="text"
                        id="report_phone"
                        placeholder="Phone"
                        layout={2}
                        feedbackText={errors?.report_phone?.message}
                        state={
                            hasKey(errors, "report_phone") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "report_phone")}
                        {...register("report_phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                                message: "Invalid phone number",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup sx={{ mt: "30px" }}>
                    <Button fullwidth type="submit">
                        Scan Now
                    </Button>
                </FormGroup>
            </form>
        </StyledWrap>
    );
};

ReportForm.propTypes = {
    heading: PropTypes.shape(HeadingType),
};

export default ReportForm;
