/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { TeamMember } from "gatsby-theme-component";
import { ItemType } from "@boseo/helper/types";
import { StyledSection } from "./style";

const TeamArea = ({ data }) => (
    <StyledSection className="team-area">
        <div className="container">
            {data?.items && (
                <div className="row gx-md-40">
                    {data.items.map((item) => (
                        <div
                            className="col-sm-6 col-lg-4"
                            key={item.id}
                            sx={{ mb: ["30px", null, "40px"] }}
                        >
                            <TeamMember
                                title={item.title}
                                designation={item.designation}
                                description={item.description}
                                image={item.images?.[0]}
                                socials={item.socials}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    </StyledSection>
);

TeamArea.propTypes = {
    data: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

export default TeamArea;
