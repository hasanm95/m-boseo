/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ItemType } from "@boseo/helper/types";
import { Blog04 } from "gatsby-theme-component";
import { StyledSection, StyledWrap } from "./style";

const BlogArea = ({ data }) => (
    <StyledSection>
        <div className="container">
            {data?.items && (
                <StyledWrap>
                    <h3>
                        Search for: <span>{data?.query}</span>
                    </h3>
                    <h5>Posts Found: {data.items.length}</h5>
                </StyledWrap>
            )}
            {data?.items?.length === 0 && (
                <StyledWrap>
                    <h2>Nothing Found</h2>
                </StyledWrap>
            )}
            <div className="row gx-45">
                {data?.items?.map((post) => (
                    <div
                        key={post.id}
                        className="col-lg-4 col-md-6"
                        sx={{ mb: ["47px", null, "52px"] }}
                    >
                        <Blog04
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            slug={post.slug}
                            image={post.image}
                            format={post.format}
                            video_link={post.video_link}
                            gallery_images={post.gallery_images}
                        />
                    </div>
                ))}
            </div>
        </div>
    </StyledSection>
);

BlogArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
        query: PropTypes.string,
    }),
};

export default BlogArea;
