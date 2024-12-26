import React, { useState } from 'react';

import moon from "../Images/moon.png"
import curvedLine from "../Images/curvedLine.png"
import indiaImage from "../Images/indiaImage.png"
import uaeImage from "../Images/uaeImage.png"
import usaImage from "../Images/usaImage.png"
import graphic1 from "../Images/graphic1.png"
import graphic2 from "../Images/graphic2.png"
import graphic3 from "../Images/graphic3.png"
import star from "../Images/Star.png"
import { Typography, Box, styled, Button } from "@mui/material"
const MainWrapper = styled(Box)({
"& .mainDiv": {
    backgroundColor: "#3A3859",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "29px",

},
"& .contentWrap": {
    width: "796px",
    textAlign: "left",
    position: "relative" 
},
"& .textTypo": {
    fontFamily: "Poppins",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "72px",
    color: "#FFFFFF"
},
"& .imgstyle": {
    position: "absolute",
    top: "65px",
    width: "275px"
},
"& .imageText": {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    color: "#FFFFFF"
},
"& .imgBox": {
    display: "flex",
    gap: "20px"
},
"& .longText": {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    color: "#FFFFFF",
    width: "562px"
},
"& .btnStyle": {
    maxWidth: "197px",
    width:"100%",
    height: "47px",
    borderRadius: "5px",
    border: "1px solid #FFFFFF",
    backgroundColor: "#A5327E",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "27px",
    textTransform: "capitalize"
},
"& .graphic3IMage": {
    width:"313px",
    height:"234px",
    mixBlendMode: "color-dodge",
    position:"relative",
    left:"-20px"
},
"& .graphic2Image": {
    width: "91.1%",
    mixBlendMode: "color-dodge",
    position: "absolute",
    right: "0px",
    top: "190px",
},
"& .grapic1Image": {
    mixBlendMode: "color-dodge",
    position: "absolute",
    right: "100px",
    top: "287px",
    maxWidth: "717px",
    width:"100%",
    height: "665px"
},
"& .qualityBox": {
    padding: "74px 41px 92px 39px",
    backgroundColor: "#FBFBFB",
    boxShadow: "0px 4px 4px 0px #00000040",
    display:"flex",
    "@media screen and (max-width: 1060px)": {
        flexDirection: "column",
        gap: "20px"
    },
},
"& .internalBox": {
    width:"60%",
    "@media screen and (max-width: 1060px)": {
        width:"100%"
    },
},
"& .sinceTypo": {
    fontFamily: "Inter",
    fontSize: "45px",
    fontWeight: 700,
    lineHeight: "61.44px",
    background: "linear-gradient(90deg, #57007B, #F76680)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
},
"& .qualityText": {
    fontFamily: "Poppins",
    fontSize: "48px",
    fontWeight: 600,
    lineHeight: "90px",
    color: "#000000"
},
"& .leaderText": {
    fontFamily: "Poppins",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "40px",
    color: "#000000"
},
"& .cardTitle": {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "27.3px",
    background: "linear-gradient(90deg, #57007B, #F76680)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
},
"& .numberText": {
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: "32.77px",
    background: "linear-gradient(90deg, #57007B, #F76680)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
},
"& .contentText": {
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "20px",
    color: "#000000",
    width:"100%",
    maxWidth:"196px"
},
"& .cardStyle": {
    maxWidth: "254px",
    height: "271px", 
    borderRadius: "10px", 
    backgroundColor:"#FFFFFF",
    border: "1px solid #FFFFFF",
    boxShadow: "0px 4px 14px 4px #170E4D12",
    padding: "20px",
    textAlign: "center",
    "@media screen and (max-width: 485px)": {
        height: "auto",
    },
},
"& .cardWrapper": {
   width:"40%",
   display: "flex",
   justifyContent: "center",
   gap: "68px",
   "@media screen and (max-width: 1060px)": {
    width:"100%"
},
}
})

const MainPage = () => {
    const images = [
        {img: indiaImage, name: "HQ India"},
        {img: uaeImage, name: "UAE"},
        {img: usaImage, name: "United States"}

    ]
    return <MainWrapper>
        <Box className="mainDiv">
            <img src={moon} style={{width:"185px", height:"152px", mixBlendMode: "color-dodge" }} />
            <Box className="contentWrap">
                <Typography className='textTypo'>Cutting-Edge Mobile App & Web Development Solutions</Typography>
                <img src={curvedLine} className='imgstyle' />
            </Box>
            <Box className="imgBox">
                {
                    images.map((item) =>
                        <Box style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                            <img src= {item.img} />
                            <Typography className='imageText'>{item.name}</Typography>
                        </Box>
                     )
                }
            </Box>
            <Typography className='longText'>In accordance with your company's needs, Maxtra Technologies offers tailored app and web development solutions.</Typography>
            <Button className='btnStyle'>Contact Us</Button>
            <img src={graphic3} className='graphic3IMage'/>
            <img src={graphic2} className='graphic2Image'/>
            <img src={graphic1} className='grapic1Image' />
        </Box>
        <Box style={{ width: "100%" }}>
            <Box className="qualityBox">
                <Box className="internalBox">
                    <Typography className='sinceTypo'>S I N C E  2 0 0 9</Typography>
                    <Typography className='qualityText'>Quality Technology & People</Typography>
                    <Typography>As an industry leader, we take it as our responsibility to help the businesses in acquiring their deserved place in the market. Maxtra Technologies strongly believes in building something that turns small startups into a globally leading organizations.
                    </Typography>
                </Box>
                <Box className="cardWrapper">
                <Box className="cardStyle">
                    <Typography className='cardTitle'>Success Project</Typography>
                    <Typography className='numberText'>9269+</Typography>
                    <Typography className='contentText'>Maximize the success of your project with Maxtra, the dependable partner offering cutting-edge solutions, superior quality, and unparalleled client satisfaction.</Typography>
                    <Box>{Array(5).fill(null).map((_, index) => <img   style={{paddingTop: "12px"}} src={star} />)}</Box>
                </Box>

                <Box className="cardStyle">
                    <Typography className='cardTitle'>Success Project</Typography>
                    <Typography className='numberText'>9269+</Typography>
                    <Typography className='contentText'>Maximize the success of your project with Maxtra, the dependable partner offering cutting-edge solutions, superior quality, and unparalleled client satisfaction.</Typography>
                    <Box>{Array(5).fill(null).map((_, index) => <img   style={{paddingTop: "12px"}} src={star} />)}</Box>
                </Box>
                </Box>
            </Box>
            </Box>
    </MainWrapper>
}
export default MainPage