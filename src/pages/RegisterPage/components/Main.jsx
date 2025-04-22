import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import Fixcode from '../../../assets/Fixcode';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Box {...css.box}>
            <Box {...css.main}>
                <Link to={'/'}>
                    <Fixcode />
                </Link>
                <Heading {...css.title}>Boost your coding skills with FixCode and solve real-world challenges today!</Heading>
            </Box>
        </Box>
    );
}

export default Main;

const css = {
    box: {
        background: "var(--container-primary, #1570EF)",
        height: "111vh"
    },
    main: {
        padding: "54px 76px",
        position: "relative",
        height: "100%"
    },
    title: {
        color: "#fff",
        fontSize: "56px",
        fontStyle: "italic",
        fontWeight: "300",
        lineHeight: "67px",
        position: "absolute",
        bottom: "30px",
        width: "500px",
        background: "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.44) 100%)",
        backgroundClip: "text"
    }
}