import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useMemo, useState } from 'react';
import GaugeChart from './Guechart';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import useGetOneQuery from '../../../hooks/useGetOneQuery';

const Analitcs = ({ data }) => {
    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (userData?.data?.id) {
            setUserId(userData.data.id);
        }
    }, [userData]);
    const { data: statisticData, isLoading } = useGetOneQuery({
        key: "getAllHistoryStatistic",
        url: userId ? `/api/v1/submissions/statistics/user/${userId}` : null,
        enabled: !!userId
    })
    const easyHeight = useMemo(() => {
        if (!data?.data?.by_difficulty?.easy || !statisticData?.data?.difficulty_distribution?.easy) return 0;
        const totalEasy = data?.data?.by_difficulty?.easy;
        const solvedEasy = statisticData?.data?.difficulty_distribution?.easy;
        return ((totalEasy - solvedEasy) * 206) / totalEasy;
    }, [data?.data?.by_difficulty?.easy, statisticData?.data?.difficulty_distribution?.easy]);

    const mediumHeight = useMemo(() => {
        if (!data?.data?.by_difficulty?.medium || !statisticData?.data?.difficulty_distribution?.medium) return 0;
        const totalMedium = data?.data?.by_difficulty?.medium;
        const solvedMedium = statisticData?.data?.difficulty_distribution?.medium;
        return ((totalMedium - solvedMedium) * 206) / totalMedium;
    }, [data?.data?.by_difficulty?.medium, statisticData?.data?.difficulty_distribution?.medium]);

    const hardHeight = useMemo(() => {
        if (!data?.data?.by_difficulty?.hard || !statisticData?.data?.difficulty_distribution?.hard) return 0;
        const totalHard = data?.data?.by_difficulty?.hard;
        const solvedHard = statisticData?.data?.difficulty_distribution?.hard;
        return ((totalHard - solvedHard) * 206) / totalHard;
    }, [data?.data?.by_difficulty?.hard, statisticData?.data?.difficulty_distribution?.hard]);  

    return (
        <Box p={'48px 0'}>
            <Box {...css.item}>
                <Heading {...css.title}>Analitics</Heading>
                <Flex mt={'36px'} justifyContent={'space-between'}>
                    <Flex flexDirection={'column'}>
                        <Box
                            height={`${206 - easyHeight}px`}
                            {...css.list}>{data?.data?.by_difficulty?.easy}</Box>
                        <Box
                            height={`${easyHeight}px`}
                            bg={'#52A28A'} {...css.lists}>{statisticData?.data?.difficulty_distribution?.easy}</Box>
                        <Heading color={'#52A28A'} {...css.name}>Easy</Heading>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Box height={`${206 - mediumHeight}px`} {...css.list}>{data?.data?.by_difficulty?.medium}</Box>
                        <Box height={`${mediumHeight}px`} bg={'#FFBF1E'} {...css.lists}>{statisticData?.data?.difficulty_distribution?.medium}</Box>
                        <Heading color={'#FFBF1E'} {...css.name}>Medium</Heading>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Box height={`${206 - hardHeight}px`} {...css.list}>{data?.data?.by_difficulty?.hard}</Box>
                        <Box height={`${hardHeight}px`} bg={'#FF6063'} {...css.lists}>{statisticData?.data?.difficulty_distribution?.hard}</Box>
                        <Heading color={'#FF6063'} {...css.name}>Hard</Heading>
                    </Flex>
                </Flex>
                <GaugeChart />
            </Box>
        </Box>
    );
}

export default Analitcs;

const css = {
    title: {
        fontSize: "22px",
        fontWeight: "500"
    },
    item: {
        background: "#EDF2FF",
        borderRadius: "15px",
        padding: "16px 24px"
    },
    list: {
        borderRadius: "20px 20px 0px 0px",
        // height: "103px",
        width: "80px",
        background: "#D9DFEF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        lineHeight: "28px"
    },
    lists: {
        borderRadius: "0px 0px 20px 20px",
        // height: "103px",
        width: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "22px",
        lineHeight: "28px",
    },
    name: {
        fontSize: "20px",
        fontWeight: "500",
        textAlign: "center",
        marginTop: "12px"
    }
}
