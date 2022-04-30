import styled from "@emotion/styled/macro";
import {ReactComponent as Arrow} from "./arrow.svg";

export const LeftArrow = styled(Arrow)`
  position: absolute;
  height: 45px;
  width: 15px !important;
  
  z-index: 9999;
  
  top: 50%;
  transform: translate(0, -50%);
`;

export const RightArrow = styled(Arrow)`
  position: absolute;
  height: 45px;
  width: 15px !important;
  
  z-index: 9999;
  
  top: 50%;
  right: 0;
  transform: translate(0, -50%) rotate(180deg);
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
`;

export const StyledCarousel = styled.div`
    top: 0;
    border-color: #000;
    border-width: 10px;
    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row nowrap;
    align-content: flex-start;
    gap: 10px;
  
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */ 
    &::-webkit-scrollbar {
      display: none;  /* Safari and Chrome */
    }

    width: 100%;
    height: max-content;
    scroll-behavior: smooth;
`;

