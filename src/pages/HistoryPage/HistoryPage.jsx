import { Box, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import HistoryList from './components/HistoryList';
import useGetAllQuery from '../../hooks/useGetAllQuery';
import useGetOneQuery from '../../hooks/useGetOneQuery';

const HistoryPage = () => {
    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (userData?.data?.id) {
            setUserId(userData?.data?.id);
        }
    }, [userData]);
    const { data } = useGetOneQuery({
        key: "getAllHistoryStatistic",
        url: userId ? `/api/v1/submissions/statistics/user/${userId}` : null,
        enabled: !!userId
    })

    return (
        <Box>
            <Box className='container'>
                <Navbar />
                <Flex gap={'40px'}>
                    <Box w={'65%'}>
                        <Heading {...css.title}>Practice History</Heading>
                        <HistoryList />
                    </Box>
                    <Box w={'35%'}>
                        <Heading {...css.title}>Summary</Heading>
                        <Box {...css.item}>
                            <Heading {...css.name}>Total Solved</Heading>
                            <Heading {...css.number}>{data?.problems_solved} Problems </Heading>
                            <Flex gap={'24px'}>
                                <Box
                                    borderRadius="6px"
                                    background="#52A28A"
                                    color={'#fff'}
                                    w={'100%'}
                                    textAlign={'center'}
                                >Easy: {data?.difficulty_distribution?.easy}</Box>
                                <Box
                                    borderRadius="6px"
                                    background="#FFBF1E"
                                    color={'#fff'}
                                    w={'100%'}
                                    textAlign={'center'}
                                >Medium: {data?.difficulty_distribution?.medium}</Box>
                                <Box
                                    borderRadius="6px"
                                    background="#FF6063"
                                    color={'#fff'}
                                    w={'100%'}
                                    textAlign={'center'}
                                >Hard: {data?.difficulty_distribution?.hard}</Box>
                            </Flex>
                        </Box>
                        <Box {...css.item}>
                            <Flex justify={'space-between'}>
                                <Flex gap={'12px'} flexDirection={'column'}>
                                    <Heading fontWeight={'500'} fontSize={'16px'}>Submission</Heading>
                                    <Heading fontWeight={'500'} color={'#FFBF1E'} fontSize={'30px'}>{data?.total_submissions}</Heading>
                                </Flex>
                                <Flex gap={'12px'} flexDirection={'column'}>
                                    <Heading fontWeight={'500'} fontSize={'16px'}>Acceptance</Heading>
                                    <Heading fontWeight={'500'} color={'#52A28A'} fontSize={'30px'}>{data?.accepted_submissions}</Heading>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}

export default HistoryPage;

const css = {
    title: {
        fontSize: "24px",
        lineHeight: "normal",
        fontWeight: "600",
        margin: "30px 0"
    },
    name: {
        fontSize: "20px",
        lineHeight: "normal",
        fontWeight: "600",
    },
    item: {
        borderRadius: "15px",
        background: "#EDF2FF",
        padding: "24px 20px",
        marginTop: "40px"
    },
    number: {
        fontSize: "24px",
        lineHeight: "normal",
        fontWeight: "600",
        color: "#0153D5",
        margin: "20px 0"
    }
}