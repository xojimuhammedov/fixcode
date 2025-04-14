import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Programming = () => {
    return (
        <Box p={'36px 0'}>
            <Box className='container'>
                <Heading {...css.title}>The Future of Competitive Programming</Heading>
                <Text {...css.text}>Exploring how structured problem-solving enhances developers’ skills and acceletrates career growth in the tech industry.</Text>
                <SimpleGrid columns={2}>
                    <Box {...css.item}>
                        <Heading {...css.name}>Mastering Algorithmic Thinking for Problem Solving</Heading>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Programming;

const css = {
    title: {
        color: "#152B46",
        fontSize: "48px",
        textAlign: "center",
        fontWeight: "600",
        width: "666px",
        margin: "12px auto"
    },
    text: {
        margin: "12px auto",
        color: "#646464",
        fontSize: "20px",
        lineHeight: "normal",
        textAlign: "center",
        width: "660px"
    },
    name: {
        fontSize: "34px",
        textAlign: "center",
        fontWeight: "600",
        color: "#152B46",
    },
    item: {
        borderRadius: "20px",
        border: "0.3px solid #94A2C5",
        background: "linear - gradient(180deg, #E0F4FB 0.23 %, #FFF 37.2 %)",
        padding:"30px 45px"
    }
}
