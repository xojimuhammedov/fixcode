import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import TechnologyBanner from '../assets/banner.jpg'

const Technology = () => {
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Flex align={'center'}>
                    <Box>
                        <Heading {...css.title}>Master Coding with Experts in Top Technologies</Heading>
                        <Text {...css.text}>Connect with verified developers skilled in the latest programming languages and frameworks. Learn, collaborate.</Text>
                        <Button {...css.button}>Start Solving</Button>
                    </Box>
                    <Box w={'100%'}>
                        <Image src={TechnologyBanner} {...css.image} />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default Technology;

const css = {
    title: {
        color: "#152B46",
        fontSize: "48px",
        fontWeight: "600",
        width: "616px",
        margin: "12px 0",
    },
    text: {
        fontSize: "20px",
        color: "#9FA5C1",
        lineHeight: "normal",
        width: "616px",
        margin: "12px 0"
    },
    button: {
        borderRadius: "100px",
        background: "#0153D5",
        width: "150px",
        height: "47px",
        color: "#fff",
        transition: "0.3s",
        fontSize: "18px",
        margin: "12px 0",

        _hover: {
            background: "#0153D5",
        }
    },
    image: {
        width: "100%"
    }
}