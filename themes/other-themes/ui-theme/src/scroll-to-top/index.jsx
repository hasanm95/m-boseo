import { useScrollTop } from "@boseo/helper/hooks";
import { ScrollTopButton } from "./style";

const ScrollToTop = () => {
    const { stick, onClickHandler } = useScrollTop();
    if (stick) {
        return (
            <ScrollTopButton type="button" onClick={onClickHandler} isStick>
                <i className="lnr lnr-arrow-up" />
            </ScrollTopButton>
        );
    }
    return null;
};

export default ScrollToTop;
