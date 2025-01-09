import React from "react";
import Slider from "react-slick";
// Import the necessary CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, styled, Typography } from "@mui/material";


const Wrapper = styled(Box)({
    width: "80% !important",
    height: "287px",
    boxShadow: "0px 4px 30px 0px #0000000D",
    padding:"20px",
    borderRadius: "7px",
    border: "1px solid #FAFAFA",
    "&:hover": {
        border: "1px solid #F76680",
      },
    "@media screen and (max-width: 768px)": {
        width: "59% !important"
    },
    "& .roundBox": {
        width: "58px",
        height: "58px",
        borderRadius:"50%",
        border: "1px solid #F76680"
    },
    "& .titleTypo": {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "27.3px",
    color: "#2D3748"
    },
    "& .contentTypo": {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22.68px",
    color: "#718096"
    },
})
const MainWrapper = styled(Box)({
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "26.23px",
    paddingBottom: "72.66px",

    "& .servicesText": {
    fontFamily: "Inter",
    fontSize: "35px",
    fontWeight: 700,
    lineHeight: "55px",
    color: "#1A202C",
    }
})

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container" style={{ padding: "20px", paddingBottom: "100px", backgroundColor: "#F9F9FF" }}>
        <MainWrapper >
        <Typography  className="servicesText" >Services we offer</Typography>
        </MainWrapper>
      <Slider {...settings}>
            {Array.from({ length: 5 }).map((_, index) => (
            <Wrapper>
                <Box style={{ width:"100%", display:"flex", flexDirection:"column", gap:"20px"}}>
                <Box className="roundBox">
             <h3 style={{ textAlign: "center" }}>{index + 1}</h3>
                </Box>
                <Typography className="titleTypo">Mobile App Development</Typography>
                <Typography className="contentTypo">A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</Typography>
                </Box>

            </Wrapper>
      ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
