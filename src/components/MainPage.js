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
import Arrow from '../Images/Arrow.png'
import CircleLine from '../Images/circleLine.png'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'
import { Typography, Box, styled, Button } from "@mui/material"
import CenterMode from './Slider';
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
        position: "relative",
        "@media screen and (max-width: 768px)": {
            width: "auto"
        },
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
        width: "562px",
        "@media screen and (max-width: 768px)": {
            width: "auto"
        },  
    },
    "& .btnStyle": {
        maxWidth: "197px",
        width: "100%",
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
        width: "313px",
        height: "234px",
        mixBlendMode: "color-dodge",
        position: "relative",
        left: "-20px"
    },
    "& .grapic1Image": {
        mixBlendMode: "color-dodge",
        position: "absolute",
        right: "100px",
        top: "287px",
        maxWidth: "717px",
        width: "100%",
        height: "665px"
    },
    "& .qualityBox": {
        padding: "74px 41px 92px 39px",
        backgroundColor: "#FBFBFB",
        display: "flex",
        "@media screen and (max-width: 1060px)": {
            flexDirection: "column",
            gap: "20px"
        },
    },
    "& .internalBox": {
        width: "60%",
        "@media screen and (max-width: 1060px)": {
            width: "100%"
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
        width: "100%",
        maxWidth: "196px"
    },
    "& .cardStyle": {
        maxWidth: "254px",
        // height: "271px",
        borderRadius: "10px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #FFFFFF",
        boxShadow: "0px 4px 14px 4px #170E4D12",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "@media screen and (max-width: 485px)": {
            height: "auto",
        },
    },
    "& .cardWrapper": {
        width: "40%",
        display: "flex",
        justifyContent: "center",
        gap: "68px",
        "@media screen and (max-width: 1060px)": {
            width: "100%"
        },
    },
    "& .processText": {
        fontFamily: "Montserrat",
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: "48.76px",
        color: "#000000",
        width: "43%"
    },
    "& .spanText": {
        fontFamily: "Inter",
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: "54.61px",
        background: "linear-gradient(90deg, #57007B, #F76680)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent"
    },
    "& .weDoBtn": {
        maxWidth: "237px",
        width: "100%",
        height: "64px",
        borderRadius: "5px",
        backgroundColor: "#A5327E",
        border: "1px solid #FFFFFF",
        color: "#FFFFFF",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "27px",
        textTransform: "capitalize"
    },
    "& .globalText": {
        fontFamily: "Poppins",
        fontSize: "38px",
        fontWeight: 500,
        lineHeight: "57px",
        color: "#000000",
        width:"43%",
        textAlign: "center"
    },
    "& .hireBox": {
        maxWidth: "1230px",
        width: "100%",
        height: "285px",
        borderRadius: "20px",
        backgroundColor: "#F1F1F5",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        "@media screen and (max-width: 1433px)": {
         width: "80%",
        },
        "@media screen and (max-width: 768px)": {
            height: "auto",
            width: "100%",
        },
    },
    "& .hireText": {
    fontFamily: "Inter",
    fontSize: "35px",
    fontWeight: 700,
    lineHeight: "55px",
    color: "#29272E",
    width: "40%"
    },
    "& .designText": {
    fontFamily: "Inter",
    fontSize: "35px",
    fontWeight: 400,
    lineHeight: "55px",
    textAlign: "center",
    color: "#1A202C"
    },
    "& .box1": {
        padding: "98px",
        border: "1px",
        backgroundColor: "#F7F7FA",
        display: "flex",
        flexDirection: "column",
        gap: "105px",
        "@media screen and (max-width: 1433px)": {
            padding: "0px"
        },
    },
    "& .box2": {
        maxWidth: "604px",
        width: "100%",
        border: "#E7DAED",
        backgroundColor: "#FAFAFA" ,
        border: "1px solid #E7DAED",
    },
    "& .box3": {
        display: "flex",
        padding: "20px",
        display: "flex",
        gap: "25px"
    },
    "& .box4": {
      maxWidth: "59px",
      width:"100%",
      height: "56px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    "& .boxcardWrap": {
     display:"flex",
     gap:"25px",
     flexWrap: "wrap",
     justifyContent: "center"
    },
    "& .cardTitle": {
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "27.3px",
    color: "#1A202C"
    },
    "& .cardContent": {
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "22.68px",
    color: "#718096"
    },
    "& .mainCardWrapper": {
        width: "100%",
    },
    "& .successText": {
        display: "flex",
        gap: "53px",
        "@media screen and (max-width: 1433px)": {
            flexWrap: "wrap",
            justifyContent: "center"
        },
    }
})

