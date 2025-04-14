import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import useGetAllQuery from '../../hooks/useGetAllQuery';

import LevelOneImage from '../../assets/01.png'
import LevelTwoImage from '../../assets/02.png'
import LevelThreeImage from '../../assets/03.png'

const Leaderboard = () => {
    const [filter, setFilter] = useState({
        sort_by_xp: true,
        sort_by_badges: false,
        sort_by_problems: false,
        sort_by_achievements: false
    })
    const { data } = useGetAllQuery({
        key: "getAllLeaderboard",
        url: "/api/v1/leaderboard/leaderboard/global",
        params: {
            sort_by_xp: filter?.sort_by_xp,
            sort_by_badges: filter?.sort_by_badges,
            sort_by_problems: filter?.sort_by_problems,
            sort_by_achievements: filter?.sort_by_achievements
        }
    })

    const handleSortClick = (key) => {
        setFilter({
            sort_by_xp: false,
            sort_by_badges: false,
            sort_by_problems: false,
            sort_by_achievements: false,
            [key]: true,
        });
    };


    return (
        <Box className='container'>
            <Navbar />
            <Flex {...css.item}>
                <Text ml={`${filter?.sort_by_xp ? '0' : "12px"}`} className={`${filter?.sort_by_xp ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_xp")} {...css.name}>Experience</Text>
                <Text className={`${filter?.sort_by_badges ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_badges")} {...css.name}>Badges</Text>
                <Text className={`${filter?.sort_by_problems ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_problems")} {...css.name}>Problems Solved</Text>
                <Text mr={`${filter?.sort_by_achievements ? '0' : "12px"}`} className={`${filter?.sort_by_achievements ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_achievements")} {...css.name}>Achievements</Text>
            </Flex>
            <SimpleGrid columns={6} {...css.card}>
                <Text w={'50px'} {...css.names}>Place</Text>
                <Text w={'150px'} {...css.names}>Username</Text>
                <Text w={'150px'}  {...css.names}>Experience</Text>
                <Text {...css.names}>Badges</Text>
                <Text w={'240px'} {...css.names}>Problems Solved</Text>
                <Text textAlign={'center'} {...css.names}>Achievements</Text>
            </SimpleGrid>
            <Box mt={'24px'}>
                {
                    data?.data?.map((item, index) => (
                        <SimpleGrid gap={'8px'} columns={6} m={'20px 0'} key={index} {...css.card}>
                            <Text {...css.names}>{item?.rank}</Text>
                            <Text  {...css.names}>{item?.username}</Text>
                            <Text   {...css.names}>{item?.xp} XP</Text>
                            <Text {...css.names}>{item?.badges_count}</Text>
                            <Text w={'240px'} {...css.names}>
                                <Flex gap={'6px'}>
                                    <Box
                                        borderRadius="6px"
                                        fontSize={'12px'}
                                        background="#52A28A"
                                        color={'#fff'}
                                        w={'100%'}
                                        textAlign={'center'}
                                    >Easy: {item?.easy_solved} </Box>
                                    <Box
                                        borderRadius="6px"
                                        background="#FFBF1E"
                                        fontSize={'12px'}
                                        color={'#fff'}
                                        w={'100%'}
                                        textAlign={'center'}
                                    >Medium: {item?.medium_solved}</Box>
                                    <Box
                                        borderRadius="6px"
                                        background="#FF6063"
                                        fontSize={'12px'}
                                        color={'#fff'}
                                        w={'100%'}
                                        textAlign={'center'}
                                    >Hard: {item?.hard_solved}</Box>
                                </Flex>
                            </Text>
                            {
                                item?.achievements_count === 1 ? <Image {...css.image} src={LevelOneImage} /> : item?.achievements_count === 2 ? <Image {...css.image} src={LevelTwoImage} /> : item?.achievements_count ? <Image {...css.image} src={LevelThreeImage} /> : <Text textAlign={'center'} {...css.names}>{item?.achievements_count}</Text>
                            }
                            {/* <Text textAlign={'center'} {...css.names}>{item?.achievements_count}</Text> */}
                        </SimpleGrid>
                    ))
                }
            </Box>
        </Box>
    );
}

export default Leaderboard;

const css = {
    item: {
        borderRadius: "8px",
        border: "1px solid #94999F",
        width: "620px",
        height: "48px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 0",
        margin: "120px auto"
    },
    name: {
        color: "#94999F",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: "20px",
        cursor: "pointer"
    },
    names: {
        color: "#152B46",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
    },
    card: {
        borderRadius: "8px",
        background: "#EDF2FF",
        padding: "0 24px",
        justifyContent: "space-between",
        alignItems: "center",
        height:"70px"
    },
    image: {
        width: "50px",
        textAlign: "center",
        margin: "0 auto"
    }
}