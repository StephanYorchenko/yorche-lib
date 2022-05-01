import {ICarouselProps} from "./interface";
import {CarouselWrapper, LeftArrow, RightArrow, StyledCarousel} from "./carousel.style";
import {useCallback, useEffect, useRef, useState} from "react";

// Работает корректно только во всю ширину экрана
export const Carousel = ({
    scrollStep=410,
    carouselElements=[]
}: ICarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [visibleLeftArrow, setVisibleLeftArrow] = useState(false);
    const [visibleRightArrow, setVisibleRightArrow] = useState(true);

    const scrollLeft = useCallback(() => {
      if (carouselRef.current){
        carouselRef.current.scrollLeft += scrollStep;
      }
    }, [carouselRef, scrollStep]);

    const scrollRight = useCallback(() => {
      if (carouselRef.current){
        carouselRef.current.scrollLeft = Math.max(0, carouselRef.current.scrollLeft - scrollStep);
      }
    }, [carouselRef, scrollStep]);

    const updateVisibility = () => {
      if (carouselRef.current){
        setVisibleLeftArrow(carouselRef.current.scrollLeft > 0);
        setVisibleRightArrow(carouselRef.current.scrollLeft + window.screen.width < carouselRef.current.scrollWidth);
      }
    }

    useEffect(() => {
      if (carouselRef.current){
        carouselRef.current.addEventListener("scroll", updateVisibility)
      }
    }, [carouselRef]);

    return (
        <CarouselWrapper>
          <LeftArrow onClick={scrollRight} isVisible={visibleLeftArrow}/>
          <StyledCarousel ref={carouselRef}>
            {
              carouselElements.map(el => el)
            }
          </StyledCarousel>
          <RightArrow onClick={scrollLeft} isVisible={visibleRightArrow}/>
        </CarouselWrapper>

    );
}
