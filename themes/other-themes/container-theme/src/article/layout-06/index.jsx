/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { ItemType } from "@boseo/helper/types";
import { Blog05, Pagination } from "gatsby-theme-component";
import { StyledSection } from "./style";

const ArticleArea = ({ data }) => (
    <StyledSection>
        <div className="container">
            {data?.items?.map((post) => (
                <Blog05
                    sx={{ mb: "50px" }}
                    key={post.id}
                    title={post.title}
                    slug={post.slug}
                    excerpt={post.excerpt}
                    author={post.author}
                    date={post.date}
                    image={post.image}
                    format={post.format}
                    video_link={post.video_link}
                    gallery_images={post.gallery_images}
                />
            ))}
            {data?.pagination && data.pagination?.numberOfPages > 1 && (
                <div>
                    <Pagination {...data.pagination} />
                </div>
            )}
        </div>
    </StyledSection>
);

ArticleArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)).isRequired,
        pagination: PropTypes.shape({
            rootPage: PropTypes.string,
            numberOfPages: PropTypes.number,
            currentPage: PropTypes.number,
        }),
    }),
};

export default ArticleArea;
