import {ICarouselProps} from "./interface";
import {CarouselWrapper, LeftArrow, RightArrow, StyledCarousel} from "./carousel.style";
import {useCallback, useRef} from "react";

export const Carousel = ({
    scrollStep=410,
    carouselElements=[]
}: ICarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = useCallback(() => {
      if (carouselRef.current)
        carouselRef.current.scrollLeft += scrollStep;
    }, [carouselRef, scrollStep]);

    const scrollRight = useCallback(() => {
      if (carouselRef.current)
        carouselRef.current.scrollLeft = Math.max(0, carouselRef.current.scrollLeft - scrollStep);
    }, [carouselRef, scrollStep]);

    return (
        <CarouselWrapper>
          <LeftArrow onClick={scrollRight}/>
          <StyledCarousel ref={carouselRef}>
            {
              carouselElements.map(el => el)
            }
          </StyledCarousel>
          <RightArrow onClick={scrollLeft}/>
        </CarouselWrapper>

    );
}
