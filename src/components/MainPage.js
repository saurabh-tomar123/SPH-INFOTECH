import React, { useState, useRef, useEffect } from 'react';
import moon from "../Images/moon.png"
import curvedLine from "../Images/curvedLine.png"
import indiaImage from "../Images/indiaImage.png"
import uaeImage from "../Images/uaeImage.png"
import usaImage from "../Images/usaImage.png"
import graphic1 from "../Images/graphic1.png"
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
import figma from '../Images/figma.png'
import ReactImg from '../Images/React.png'
import sql from '../Images/sql.png'
import mongo from '../Images/mongo.png'
import Go from '../Images/Go.png'
import RubyOnRails from '../Images/RubyOnRails.png'
import Python from '../Images/Python.png'
import NETCore from '../Images/NETCore.png'
import java from '../Images/Java.png'
import PHP from '../Images/PHP.png'
import NodeJS from '../Images/NodeJS.png'
import Line from '../Images/Line.png'
import Trophy from '../Images/Trophy.png'
import FooterImg from '../Images/FooterImg.png'
import RegisterForm from './RegisterForm';
import Header from './Header';

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
     gap:"16px",
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
    },
    "& .techStackWrapper": {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "60px"        
    },
    "& .techStackText": {
        fontStyle:"Inter",
        fontWeight: 400,
        fontSize: "35px",
        lineHeight: "55px"
    },
    "& .iconClass": {
        width:"166px",
        height:"94px",
        filter: "grayscale(1)",
        transition: "filter 0.3s ease",
        "&:hover": {
          filter: "none"
        }
    },
    "& .idText": {
        fontFamily: "Inter",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "21.78px",
        letterSpacing: "-0.005em",
        paddingTop:"15px",
        background: "linear-gradient(90deg, #57007B, #F76680)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent"
    },
    "& .devTitle": {
        fontFamily: "Inter",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "21.78px",
        letterSpacing: "-0.005em",
        color: "#1A202C",
    },
    "& .devContent": {
        width:"245px",
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "-0.005em",
        color: "#718096"
    },
    "& .lineAlign": {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        paddingLeft: "68px",
        paddingTop: "52px",
        paddingBottom: "52px",
        "@media screen and (max-width: 1200px)": {
            display: "none"
        },
    },
    "& .getinTouch": {
        fontFamily: "Montserrat",
        fontSize: "40px",
        fontWeight: 700,
        lineHeight: "29.78px",
        color: "#000000",
        paddingLeft:"58px",
        paddingTop: "43px"
    },
    "& .footerText": {
        fontFamily: "Inter",
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "27.3px",
        background: 'linear-gradient(225deg, #F76680 0%, #57007B 100%)',
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        textDecorationLine: "underline",
        textDecorationColor: "#57007B"
    },
    "& .footerdiv": {
        width:"80%",
        borderRadius: "40px",
        border: "1px solid gray",
        backgroundColor: "#FFFFFF",
        display:"flex",
        justifyContent:"space-around",
        alignItems: "center",
        "@media screen and (max-width: 768px)": {
            flexDirection: "column",
            width: "100%"
        },
    },
    "& .footerInternal": {
        width:"60%",
        display: "flex",
        gap:"20px",
        "@media screen and (max-width: 768px)": {
            width:"100%",
            justifyContent:"center",
            flexWrap: "wrap"
        },
    }
})

