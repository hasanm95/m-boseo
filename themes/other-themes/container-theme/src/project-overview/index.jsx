/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Image, Social, SocialLink, HRLine } from "gatsby-theme-ui";
import { ImageType, TextType } from "@boseo/helper/types";
import {
    StyledSection,
    StyledThumb,
    StyledHeading,
    StyledContent,
    StyledMeta,
} from "./style";

//
//

const ProjectOverview = ({ data }) => {
    const pageLink =
        typeof window !== "undefined" ? window.location.href : null;
    const hashtags = data?.client.replace(/ /g, "_");

    return (
        <StyledSection className="project-overview">
            <div className="container">
                {data?.image?.src && (
                    <StyledThumb className="thumb">
                        <Image
                            src={data.image.src}
                            alt={data.image?.alt || data?.title}
                        />
                    </StyledThumb>
                )}
                <div className="row" sx={{ mb: "46px" }}>
                    <div className="col-md-8">
                        <StyledHeading>Project Overview</StyledHeading>
                    </div>
                    <div
                        className="col-md-4"
                        sx={{ textAlign: ["left", null, "right"] }}
                    >
                        <Social
                            shape="circle"
                            variant="contained"
                            hover={false}
                            space={15}
                        >
                            <SocialLink
                                href={`http://www.facebook.com/sharer.php?u=${pageLink}`}
                                label="Share to facebook"
                                bg="facebook"
                            >
                                <i className="fa fa-facebook" />
                            </SocialLink>
                            <SocialLink
                                href={`http://twitter.com/share?url=${pageLink}&text=${data.title}&hashtags=${hashtags}`}
                                label="Share to twitter"
                                bg="twitter"
                            >
                                <i className="fa fa-twitter" />
                            </SocialLink>
                            <SocialLink
                                href={`http://www.linkedin.com/shareArticle?mini=true&url=${pageLink}`}
                                label="Share to linkedin"
                                bg="linkedin"
                            >
                                <i className="fa fa-linkedin" />
                            </SocialLink>
                            <SocialLink
                                href={`http://pinterest.com/pin/create/button/?url=${pageLink}&description=${data.title}`}
                                label="Share to pinterest"
                                bg="pinterest"
                            >
                                <i className="fa fa-pinterest" />
                            </SocialLink>
                        </Social>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-7"
                        sx={{ mb: ["30px", null, null, 0] }}
                    >
                        {data?.overview && (
                            <StyledContent>
                                {data.overview?.map((text) => text.content)}
                            </StyledContent>
                        )}
                    </div>
                    <div
                        className="col-lg-3"
                        sx={{ mb: ["15px", null, null, 0] }}
                    >
                        {data?.type && (
                            <StyledMeta>
                                <span>Project Type:</span> {data.type}
                            </StyledMeta>
                        )}
                        {data?.client && (
                            <StyledMeta>
                                <span>Client:</span> {data.client}
                            </StyledMeta>
                        )}
                        {data?.client && (
                            <StyledMeta>
                                <span>Website:</span> {data.website}
                            </StyledMeta>
                        )}
                    </div>
                    <div className="col-lg-2">
                        {data?.budget && (
                            <StyledMeta>
                                <span>Budget:</span> {data.budget}
                            </StyledMeta>
                        )}
                        {data?.location && (
                            <StyledMeta>
                                <span>Location:</span> {data.location}
                            </StyledMeta>
                        )}
                    </div>
                </div>
                <HRLine sx={{ mt: ["56px", null, "76px", "96px", "116px"] }} />
            </div>
        </StyledSection>
    );
};

ProjectOverview.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.shape(ImageType),
        title: PropTypes.string,
        overview: PropTypes.arrayOf(PropTypes.shape(TextType)),
        type: PropTypes.string,
        client: PropTypes.string,
        website: PropTypes.string,
        budget: PropTypes.string,
        location: PropTypes.string,
    }),
};

export default ProjectOverview;
