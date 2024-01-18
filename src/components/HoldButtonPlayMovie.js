import { OneFingerDoubleTapSvg } from '../iconSvgComponents/svgIconComponents';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';


const onHoldButtonAction = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 400%;
  }
`
const flasher = keyframes`
  0% { box-shadow: 0 0 10px 0px mediumpurple; }
  40% { box-shadow: 0 0 10px 10px rebeccapurple; }
  60% { box-shadow: 0 0 10px 10px rebeccapurple; }
  80% { box-shadow: 0 0 20px 10px mediumpurple; }
  100% { box-shadow: 0 0 30px -10px mediumpurple; }
`

const HolderButton = styled.button`
   position: absolute;
   bottom: 30px;
   width: 140px;
   height: 50px;
   border-radius: 20px;
   cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  box-sizing: border-box;
  background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
  background-size: 400%;
  animation: ${flasher} 4000ms infinite;
  z-index: 2;
      &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        bottom: -5px;
        right: -5px;
        //z-index: 3;
        background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
        background-size: 400%;
        border-radius: 40px;
        opacity: 0;
        transition: 1s;
      }
      &:active {
        animation: ${onHoldButtonAction} 8s linear infinite;
      }
      &:active:before {
        filter: blur(20px);
        opacity: 1;
        animation: ${onHoldButtonAction} 8s linear infinite;
      }
`

// const HolderButton = styled((props) => {
//   const {...other} = props;
//   return <button {...other}/>
// })(() => {
//   const style = {
//     position: 'absolute',
//     bottom: '30px',
//     width: '150px',
//     height: '50px',
//     borderRadius: '20px',
//     cursor: 'pointer',
//
//   }

//   return style;
// })
export const HoldButtonPlayMovie = ({checkIsHold: {setIsHoldButton, setWhatCategoryIsHold, id}}) => {
  return (
    <HolderButton
        onTouchStart={() => {
        setIsHoldButton(true);
        setWhatCategoryIsHold(id);
        }}
        onTouchEnd={() => {
          setIsHoldButton(false);
          setWhatCategoryIsHold(null);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          return false;
        }}
    >
      <OneFingerDoubleTapSvg/>
    </HolderButton>
  )
}