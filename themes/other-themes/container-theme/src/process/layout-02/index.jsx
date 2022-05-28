/** @jsx jsx */
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { SectionTitleType, ItemType } from "@boseo/helper/types";
import { SectionTitle, IconBox03 } from "gatsby-theme-component";
import { StyledSection, StyledContent } from "./style";

const ProcessArea = ({ data }) => (
    <StyledSection>
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        textAlign: "center",
                        mb: ["35px", null, "55px", "75px"],
                    }}
                    {...data.section_title}
                />
            )}
            <StyledContent>
                {data?.items?.map((item, i) => (
                    <IconBox03
                        key={item.id}
                        title={item?.title}
                        desc={item?.description}
                        image={item?.images?.[0]}
                        number={`0${i + 1}`}
                        sx={{
                            borderBottomWidth: ["1px"],
                            borderRightWidth: ["1px"],
                        }}
                    />
                ))}
            </StyledContent>
        </div>
        <StaticImage
            src="../../images/bg/bg-01.png"
            alt="testimonial"
            layout="fullWidth"
            className="bg"
            quality="100"
        />
    </StyledSection>
);

ProcessArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default ProcessArea;
