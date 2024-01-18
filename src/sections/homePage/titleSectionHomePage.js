import { Container, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import styled from '@emotion/styled';

const sizeStyle = {
  xl: {title: 'h1', marginTop: '150px', height: '600px', objectFit: 'cover'},
  md: {title: 'h3', marginTop: '100px', height: 'auto', objectFit: 'unset'},
  xs: {title: 'h5', marginTop: '30px', height: 'auto', objectFit: 'unset'},
}

const textTitleColor = blue[100];

const TitleVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
`
const TitleWrapperText = styled((props) => {
  return <div {...props}/>;
})(({ size }) => {
  return{
    marginTop: size,
  }


})
const VideoCustom = styled((props) => {
  const {sVideo, ...otherProps} = props;
  return <video {...otherProps}/>;
})(({sVideo}) => {
  const [height, objectFit] = sVideo;
  return {
    width: '100%',
    height: height,
    objectFit: objectFit,
  }
})


const TitleSectionHomePage = ({sizeBody}) => {


  return (
    <Container
      maxWidth="xl"
      sx={{ boxSizing: 'border-box'}}
    >
      <TitleWrapperText size={sizeStyle[sizeBody]?.marginTop}>
        <Typography
          variant={sizeStyle[sizeBody]?.title}
          sx={{color: textTitleColor, textAlign: 'center'}}
        >
          Привіт мене звати Оксана. Я тренер по сучасним стилям танцю.
          Запрошую до нашої школи сучасних танці.
          {/*Ви зможете навчитись крутим рухам і познайомитесь з криативним людьми.*/}
        </Typography>
      </TitleWrapperText>
      <TitleVideoWrapper>
        <VideoCustom
          sVideo={[sizeStyle[sizeBody]?.height, sizeStyle[sizeBody]?.objectFit]}
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="/imgStatic/titleVideo/titleVideo.mp4"
                  type="video/mp4"
          />
        </VideoCustom>
      </TitleVideoWrapper>
    </Container>
  )
}

export default TitleSectionHomePage;