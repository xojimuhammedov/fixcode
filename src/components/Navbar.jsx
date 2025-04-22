import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import NavbarIcon from '../assets/NavbarIcon';
import ProfileIcon from '../assets/ProfileIcon';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()

    const handleDelete = () => {
        localStorage.removeItem("userToken")
        navigate("/")
    }
    return (
        <Box {...css.navbar}>
            <Flex align={'center'} justifyContent={'space-between'}>
                <Link to={'/'}>
                    <NavbarIcon />
                </Link>
                <Flex gap={'36px'}>
                    <Link to={'/problems'}>
                        <Text {...css.link}>Problems</Text>
                    </Link>
                    <Link to={'/contest'}>
                        <Text {...css.link}>Contest</Text>
                    </Link>
                    <Link to={'/leaderboard'}>
                        <Text {...css.link}>Leaderboard</Text>
                    </Link>
                    <Link to={'/history'}>
                        <Text {...css.link}>History</Text>
                    </Link>
                </Flex>
                <Menu isLazy>
                    <MenuButton>
                        <Box {...css.item}>
                            <ProfileIcon />
                        </Box>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
                        <MenuItem onClick={handleDelete}>LogOut</MenuItem>
                    </MenuList>
                </Menu>

            </Flex>
        </Box>
    );
}

export default Navbar;

const css = {
    navbar: {
        borderRadius: "50px",
        border: "1px solid #C7D8FF",
        background: "#EDF2FF",
        padding: "10px 10px 10px 20px",
        marginTop: "30px"
    },
    item: {
        borderRadius: "100px",
        border: "0.3px solid #2F65F0",
        background: "linear-gradient(303deg, #2456D6 12.88%, #132D70 84.9%)",
        boxShadow: "-2px -2px 4px 0px #2A5EE5 inset, 2px 2px 4px 0px #2B60E7 inset",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    },
    link: {
        color: "#152B46",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "100%"
    }
}