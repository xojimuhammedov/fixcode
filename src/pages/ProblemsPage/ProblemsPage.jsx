import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import Filter from './components/Filter';
import Analitcs from './components/Analitcs';
import useGetAllQuery from '../../hooks/useGetAllQuery';
import MyDatePicker from '../../components/DatePicker';

const ProblemsPage = () => {
    const { data } = useGetAllQuery({
        key: "getAllHistoryStatisticOverview",
        url: `/api/v1/problems/statistics/overview`,
        params: {}
    })

    return (
        <Box className='container'>
            <Navbar />
            <Flex gap={'60px'}>
                <Box w={'72%'}>
                    <Filter numberData={data?.data} />
                </Box>
                <Box w={'28%'}>
                    {/* <MyDatePicker /> */}
                    <Analitcs data={data} />
                </Box>
            </Flex>
        </Box>
    );
}

export default ProblemsPage;
