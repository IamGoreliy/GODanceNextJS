import { Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { HoldButtonPlayMovie } from '../../components/HoldButtonPlayMovie';
import styled from '@emotion/styled';
import { positions } from '@mui/system';

const ThumbCard = styled((props) => {
  const {windowSize, ...other} = props;
  if (windowSize === 'xs') {
    return <button {...other}/>
  }
  return <div {...other}/>
})(({ windowSize }) => {
  const style = {};
  if (windowSize === 'xs') {
    style.width = '152px';
    style.height = '305px';
    style.position = 'relative';
    style.borderRadius = '20px';
    style.overflow = 'hidden';
    style.border = '1px solid black';
  } else {
    style.position = 'relative';
  }
  return style;
});

const CardTitle = styled((props) => {
  const {sizingPage, ...other} = props;
  return <h3 {...other}/>
})(({sizingPage}) => {
  const styleCard = {
    zIndex: 2,
  }
  if (sizingPage === 'xs') {
    styleCard.color = 'white';
    styleCard.position = 'relative';
  } else {
    styleCard.display = 'flex';
    styleCard.justifyContent = 'center';
    styleCard.alignItems = 'center'
    styleCard.color = 'black';
    styleCard.position = 'absolute';
    styleCard.bottom = 0;
    styleCard.left = 0;
    styleCard.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    styleCard.margin = 0;
    styleCard.width = '100%';
    styleCard.height = '60px'

  }
  return styleCard;
});

const Video = styled((props) => {
  return <video {...props}/>
})(() => {
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    zIndex: 2,
  }
});

const RenderPopularDestination = ({data, supportingData}) => {
  const {
    widthCard,
    sizingForStyled,
    isHoldButton,
    whatCategoryIsHold,
    imgWidth,
    setIsHoldButton,
    setWhatCategoryIsHold
  } = supportingData;
  return (
    <Grid
      container
      spacing={2}
    >
      {data.map(ele => {
          const {id, link, title, imgUrl, movieUrl} = ele;
          return (
            <Grid
              ref={widthCard}
              key={id}
              item
              xs={6}
              sm={6}
              lg={6}
              sx={{display: 'flex', justifyContent: 'center', position: 'relative'}}
            >
              <Link href={`${link}`}>
                <ThumbCard
                  windowSize={sizingForStyled}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>

                  <CardTitle
                    sizingPage={sizingForStyled}
                  >
                    {title}
                  </CardTitle>
                  <Image
                    src={imgUrl}
                    style={{
                      display: 'block',
                      width: sizingForStyled === 'xs' ? '100%' : imgWidth,
                      height: sizingForStyled === 'xs' ? '100%' : 'auto',
                      objectFit: sizingForStyled === 'xs' ? 'cover' : '',
                      position: sizingForStyled === 'xs' ? 'absolute' : 'relative',
                      top: sizingForStyled === 'xs' ? 0 : '',
                      left: sizingForStyled === 'xs' ? 0 : '',
                      zIndex: 1,
                    }}
                    priority={true}
                    alt=''
                  />
                  {isHoldButton && whatCategoryIsHold === id &&
                    <Video
                      autoPlay
                      muted
                      playsInline
                      loop
                    >
                      <source
                        src={movieUrl}
                        type='video/webm'
                      />
                    </Video>
                  }
                </ThumbCard>
              </Link>
              {sizingForStyled === 'xs' && <HoldButtonPlayMovie checkIsHold={{setIsHoldButton, setWhatCategoryIsHold, id}}/>}
            </Grid>
          )
      })}
    </Grid>
  )
}

export default RenderPopularDestination;