/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import {
    BlogMedia,
    BreadCrumb02,
    BlogMeta,
    BlogAuthor,
    BlogComment,
} from "gatsby-theme-component";
import { ImageType, SocialType, BlogFormatType } from "@boseo/helper/types";
import {
    StyledSection,
    StyledBlogWrap,
    StyledBlogContent,
    StyledBlogSidebar,
    StyledTitle,
    StyledBody,
    StyledFooter,
    StyledTag,
    StyledShare,
    StyledSocialLink,
} from "./style";

const BlogDetails = ({ data }) => {
    const pageLink =
        typeof window !== "undefined" ? window.location.href : null;
    const hashtags = data?.tags?.map((tag) => tag.title.replace(/ /g, "_"));

    return (
        <StyledSection>
            <div className="container asf">
                <BlogMedia
                    title={data.title}
                    format={data.format}
                    image={data.image}
                    video_link={data.video_link}
                    gallery_images={data.gallery_images}
                    isDetails
                    sx={{ mb: ["40px", null, "50px", "80px"] }}
                />
                <StyledBlogWrap>
                    <StyledBlogContent>
                        <BreadCrumb02
                            prev={[
                                { text: "home", link: "/" },
                                { text: "blog", link: "/blog" },
                            ]}
                            title={data.title}
                            sx={{ mb: ["30px", null, null, "40px"] }}
                        />
                        {data?.title && <StyledTitle>{data.title}</StyledTitle>}
                        <BlogMeta
                            sx={{ mb: ["30px", null, null, "50px"] }}
                            metaList={[
                                {
                                    text: "By",
                                    title: data?.author?.username,
                                    path: data?.author?.slug,
                                },
                                {
                                    title: data?.date,
                                },
                                {
                                    text: "In",
                                    title: data?.category?.title,
                                    path: data?.category?.slug,
                                },
                            ]}
                        />
                        <StyledBody
                            dangerouslySetInnerHTML={{
                                __html: data?.content || "Blog Content",
                            }}
                        />
                        <StyledFooter>
                            <div className="tags">
                                {data?.tags?.map((tag) => (
                                    <StyledTag key={tag.slug} path={tag.slug}>
                                        {tag.title}
                                    </StyledTag>
                                ))}
                            </div>
                            <StyledShare>
                                <span>Share On: </span>
                                <StyledSocialLink
                                    href={`http://www.facebook.com/sharer.php?u=${pageLink}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share to facebook"
                                    sx={{ color: "facebook" }}
                                >
                                    <i className="fa fa-facebook" />
                                </StyledSocialLink>
                                <StyledSocialLink
                                    href={`http://twitter.com/share?url=${pageLink}&text=${data.title}&hashtags=${hashtags}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share to twitter"
                                    sx={{ color: "twitter" }}
                                >
                                    <i className="fa fa-twitter" />
                                </StyledSocialLink>
                                <StyledSocialLink
                                    href={`http://www.linkedin.com/shareArticle?mini=true&url=${pageLink}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share to linkedin"
                                    sx={{ color: "linkedin" }}
                                >
                                    <i className="fa fa-linkedin" />
                                </StyledSocialLink>
                                <StyledSocialLink
                                    href={`http://pinterest.com/pin/create/button/?url=${pageLink}&description=${data.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share to pinterest"
                                    sx={{ color: "pinterest" }}
                                >
                                    <i className="fa fa-pinterest" />
                                </StyledSocialLink>
                            </StyledShare>
                        </StyledFooter>
                        <BlogComment
                            slug={data.slug}
                            title={data.title}
                            siteUrl={data.siteUrl}
                        />
                    </StyledBlogContent>
                    <StyledBlogSidebar>
                        {data?.author && (
                            <BlogAuthor
                                name={data.author?.username}
                                designation={data.author?.designation}
                                avatar={data.author?.avatar}
                                bio={data.author?.bio}
                                socials={data.author?.socials}
                                path={data.author?.slug}
                            />
                        )}
                    </StyledBlogSidebar>
                </StyledBlogWrap>
            </div>
        </StyledSection>
    );
};

BlogDetails.propTypes = {
    data: PropTypes.shape({
        siteUrl: PropTypes.string,
        title: PropTypes.string,
        slug: PropTypes.string,
        format: BlogFormatType,
        video_link: PropTypes.string,
        gallery_images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        image: PropTypes.shape(ImageType),
        author: PropTypes.shape({
            username: PropTypes.string,
            slug: PropTypes.string,
            designation: PropTypes.string,
            avatar: PropTypes.shape(ImageType),
            bio: PropTypes.string,
            socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        }),
        date: PropTypes.string,
        category: PropTypes.shape({
            title: PropTypes.string,
            slug: PropTypes.string,
        }),
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                slug: PropTypes.string,
            })
        ),
        content: PropTypes.string,
    }),
};

export default BlogDetails;
