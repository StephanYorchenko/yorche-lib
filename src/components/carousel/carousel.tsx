import {ICarouselProps} from "./interface";
import {StyledCarousel} from "./carousel.style";

export const Carousel = ({
    carouselElements = []
}: ICarouselProps) => {
    return (
        <StyledCarousel>
            {
                carouselElements.map(el => el)
            }
        </StyledCarousel>
    );
}