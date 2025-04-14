import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import useGetAllQuery from '../../../hooks/useGetAllQuery';

const Analitcs = () => {
    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    const { data } = useGetAllQuery({
        key: "getAllHistoryStatistic",
        url: `/api/v1/submissions/statistics/user/${userData?.data?.id}`,
        params: {}
    })
    return (
        <Box>
            <Box {...css.item}>
                <Heading {...css.title}>Analitics</Heading>
                <Flex mt={'36px'} justifyContent={'space-between'}>
                    <Flex flexDirection={'column'}>
                        <Box {...css.list}>{data?.data?.total_submissions}</Box>
                        <Box bg={'#52A28A'} {...css.lists}>{data?.data?.
                            difficulty_distribution?.easy}</Box>
                        <Heading color={'#52A28A'} {...css.name}>Easy</Heading>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Box {...css.list}>{data?.data?.total_submissions}</Box>
                        <Box bg={'#FFBF1E'} {...css.lists}>{data?.data?.
                            difficulty_distribution?.medium}</Box>
                        <Heading color={'#FFBF1E'} {...css.name}>Medium</Heading>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Box {...css.list}>{data?.data?.total_submissions}</Box>
                        <Box bg={'#FF6063'} {...css.lists}>{data?.data?.
                            difficulty_distribution?.hard}</Box>
                        <Heading color={'#FF6063'} {...css.name}>Hard</Heading>
                    </Flex>
                </Flex>
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
        padding: "26px 20px 26px 21px",
        width: "339px",
        height: "343px"
    },
    list: {
        borderRadius: "20px 20px 0px 0px",
        height: "103px",
        width: "72px",
        background: "#D9DFEF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        lineHeight: "28px"
    },
    lists: {
        borderRadius: "0px 0px 20px 20px",
        height: "103px",
        width: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "22px",
        lineHeight: "28px"
    },
    name: {
        fontSize: "16px",
        fontWeight: "500",
        textAlign: "center",
        marginTop: "12px"
    }
}