const MainPage = () => {
    const currentRef = useRef(null)
    const serviceRef = useRef(null)
    const [emailData, setEmailData] = useState('')
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

    let techStackImages = [
        { "img": figma },
        { "img": ReactImg },
        { "img": sql },
        { "img": mongo },
        { "img": Go },
        { "img": RubyOnRails },
        { "img": Python },
        { "img": NETCore },
        { "img": java },
        { "img": PHP },
        { "img": NodeJS },

    ]
    const devContentBox1 = [
        {id:"#1", title:"Assemble the right team", content:"We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do."},
        {id:"#2", title:"Sprint planning", content:"Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding."},
        {id:"#3", title:"Tech architecture", content:"We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently."},
        ]
    const devContentBox2 = [
        {id:"#4", title:"Standups & weekly demos", content:"Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns."},
        {id:"#5", title:"Code reviews", content:"Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells."},
        {id:"#6", title:"Iterative delivery", content:"We divide the implementation process into several checkpoints rather than a single deadline."},
    ]


     const handleFocus = () => {
        if(currentRef.current){
            currentRef.current.focusOnRegister()
        }
     }
     const handleServiceFocus = () => {

        if(serviceRef.current){
            serviceRef.current.focusOnServices()
        }
     }

     const postData = async () => {
        try {
           await fetch("http://192.168.166.139:3000/data", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: emailData}),
          })
          setEmailData('')
        } catch (error) {
          console.error("Error:", error);
        }
      };
     


    return <>
            <Header  handleFocus ={handleFocus} handleServiceFocus={handleServiceFocus} />
    <MainWrapper>

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
            <Button className='btnStyle' onClick={handleFocus}>Contact Us</Button>
            <img src={graphic3} className='graphic3IMage' />
            <img src={graphic1} className='grapic1Image' />
        </Box>
        <Box style={{ width: "100%" }}>
            <Box className="qualityBox">
                <Box className="internalBox">
                    <Typography className='sinceTypo' >S I N C E  2 0 0 9</Typography>
                    <Typography className='qualityText'>Quality Technology & People</Typography>
                    <Typography style={{ width: "85%" }}>As an industry leader, we take it as our responsibility to help the businesses in acquiring their deserved place in the market. Maxtra Technologies strongly believes in building something that turns small startups into a globally leading organizations.
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

            <CenterMode ref={serviceRef}/>

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
        <Box className="techStackWrapper">
            <Box style={{ width: "100%", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <Typography className='techStackText'>our</Typography>
                <Typography className='techStackText' style={{ fontWeight: "700px" }}>Tech Stack</Typography>

            </Box>
            {
                techStackImages.map((item) =>
                    <img src={item.img} className='iconClass' />
                )
            }
        </Box>
        <Box style={{ paddingTop: "50px", paddingBottom: "50px" }}>

            <Box style={{ position: "relative" }}>
                <Box style={{ width: "100%", alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <Typography className='techStackText'>How development</Typography>
                    <Typography className='techStackText' style={{ fontWeight: "700px" }}>through                      works</Typography>
                </Box>
                <Box>
                    <Box style={{ display: "flex", gap: "79.43px", justifyContent: "center", flexWrap:"wrap" }}>
                        {
                            devContentBox1.map((item) =>
                                <Box style={{
                                    maxWidth: "334px",
                                    paddingLeft: "23px",
                                    paddingTop: "25px",
                                    paddingBottom: "48px",
                                    paddingRight: "68px",
                                    backgroundColor: "#FFFFFF",
                                    border: "1px solid #E7DAED",
                                    borderRadius: "9px"
                                }}>
                                    <Box style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                                        <Typography className='idText'>{item.id}</Typography>
                                        <Typography className='devTitle'>{item.title}</Typography>
                                    </Box>
                                    <Typography className='devContent'>{item.content}</Typography>
                                </Box>
                            )
                        }
                    </Box>
                    <Box>
                        <Box className="lineAlign">
                            <Box style={{ width: "2px", height: "35px", backgroundColor: "#F76680", position: "absolute", top: "342px", left: "23%" }}></Box>
                            <Box style={{ width: "2px", height: "35px", backgroundColor: "#F76680", position: "absolute", top: "342px", left: "50%" }}></Box>
                            <Box style={{ width: "2px", height: "35px", backgroundColor: "#F76680", position: "absolute", top: "342px", left: "77%" }}></Box>
                            <img src={Line} style={{ height: "2px", width: "93%" }} /> <img src={Trophy} style={{ width: "46.99px", height: "48.96px" }} />
                            <Box style={{ width: "2px", height: "35px", backgroundColor: "#F76680", position: "absolute", top: "378px", left: "27%" }}></Box>
                            <Box style={{ width: "2px", height: "35px", backgroundColor: "#F76680", position: "absolute", top: "378px", left: "54%" }}></Box>
                            <Box style={{ width: "2px", height: "35px", backgroundColor: "#F76680", position: "absolute", top: "378px", left: "81%" }}></Box>
                        </Box>
                    </Box>
                    <Box style={{ display: "flex", gap: "79.43px", paddingLeft: "8%", justifyContent: "center", flexWrap:"wrap" }}>
                        {
                            devContentBox2.map((item) =>
                                <Box style={{
                                    maxWidth: "334px",
                                    paddingLeft: "23px",
                                    paddingTop: "25px",
                                    paddingBottom: "48px",
                                    paddingRight: "68px",
                                    backgroundColor: "#FFFFFF",
                                    border: "1px solid #E7DAED",
                                    borderRadius: "9px"
                                }}>
                                    <Box style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                                        <Typography className='idText'>{item.id}</Typography>
                                        <Typography className='devTitle'>{item.title}</Typography>
                                    </Box>
                                    <Typography className='devContent'>{item.content}</Typography>
                                </Box>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box style={{
            backgroundImage: `url(${FooterImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '580px',
            width: "100%",
            paddingTop:"85px",
            paddingBottom:"85px",
            display:"flex",
            justifyContent: "center"
        }}>

            <Box style={{ maxWidth: "1220px", height: "579.32px",  borderRadius: "42.54px", backgroundColor:"#FFFFFF", backdropFilter: "blur(85.07670593261719px)",
                boxShadow: '0px 0px 85.08px 0px #0000001A' }}>
                <Typography className='getinTouch'>Get In touch with us</Typography>
                <RegisterForm  ref = {currentRef} />
            </Box>
        </Box>
        <Box style={{ width:"100%", paddingBottom:'20px' }}>
            <Box style={{ display:"flex", justifyContent:"space-around", paddingTop: "20px", flexWrap: "wrap" }}>
            <Box style={{ display:"flex", flexDirection: "column", gap:"10px" }}>
            <Typography className='footerText'>What We Do</Typography>
            <Typography className='devContent'>Mobile App Development</Typography>
            <Typography className='devContent'>E-Commerce App Development</Typography>
            <Typography className='devContent'>Web & CMS Development</Typography>
            <Typography className='devContent'>UI/UX Designig</Typography>
            <Typography className='devContent'>Marketing and Branding</Typography>
            <Typography className='devContent'>Resource Outsorcing</Typography>
            </Box>

            <Box style={{ display:"flex", flexDirection: "column", gap:"10px" }} >
            <Typography className='footerText'>We Work With</Typography>
            <Typography className='devContent'>Enterprises App</Typography>
            <Typography className='devContent'>Healthacre</Typography>
            <Typography className='devContent'>Social Networking</Typography>
            <Typography className='devContent'>Entertainment</Typography>
            <Typography className='devContent'>Finance Sector</Typography>
            <Typography className='devContent'>Real Estate</Typography>
            <Typography className='devContent'>Food & restaurant</Typography>
            <Typography className='devContent'>Education</Typography>
            <Typography className='devContent'>Event App</Typography>
            </Box>

            <Box style={{ display:"flex", flexDirection: "column", gap:"10px" }} >
            <Typography className='footerText'>Hire Developers</Typography>
            <Typography className='devContent'>Iphone</Typography>
            <Typography className='devContent'>Ipad</Typography>
            <Typography className='devContent'>Android</Typography>
            <Typography className='devContent'>PHP</Typography>
            <Typography className='devContent'>Magento</Typography>
            <Typography className='devContent'>Drupal</Typography>
            <Typography className='devContent'>Wordpress</Typography>
            <Typography className='devContent'>Joomia</Typography>
            </Box>
            </Box>
            <Box style={{display:"flex", justifyContent:"center", alignItems: "center", paddingTop: "20px"}}>
                <Box className="footerdiv">
                <Box style={{padding:"10px"}}>
                <Typography className='spanText' style={{fontSize: "30px", fontWeight: 0 }}>WANT US TO CONTACT YOU</Typography>
                <Typography className='sinceTypo'>Share your email</Typography>
                </Box>
                <Box className="footerInternal">
                    <input type="email"  value={emailData} placeholder='Enter Email Address' style={{  fontFamily:"Inter", fontSize:"20px", width: "70%", height: "50px",  borderRadius: "20px" ,paddingLeft: "20px"}}
                    onChange={(event)=> setEmailData(event.target.value)} />
                    <Button className='weDoBtn' style={{ borderRadius: "35px",  height: "50px" , width: "100%", maxWidth:"150px"}}
                    onClick={postData}> Send</Button>
                </Box>
                </Box>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap:"20px", paddingTop: "20px"}}>
                <Box style={{ width:"80%", height: "1px", backgroundColor: "gray"}}></Box>
                <Box  style={{width: "80%",  display:"flex" , justifyContent: "space-between"}}>
                    <Typography className='devContent' style={{width:"auto"}}> Terms & Conditions | Privacy Policy | Refund Policy </Typography>
                    <Typography className='devContent' style={{width:"auto"}} >Copyright @ 2024 SPH Technology</Typography>
                </Box>
            </Box>
            

        </Box>
    </MainWrapper>
    </>
}
export default MainPage