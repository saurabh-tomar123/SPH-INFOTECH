import React, {useState } from 'react';
import Logo from "../Images/Logo.png"
import { Typography, Box, styled, Button } from "@mui/material"

const NavBar = styled(Box)({

    "& .divWrapper": {
        paddingTop: "43px",
        paddingBottom: "20px",
        border: "1px solid #FFFFFF",
        backgroundColor: "#3A3859",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: "71px",
        paddingRight: "38px",
        "@media screen and (max-width: 1200px)": {
            flexWrap: "wrap"
        },

    },
    "& .tabsWrapper": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        "@media screen and (max-width: 850px)": {
            flexDirection: "column",
            gap: "20px"
        }
    },
    "& .textTypo": {
        fontFamily: "Poppins",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
        color: "#FFFFFF",
    },
    "& .btnDesign": {
        maxWidth: "197px",
        width: "100%",
        height: "47px",
        borderRadius: "5px",
        backgroundColor: "#A5327E",
        border: "1px solid #FFFFFF",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "27px",
        color: "#FFFFFF",
        textTransform: "capitalize"
    },
    "& .imgstyl": {
        paddingRight: "155px",
        "@media screen and (max-width: 1200px)": {
            paddingRight: "0px"
        },
    }
})


const Header = () => {
    const [tabs, setTabs] = useState(["Company", "Services", "Hire Dedicated Developer", "Industries", "Case Studies", "Portfolio"])
    const [activeTab, setActiveTab] = useState(0)
    return (
        <NavBar>
            <Box className="divWrapper" >
                <img src={Logo} className='imgstyl' />
                <Box className='tabsWrapper'>
                    {
                        tabs.map((item, index) =>
                            <Typography className='textTypo' style={{fontWeight: `${(index == activeTab) ? 700 : 400}`}} onClick={()=> setActiveTab(index)}>{item}</Typography>
                        )}
                    <Button className='btnDesign'>Contact Us</Button>
                </Box>

            </Box>
        </NavBar>
    )
}
export default Header