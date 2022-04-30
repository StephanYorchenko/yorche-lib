import styled from "@emotion/styled/macro";


export const StyledCard = styled.div`
    height: 200px !important;
    width: 400px !important;
    min-width: 400px !important;
    border-radius: 10px;
    background-color: white;
    position: relative;
    overflow: hidden;
    display: inline-block;
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

export const StyledCard = styled.div`
      height: 200px;
      width: 400px;
      border-radius: 10px;
      background-color: white;
      position: relative;
      overflow: hidden;
`;

export const StyledPic = styled.div<{backgroundUrl: string}>`
    background-image: url(${props => props.backgroundUrl});
    height: 200px;
    width: 400px;
    filter: blur(2px) grayscale(0.3);
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
      font-family: anonymous-pro,monospace;
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
// .card4{
//     height: 200px;
//     width: 400px;
//     border-radius: 10px;
//     background-color: white;
//     position: relative;
//     overflow: hidden;
//
// .title-container{
//         width: 190px;
//         height: 200px;
//         overflow: hidden;
//         position: absolute;
//         left: 10px;
//         text-overflow: ellipsis;
//     }
//
//     h2{
//         z-index: 99;
//         font-family: anonymous-pro,monospace;
//         position: absolute;
//         bottom: 0px;
//         font-size: 30px;
//         font-weight: 700;
//         color: #fff;
//         pointer-events:none;
//         text-align: left;
//         text-shadow: -1px 0 black;
//     }
//
// .fa-arrow-right {
//         z-index: 100;
//         position: absolute;
//         right: 35px;
//         bottom: 25px;
//         font-size: 40px;
//         cursor: pointer;
//         color: white;
//         opacity: 0;
//         transition-duration: .1s;
//         transition-delay: 0;
//     }
//
//     button{
//         height: 30px;
//         width: 30px;
//         border-radius: 50%;
//         right: 14px;
//         bottom: 14px;
//         position: absolute;
//         background-color: #DA4D1D;
//         border: none;
//         cursor: pointer;
//         outline:none;
//         transition: all 0.3s ease;
//     }
//
// &:hover button {
//         height: 495px;
//         width: 435px;
//         right: -213px;
//         bottom: -275px;
//         cursor: pointer;
//     }
//
// &:hover .pic {
//         filter: blur(0);
//     }
//
// .description {
//         z-index: 99;
//         position: absolute;
//         top: 40px;
//         left: 250px;
//         color: white;
//         opacity: 0.7;
//         font-size: 12px;
//         letter-spacing: 1px;
//         line-height: 2em;
//         -webkit-transition: all 0.2s ease;
//         transition: all 0.2s ease;
//         font-family: anonymous-pro,monospace;
//         opacity: 0;
//         cursor: pointer;
//     }
//
//
// &:hover .fa-arrow-right{
//         opacity: 1;
//         transition-duration: .3s;
//         transition-delay: .1s;
//     }
//
// .social {
//         position: absolute;
//         left: 60px;
//         top: 0;
//         display: -webkit-box;
//         display: -ms-flexbox;
//         display: flex;
//         -ms-flex-pack: distribute;
//         justify-content: space-around;
//         -webkit-box-align: center;
//         -ms-flex-align: center;
//         align-items: center;
//         width: 180px;
//         height: 64px;
//         border-radius: 80px;
//         color: white;
//     }
//
// .social .socialIcon:nth-of-type(1) {
//         -webkit-transition-delay: 0.4s;
//         transition-delay: 0.4s;
//     }
//
// .social .socialIcon:nth-of-type(2) {
//         -webkit-transition-delay: 0.3s;
//         transition-delay: 0.3s;
//     }
//
// .social .socialIcon:nth-of-type(3) {
//         -webkit-transition-delay: 0.2s;
//         transition-delay: 0.2s;
//     }
//
// .socialIcon {
//         opacity: 0;
//         font-size: 18px;
//         color: #fff;
//         will-change: transform;
//         transform: scale(0.1);
//         transition: all 0.2s ease;
//         cursor: pointer;
//     }
//
// &:hover .socialIcon {
//         opacity: 1;
//         -webkit-transform: scale(1);
//         transform: scale(1);
//     }
//
// .pic{
//         background-image: var(--pic);
//         height: 200px;
//         width: 400px;
//         filter: blur(2px) grayscale(0.3);
//     }
// }
