import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import BadgeIcon from '../../../assets/badge.png'

const Badge = () => {
    return (
        <Box {...css.item}>
            <Flex justifyContent={'space-between'}>
                <Heading {...css.number}>0</Heading>
                <Image alt='BadgeIcon' src={BadgeIcon} />
            </Flex>
            <Heading {...css.name}>Locked Badge</Heading>
            <Text {...css.subname}>Fed LeetCoding Challenge</Text>
        </Box>
    );
}

export default Badge;


const css = {
    item: {
        background: "#EDF2FF",
        borderRadius: "15px",
        padding: "26px 20px 26px 21px",
        width: "100%",
        height:"343px"
    },
    number: {
        fontSize: "40px",
        fontWeight: "500"
    },
    name: {
        color: "rgba(86, 86, 86, 0.70)",
        fontWeight: "500",
        fontSize: "16px",
    },
    subname: {
        fontSize: "20px",
        fontWeight: "500",
        marginTop:"6px"
    }
}