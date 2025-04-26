import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import GaugeChart from './Guechart';
import useGetAllQuery from '../../../hooks/useGetAllQuery';

const Analitcs = ({ data }) => {
    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    const { data: statisticData } = useGetAllQuery({
        key: "getAllHistoryStatistic",
        url: `/api/v1/submissions/statistics/user/${userData?.data?.id}`,
        params: {}
    })
    const easyHeight = (data?.data?.by_difficulty?.easy - statisticData?.data?.difficulty_distribution?.easy) * 206 / data?.data?.by_difficulty?.easy
    const mediumHiehgt = (data?.data?.by_difficulty?.medium - statisticData?.data?.difficulty_distribution?.medium) * 206 / data?.data?.by_difficulty?.medium
    const hardHiehgt = (data?.data?.by_difficulty?.hard - statisticData?.data?.difficulty_distribution?.medium) * 206 / data?.data?.by_difficulty?.hard


    return (
        <Box p={'48px 0'}>
            <Box {...css.item}>
                <Heading {...css.title}>Analitics</Heading>
                <Flex mt={'36px'} justifyContent={'space-between'}>
                    <Flex flexDirection={'column'}>
                        <Box
                            height={`${easyHeight}px`}
                            {...css.list}>{data?.data?.by_difficulty?.easy}</Box>
                        <Box
                            height={`${206 - easyHeight}px`}
                            bg={'#52A28A'} {...css.lists}>{statisticData?.data?.difficulty_distribution?.easy}</Box>
                        <Heading color={'#52A28A'} {...css.name}>Easy</Heading>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Box height={`${mediumHiehgt}px`} {...css.list}>{data?.data?.by_difficulty?.medium}</Box>
                        <Box height={`${206 - mediumHiehgt}px`} bg={'#FFBF1E'} {...css.lists}>{statisticData?.data?.difficulty_distribution?.medium}</Box>
                        <Heading color={'#FFBF1E'} {...css.name}>Medium</Heading>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Box height={`${hardHiehgt}px`} {...css.list}>{data?.data?.by_difficulty?.hard}</Box>
                        <Box height={`${206 - hardHiehgt}px`} bg={'#FF6063'} {...css.lists}>{statisticData?.data?.difficulty_distribution?.hard}</Box>
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
        width: "90px",
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
        width: "90px",
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
