import styled from "@emotion/styled/macro";

export const StyledSearchBar = styled.div`
      display: flex;
      gap: 4.15px;
      margin-top: 10px;
      width: 100%;   
      border-bottom: 1px solid #C4C4C4;
      padding: 7px 0;
      >.form__field {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        width: 100%;
        border: 0;
        outline: 0;
        color: #000;
        transition: border-color 0.2s;
      }
  
      .form__field:hover &{
        border-color: red !important;
      }
`;
      //.spinner {
      //  width: 10px;
      //  height: 10px;
      //  border-radius: 50%;
      //  margin: auto;
      //  position: absolute;
      //  right: 15px;
      //  top:0;
      //  bottom:0;
      //  border: 1px solid;
      //  animation: rotate  1.3s linear 0s infinite, color-bubble 3s linear 0s infinite;
      //  &:after {
      //        content: '';
      //        position: absolute;
      //        width: 4px;
      //        height: 4px;
      //        background: #fff;
      //        border-radius: 100%;
      //        animation: color-change 3s linear 0s infinite;
      //        left: -2px;
      //        top: 5px;
      //  }
      //  @keyframes color-change {
      //        0%{background: #009DDC;}
      //        33%{background: #50B949;}
      //        66%{background: #EE2D24;}
      //        100%{background: #FEB825;}
      //  }
      //  @keyframes rotate {
      //        from {transform: rotate(0deg);}
      //        to {transform: rotate(360deg);}
      //  }
      //  @keyframes color-bubble {
      //        0%{color: #009DDC;}
      //        33%{color: #50B949;}
      //        66%{color: #EE2D24;}
      //        100%{color: #FEB825;}
      //  }
      //}
//