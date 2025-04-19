import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import AvatarGroup from '../assets/avatar-group.png'
import SectionBanner from '../assets/section-banner.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Section = () => {
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
        <Box p={'48px 0'}>
            <Box className='container' {...css.section}>
                <Flex>
                    <Box>
                        <Heading {...css.title}>Want to level up your coding skills? Start now!</Heading>
                        <Text {...css.text}>Sharpen your problem-solving skills with real-world coding challenges, designed to help you excel in technical interviews.</Text>
                        <Button onClick={handleClick} {...css.button}>Try for free</Button>
                        <Flex mb={'60px'} gap={'16px'} align={'center'}>
                            <Image src={AvatarGroup} alt='AvatarGroup' />
                            <Text color={'#fff'} fontSize={'20px'}>Join 100k+ Developers</Text>
                        </Flex>
                    </Box>
                    <Image {...css.image} src={SectionBanner} alt='SectionBanner' />
                </Flex>
            </Box>
        </Box>
    );
}

export default Section;

const css = {
    section: {
        borderRadius: "15px",
        background: "linear-gradient(358deg, #E3EAFF -56.28%, #315AEC 127.73%)",
        paddingTop: "60px",
        paddingLeft: "60px",
        position: "relative"
    },
    title: {
        fontSize: "40px",
        color: "#fff",
        fontWeight: "600",
        width: "500px"
    },
    text: {
        color: "#DBE5FF",
        fontSize: "24px",
        fontWeight: "400",
        width: "570px",
        margin: "30px 0"
    },
    button: {
        borderRadius: "125.439px",
        border: "1.254px solid #B9DCFF",
        background: "radial-gradient(111.58% 100% at 50% 0%, #1247D1 0%, #638DFF 100%)",
        boxShadow: "0px 208.228px 57.702px 0px rgba(0, 3, 25, 0.00), 0px 132.965px 52.684px 0px rgba(0, 3, 25, 0.02), 0px 75.263px 45.158px 0px rgba(0, 3, 25, 0.08), 0px 32.614px 32.614px 0px rgba(0, 3, 25, 0.14), 0px 8.781px 18.816px 0px rgba(0, 3, 25, 0.16)",
        color: "#fff",
        width: "162px",
        height: "52px",
        transition: "0.3s",
        fontWeight: "500",
        fontSize: "16px",
        marginBottom: "30px",

        _hover: {
            background: "radial-gradient(111.58% 100% at 50% 0%, #1247D1 0%, #638DFF 100%)",
        }
    },
    image: {
        position: "absolute",
        right: "0",
        bottom: "0",
        borderRadius: "0 0 15px 0",
    }
}

