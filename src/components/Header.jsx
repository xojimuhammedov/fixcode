import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import ImageHeader from '../assets/Container.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate()
    const userToken = localStorage.getItem("userToken")

    const handleClick = () => {
        if (userToken) {
            navigate("/problems")
        }
        else {
            toast.error("Siz ro'yhatdan o'tishingiz kerak!")
        }
    }
    return (
        <Box p={'96px 0'}>
            <Box className='container'>
                <Flex gap={'14px'} align={'center'} flexDirection={'column'}>
                    <Image {...css.image} src={ImageHeader} alt="ImageHeader" />
                    <Heading {...css.title}>Master Coding <span className='header-title'>Skills</span > & Land Your <span className='header-title'>Dream Job</span> With <span className='header-titles'>FixCode</span></Heading>
                    <Text {...css.text}>FixCode's challenges, mock interviews, and automated solutions simplify your journey to mastering coding.</Text>
                    <Flex gap={'20px'} align={'center'}>
                        <Button onClick={handleClick} {...css.button}>Start Solving</Button>
                        <Button onClick={handleClick} {...css.buttons}>Start Solving</Button>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Header;

const css = {
    title: {
        fontSize: "60px",
        fontWeight: "600",
        textAlign: "center",
        width: "930px",
        margin: "0 auto",
        lineHeight: "normal"
    },
    text: {
        fontSize: "20px",
        color: "#828796",
        fontWeight: "500",
        width: "600px",
        textAlign: "center",
        margin: "auto"
    },
    image: {
        width: "400px"
    },
    button: {
        borderRadius: "100px",
        border: "1px solid var(--Light-Blue-90, #DEE5ED)",
        background: "var(--Light-Blue-96, #F1F4F8)",
        boxShadow: "0px 0px 0px 3px #FFF, 0px 4px 2px 0px rgba(140, 150, 169, 0.25), 0px 8px 17.2px 0px rgba(140, 150, 169, 0.10)",
        color: "#828796",
        fontSize: "18px",
        transition: "0.3s",
        width: "150px",
        height: "47px",


        _hover: {
            background: "var(--Light-Blue-96, #F1F4F8)",
        }
    },
    buttons: {
        borderRadius: "125.439px",
        border: "1.254px solid #B9DCFF",
        background: "#1247D1",
        boxShadow: "0px 208.228px 57.702px 0px rgba(0, 3, 25, 0.00), 0px 132.965px 52.684px 0px rgba(0, 3, 25, 0.02), 0px 75.263px 45.158px 0px rgba(0, 3, 25, 0.08), 0px 32.614px 32.614px 0px rgba(0, 3, 25, 0.14), 0px 8.781px 18.816px 0px rgba(0, 3, 25, 0.16)",
        transition: "0.3s",
        color: "#fff",
        fontSize: "18px",
        transition: "0.3s",
        width: "150px",
        height: "47px",

        _hover: {
            background: "radial - gradient(111.58 % 100 % at 50 % 0 %, #1247D1 0 %, #638DFF 100 %)",
        }
    }
}