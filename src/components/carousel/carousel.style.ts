import styled from "@emotion/styled/macro";

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
`;

