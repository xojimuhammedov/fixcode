import { Box, Button, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import dayjs from 'dayjs';

import PrizeImage from '../../../assets/kubok.png'
import LeftImage from '../../../assets/left.png'
import SettingsImage from '../../../assets/settings.png'
import AllContest from './AllContest';

const ContestList = () => {
    const { data } = useGetAllQuery({
        key: "contestData",
        url: "/api/v1/contests"
    })
    return (
        <Box p={'48px 0'}>
            <Flex align={'center'} justify={'space-between'}>
                <Image src={PrizeImage} alt='PrizeImage' />
                <Flex flexDirection={'column'} align={'center'}>
                    <Heading {...css.title}>
                        Code Clash: Win Big!
                    </Heading>
                    <Text {...css.text}>Solve challenges, earn rewards, and climb the leaderboard. Show you're the best coder! </Text>
                </Flex>
                <Image transform={'rotate(40deg)'} src={PrizeImage} alt='PrizeImage' />
            </Flex>
            <SimpleGrid mt={'100px'} gap={'32px'} columns={3}>
                {
                    data?.data?.slice(0, 3)?.map((item, index) => (
                        <Flex key={index} justifyContent={'space-between'} {...css.card}>
                            <Box {...css.item}>
                                <Image src={SettingsImage} />
                            </Box>
                            <Box>
                                <Text {...css.date}>Sunday 7:30 AM</Text>
                                <Heading {...css.name}>{item.title}</Heading>
                                <Text {...css.date}>Starts in {dayjs(item.start_date).format("YYYY-MM-DD, hh:mm")}</Text>
                                <Button {...css.button}>Learn more</Button>
                            </Box>
                        </Flex>
                    ))
                }
            </SimpleGrid>
            <AllContest />
        </Box>
    );
}

export default ContestList;

const css = {
    title: {
        fontSize: "58px",
        lineHeight: "58px",
        color: "#152B46",
        fontWeight: "700"
    },
    text: {
        color: "#58626E",
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: "400",
        width: "480px",
        textAlign: "center",
        marginTop: "16px"
    },
    item: {
        background: `url(${LeftImage})`,
        backgroundSize: "174px 100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "10px 0 0 10px",
    },
    card: {
        borderRadius: "10px",
        background: "#EDF2FF",
        height: "209px",
        width: "100%",
        justifyContent: "space-between"
    },
    date: {
        color: "#58626E",
        fontSize: "14px",
        lineHeight: "14px",
        fontWeight: "400",
        margin: "12px 0"
    },
    name: {
        color: "#152B46",
        fontSize: "22px",
        lineHeight: "26px",
        fontWeight: "600",
        width: "250px"
    },
    button: {
        borderRadius: "6px",
        background: "#0153D5",
        padding: "8px 12px",
        color: "#fff",

        _hover: {
            background: "#0153D5",
        }
    }
}