const MainPage = () => {
    const images = [
        { img: indiaImage, name: "HQ India" },
        { img: uaeImage, name: "UAE" },
        { img: usaImage, name: "United States" }

    ]
    const cardData = [
        { "img": image1 ,  "title": "UX Driven Engineering", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit", "color": "linear-gradient(225deg, #29272E 0%, #27272E 100%)"},
        { "img": image2 ,  "title": "Developing Shared Understanding", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit", "color": "linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)"},
        { "img": image3,  "title": "Proven Experience and Expertise", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit", "color": "linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)"},
        { "img": image4 ,  "title": "Security & Intellectual Property (IP)", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit", "color": "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)"},
        { "img": image5 ,  "title": "Code Review", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit", "color": "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)"},
        { "img": image6 ,  "title": "Quality Assurance & Testing", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit", "color": "linear-gradient(225deg, #F76680 0%, #57007B 100%)"},
    ]
    return <MainWrapper>
        <Box className="mainDiv">
            <img src={moon} style={{ width: "185px", height: "152px", mixBlendMode: "color-dodge" }} />
            <Box className="contentWrap">
                <Typography className='textTypo'>Cutting-Edge Mobile App & Web Development Solutions</Typography>
                <img src={curvedLine} className='imgstyle' />
            </Box>
            <Box className="imgBox">
                {
                    images.map((item) =>
                        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={item.img} />
                            <Typography className='imageText'>{item.name}</Typography>
                        </Box>
                    )
                }
            </Box>
            <Typography className='longText'>In accordance with your company's needs, Maxtra Technologies offers tailored app and web development solutions.</Typography>
            <Button className='btnStyle'>Contact Us</Button>
            <img src={graphic3} className='graphic3IMage' />
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
                        <Box>{Array(5).fill(null).map((_, index) => <img style={{ paddingTop: "12px" }} src={star} />)}</Box>
                    </Box>

                    <Box className="cardStyle">
                        <Typography className='cardTitle'>Ratings</Typography>
                        <Typography className='numberText'>4.7+</Typography>
                        <Typography className='contentText'>With their great services and outstanding project results, Maxtra surpassed my expectations.
                        </Typography>
                        <Box>{Array(5).fill(null).map((_, index) => <img style={{ paddingTop: "12px" }} src={star} />)}</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box >
        <Box style={{ padding: "41px", gap:"50px",   display: "flex",  flexDirection: "column",  alignItems: "center" }}>
            <Box style={{ width: "100%", display:"flex", justifyContent: "space-between", alignItems:"center" }}>
                <Typography className='processText'>We've created a <span className='spanText'>process</span> that knits your product with the <span className='spanText'>innovation</span> it deserves.</Typography>
                <Button className='weDoBtn'>What we do <img src={Arrow} style={{ paddingLeft: "12px" }} /></Button>
            </Box>
            <Typography className='globalText'>Global clients and handpicked projects that place innovation at the forefront</Typography>
            <Box className="successText">package.json
                <Box>
                    <Typography className='sinceTypo' style={{ fontWeigth: 600 }}>01+</Typography>
                    <Typography className='cardTitle'>Year Of Sucess</Typography>
                </Box>
                <Box style={{ width: "1px", height:"94px", backgroundColor:"#BD000A"}}></Box>
                <Box>
                    <Typography className='sinceTypo' style={{ fontWeigth: 600 }}>10+</Typography>
                    <Typography className='cardTitle'>Employee</Typography>
                </Box>
                <Box style={{ width: "1px", height:"94px", backgroundColor:"#BD000A"}}></Box>
                <Box>
                    <Typography className='sinceTypo' style={{ fontWeigth: 600 }}>50+</Typography>
                    <Typography className='cardTitle'>Happy clients</Typography>
                </Box>
                <Box style={{ width: "1px", height:"94px", backgroundColor:"#BD000A"}}></Box>
                <Box>
                    <Typography className='sinceTypo' style={{ fontWeigth: 600 }}>50+</Typography>
                    <Typography className='cardTitle'>Project Delivered</Typography>
                </Box>
            </Box>
        </Box>

            <CenterMode />

        <Box style={{ width:"100%", display: "flex", justifyContent: "center", alignItems: "center",paddingTop: "119px", paddingBottom: "67px"}}>
            <Box className="hireBox">
                <Typography className='hireText'>Hire the best developers and designers around!</Typography>
                <Box style={{position:"relative"}}>
                    <img src= {CircleLine} style={{ position: "absolute", top: "-60px", left: "32px" }}/>
                    <Button className='weDoBtn'>Hire Top Developers</Button>
                    </Box>

            </Box>
        </Box>
        <Box className="mainCardWrapper">
        <Box className="box1">
            <Box>
            <Typography className='designText'>Our design and</Typography>
            <Typography className='designText' style={{fontWeight: 700 }}>development approach</Typography>
            </Box>
                <Box className= "boxcardWrap">
                    {
                       cardData.map((item)=> 
                        <Box className="box2">
                        <Box className="box3">
                           <Box  className= "box4" style={{ background: `${item.color}`}}>
                             <img src={item.img} /> 
                             </Box>
                            <Box>
                                <Typography className='cardTitle'>{item.title}</Typography>
                                <Typography className='cardContent'>{item.content}</Typography>
                            </Box>
                        </Box>
                        </Box>
                    )
                    }
                </Box>
        </Box>
        </Box>
        </Box>
    </MainWrapper>
}
export default MainPage