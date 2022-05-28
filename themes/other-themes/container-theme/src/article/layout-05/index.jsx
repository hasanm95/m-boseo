/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ItemType } from "@boseo/helper/types";
import { Blog04, Pagination } from "gatsby-theme-component";
import { StyledSection } from "./style";

const BlogArea = ({ data }) => (
    <StyledSection>
        <div className="container">
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
            {data?.pagination && data.pagination?.numberOfPages > 1 && (
                <div>
                    <Pagination {...data.pagination} />
                </div>
            )}
        </div>
    </StyledSection>
);

BlogArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
        pagination: PropTypes.shape({
            rootPage: PropTypes.string,
            numberOfPages: PropTypes.number,
            currentPage: PropTypes.number,
        }),
    }),
};

export default BlogArea;
