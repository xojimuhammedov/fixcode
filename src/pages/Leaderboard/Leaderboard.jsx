import { border, Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import Navbar from '../../components/Navbar';
import useGetAllQuery from '../../hooks/useGetAllQuery';

import LevelOneImage from '../../assets/05.png'
import LevelTwoImage from '../../assets/06.png'
import LevelThreeImage from '../../assets/07.png'

import BadgeOne from '../../assets/badge-01.png'
import BadgeTwo from '../../assets/badge-02.png'
import BadgeThree from '../../assets/badge-03.png'
import Podium from './components/Podium';
import Pagination from '../../components/Pagination';

const ITEMS_PER_PAGE = 10;

const Leaderboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
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
            sort_by_achievements: filter?.sort_by_achievements,
            limit: 10000
        }
    })

    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    const getUserId = userData?.data?.id

    const handleSortClick = (key) => {
        setFilter({
            sort_by_xp: false,
            sort_by_badges: false,
            sort_by_problems: false,
            sort_by_achievements: false,
            [key]: true,
        });
    };

    const paginatedData = useMemo(() => {
        if (!data || !Array.isArray(data?.data)) return [];

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return data?.data?.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [data, currentPage]);

    const currentUserItem = useMemo(() => {
        if (!data || !Array.isArray(data?.data)) return null;
        return data?.data?.find(item => item?.user_id === getUserId);
    }, [data, getUserId]);

    const displayedData = useMemo(() => {
        if (!paginatedData || !Array.isArray(paginatedData)) return [];

        const isAlreadyIncluded = paginatedData.some(item => item?.user_id === getUserId);

        // Agar mavjud bo‘lsa, oddiy paginatedData
        if (isAlreadyIncluded || !currentUserItem) return paginatedData;

        // Aks holda userni oxiriga qo‘shamiz
        return [...paginatedData, currentUserItem];
    }, [paginatedData, currentUserItem, getUserId]);


    const totalPages = useMemo(() => {
        if (!data || !Array.isArray(data?.data)) return 0;
        return Math.ceil(data?.data?.length / ITEMS_PER_PAGE);
    }, [data]);


    return (
        <Box className='container'>
            <Navbar />
            <Podium data={data} />
            <Flex {...css.item}>
                <Text ml={`${filter?.sort_by_xp ? '0' : "12px"}`} className={`${filter?.sort_by_xp ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_xp")} {...css.name}>Experience</Text>
                <Text className={`${filter?.sort_by_badges ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_badges")} {...css.name}>Badges</Text>
                <Text className={`${filter?.sort_by_problems ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_problems")} {...css.name}>Problems Solved</Text>
                <Text mr={`${filter?.sort_by_achievements ? '0' : "12px"}`} className={`${filter?.sort_by_achievements ? 'active' : ""}`} onClick={() => handleSortClick("sort_by_achievements")} {...css.name}>Achievements</Text>
            </Flex>
            <SimpleGrid columns={6} {...css.cards}>
                <Text w={'50px'} {...css.names}>Place</Text>
                <Text {...css.names}>Username</Text>
                <Text {...css.names}>Experience</Text>
                <Text {...css.names}>Badges</Text>
                <Text ml={'-36px'} {...css.names}>Problems Solved</Text>
                <Text textAlign={'center'} {...css.names}>Achievements</Text>
            </SimpleGrid>
            <Box mt={'24px'}>
                {
                    displayedData?.map((item, index) => (
                        <SimpleGrid
                            className={`${item?.rank === 1 ? "yellow" : item?.rank === 2 ? "gray" : item?.rank === 3 ? "blue" : ""}`}
                            background={`${item?.user_id == getUserId ? "#6fb9ff" : "#EDF2FF"}`}
                            border={`2px solid ${item?.rank === 1 ? "#ffd700" : item?.rank === 2 ? "#9e9eb3" : item?.rank === 3 ? "#F6B191" : "#EDF2FF"}`} gap={'8px'} columns={6} m={'20px 0'} key={index} {...css.card}>
                            {
                                item?.rank === 1 ? <Image {...css.icon} src={BadgeOne} /> : item?.rank === 2 ? <Image {...css.icon} src={BadgeTwo} /> : item?.rank === 3 ? <Image {...css.icon} src={BadgeThree} /> : <Text ml={'24px'} {...css.names}>{item?.rank}</Text>
                            }

                            <Heading ml={'-36px'} {...css.subnames}>{item?.username}</Heading>
                            <Text  {...css.names}>{item?.xp} XP</Text>
                            <Text {...css.names}>{item?.badges_count}</Text>
                            <Text ml={'-40px'} w={'240px'} {...css.names}>
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
                            <Box ml={'48px'}>
                                {
                                    item?.achievements_count === 1 ? <Flex align={'center'}>
                                        <Heading pr={'16px'} fontWeight={'bold'} {...css.names}>{item?.achievements_count}</Heading>
                                        <Image {...css.image} src={LevelOneImage} />
                                    </Flex> : item?.achievements_count === 2 ? <Flex align={'center'}>
                                        <Heading pr={'16px'} fontWeight={'bold'} {...css.names}>{item?.achievements_count}</Heading>
                                        <Image {...css.image} src={LevelOneImage} />
                                        <Image {...css.image} src={LevelTwoImage} />
                                    </Flex> : item?.achievements_count === 3 ?
                                        <Flex align={'center'}>
                                            <Heading pr={'16px'} fontWeight={'bold'} {...css.names}>{item?.achievements_count}</Heading>
                                            <Image {...css.image} src={LevelOneImage} />
                                            <Image {...css.image} src={LevelTwoImage} />
                                            <Image {...css.image} src={LevelThreeImage} />
                                        </Flex> : item?.achievements_count > 3 ? <Flex align={'center'}>
                                            <Heading pr={'16px'} fontWeight={'bold'} {...css.names}>{item?.achievements_count}</Heading>
                                            <Image {...css.image} src={LevelOneImage} />
                                            <Image {...css.image} src={LevelTwoImage} />
                                            <Image {...css.image} src={LevelThreeImage} />
                                        </Flex> : <Heading fontWeight={'bold'} {...css.names}>{item?.achievements_count}</Heading>
                                }
                            </Box>
                        </SimpleGrid>
                    ))
                }
            </Box>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
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
        margin: "60px auto"
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
    achievement: {
        color: "#152B46",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: "20px",
    },
    subnames: {
        color: "#152B46",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "20px",
        padding: "8px 12px",
        borderRadius: "12px",
        width: "90%",
        textAlign: "center",
        backgroundColor: "#4080e6",
        color: "#fff",
        cursor: "pointer"
    },
    card: {
        borderRadius: "8px",
        padding: "0 24px",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px"
    },
    cards: {
        borderRadius: "8px",
        background: "#EDF2FF",
        padding: "0 24px",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px"
    },
    image: {
        width: "50px",
        textAlign: "center",
    },
    icon: {
        width: "60px",
        textAlign: "center",
    },
}