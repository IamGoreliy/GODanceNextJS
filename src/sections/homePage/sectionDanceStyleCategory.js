import styled from '@emotion/styled';
import { useLayoutEffect, useRef, useState } from 'react';
import { danceStyle } from '../../dataTemplate/categoryDataTemplate';
import { Container } from '@mui/material';
import {sizingGuide} from '../../utils/sizingGuide';
import RenderPopularDestination from '../../layouts/homePage/RenderPopularDestination';

const styleForSection = {
  xl: {marginTop: 0.6, titleFontSize: '48px'},
  lg: {marginTop: 1.5, titleFontSize: '40px'},
  md: {marginTop: 1.1, titleFontSize: '26px'},
  sm: {marginTop: 0.8, titleFontSize: '24px'},
  xs: {marginTop: 0.1, titleFontSize: '20px'},
}

const Title = styled((props) => {
  return <h2 {...props}/>
})((props) => {
  const {fontSize, fontWeight, color} = props;
  return {
    textAlign: 'center',
    fontSize: fontSize,
    fontWeight: fontWeight,
    color: color,
  }
});



const SectionDanceStyleCategory = () => {
  const [isHoldButton, setIsHoldButton] = useState(false);
  const [whatCategoryIsHold, setWhatCategoryIsHold] = useState(null);
  const [sizingForStyled, setSizingForStyled] = useState('');
  const [marginTop, setMarginTop] = useState('');
  const [imgWidth, setImgWidth] = useState(0);
  const widthCard = useRef();

  useLayoutEffect(() => {
    const [sizingRes, windowSize] = sizingGuide();
    const imgHeight = (widthCard.current.offsetWidth / 1.1276171486) / 1.6720010669;
    const marginSize = imgHeight * styleForSection[sizingRes].marginTop;
    const imgWidthRes = windowSize > 700 ? (windowSize / 2 - 80) : (windowSize / 2 - 40);
    setSizingForStyled(sizingRes);
    setImgWidth(imgWidthRes);
    setMarginTop(`${marginSize}px`);
  }, []);


  return (
    <>
      <Container
        maxWidth="xl"
        sx={{marginTop: marginTop}}
      >
          <div>
            <Title
              fontSize={styleForSection[sizingForStyled]?.titleFontSize}
              fontWeight={700}
              color='blueviolet'
            >
              Популярные направлени
            </Title>
            <RenderPopularDestination
              data={danceStyle}
              supportingData={{
                widthCard,
                sizingForStyled,
                isHoldButton,
                whatCategoryIsHold,
                imgWidth,
                setIsHoldButton,
                setWhatCategoryIsHold
            }}
            />
          </div>
      </Container>
    </>
  )
}

export default SectionDanceStyleCategory;
