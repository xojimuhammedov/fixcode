import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import NavbarIcon from '../assets/NavbarIcon';
import UserIcon from '../assets/user.png'

import { Link as Alink } from 'react-router-dom'

const NavbarMenu = () => {
    return (
        <Box pt={'24px'}>
            <Box className='container'>
                <Flex {...css.navbar} align={'center'} justify={'space-between'}>
                    <NavbarIcon />
                    <Flex gap={'44px'} align={'center'}>
                        <Link href='#' {...css.link}>Premium </Link>
                        <Link href='#' {...css.link}>Explore  </Link>
                        <Link href='#' {...css.link}>Product </Link>
                        <Link href='#' {...css.link}>Developer </Link>
                    </Flex>
                    <Alink to={'/login'}>
                        <Text {...css.button}>
                            <Image ml={'6px'} src={UserIcon} />
                            Sign in</Text>
                    </Alink>
                </Flex>
            </Box>
        </Box>
    );
}

export default NavbarMenu;

const css = {
    navbar: {
        borderRadius: "50px",
        border: "1px solid #C7D8FF",
        background: "#F6F8FF",
        padding: "6px 6px 6px 14px"
    },
    link: {
        color: "#828796",
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "normal",
        transition: "0.3s",
        padding: "12px 18px",

        _hover: {
            borderRadius: "50px",
            background: "rgba(68, 120, 255, 0.20)",
            color: "#1247D1"
        }
    },
    button: {
        borderRadius: "50px",
        background: "linear-gradient(275deg, #356DFF -7.3%, #032889 92.83%)",
        height: "52px",
        width: "148px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "#fff",
        fontSize: "18px",
        textAlign: "center"
    }
}