/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { SectionTitleType, ItemType } from "@boseo/shared";
import { IconBox03, SectionTitle } from "gatsby-theme-component";
import { StyledSection, StyledBg, StyledContent } from "./style";

const ServiceArea = ({ data }) => (
    <StyledSection className="service-area">
        <StyledBg>
            <StaticImage
                src="../../images/bg/bg-01.png"
                alt="Service Bg"
                layout="fullWidth"
                quality="100"
            />
        </StyledBg>
        <div className="container">
            {data?.section_title && (
                <SectionTitle
                    sx={{
                        mb: ["33px", null, "49px", "68px"],
                        textAlign: "center",
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
                    />
                ))}
            </StyledContent>
        </div>
    </StyledSection>
);

ServiceArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};
export default ServiceArea;
