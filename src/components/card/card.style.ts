import styled from "@emotion/styled/macro";


export const StyledCard = styled.div`
    height: 200px;
    width: 400px;
    min-width: 400px;
    border-radius: 10px;
    background-color: white;
    position: relative;
    overflow: hidden;
    display: inline-block;
    transition: all 0.2s ease;
    z-index: 0;
    &:hover{
      box-shadow: 0 15px 15px -10px gray;
      z-index: 97;
      transform: scale(1.15);
      transition: all 0.2s ease;
      transition-duration: .6s;
      
      //transition: all 0.3s ease;
      //height: 300px;
      //width: 450px;
      //z-index: 1;
    }
`;

export const CardTitle = styled.h2`
    z-index: 98;
    position: absolute;
    left: 10px;
    font-family: 'Montserrat', sans-serif;
    bottom: 0;
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    pointer-events: none;
    text-align: left;
    overflow-wrap: break-word;
    word-wrap: break-word;
    text-overflow: clip;
    ${StyledCard}:hover &{
        opacity: 0;
        transition-duration: .3s;
        transition-delay: .09s;
    }
`;

export const TitleContainer = styled.div`
    bottom: 0;
    position: absolute;
    width: 180px;
    height: 160px;
`;

export const StyledPic = styled.div<{backgroundUrl: string}>`
    background-image: url(${props => props.backgroundUrl});
    height: 200px;
    width: 400px;
    filter: blur(3px) grayscale(0.4);
    ${StyledCard}:hover &{
      filter: blur(0);
    }
`;

export const StyledDescription = styled.div`
      z-index: 106;
      position: absolute;
      top: 40px;
      left: 250px;
      width: 150px;
      color: white;
      height: 50px;
      font-size: 15px;
      letter-spacing: 1px;
      line-height: 2em;
      -webkit-transition: all 0.2s ease;
      transition: all 0.3s ease;
      font-family: Montserrat,sans-serif;
      opacity: 0;
      cursor: pointer;
  
      ${StyledCard}:hover &{
        opacity: 1;
      }
`;
export const StyledButton = styled.button`
      height: 30px;
      width: 30px;
      border-radius: 50%;
      right: 14px;
      bottom: 14px;
      position: absolute;
      background-color: #FF9900;
      border: none;
      cursor: pointer;
      outline: none;
      transition: all 0.3s ease;
      z-index: 105;
      ${StyledCard}:hover &{
            height: 495px;
            width: 435px;
            right: -213px;
            bottom: -275px;
            cursor: pointer;
      }
`;
export const StyledArrow = styled.div`
      z-index: 106;
      position: absolute;
      right: 10px;
      bottom: 5px;
      font-size: 40px;
      cursor: pointer;
      color: white;
      opacity: 0;
      transition-duration: .1s;
  
      ${StyledCard}:hover &{
            opacity: 1;
            transition-duration: .3s;
            transition-delay: .1s;
      }
`;
