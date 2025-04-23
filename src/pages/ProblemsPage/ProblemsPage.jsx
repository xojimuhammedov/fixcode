import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import Filter from './components/Filter';
import Analitcs from './components/Analitcs';

const ProblemsPage = () => {
    return (
        <Box className='container'>
            <Navbar />
            <Flex gap={'60px'}>
                <Box w={'68%'}>
                    <Filter />
                </Box>
                <Box w={'32%'}>
                    <Analitcs />
                </Box>
            </Flex>
        </Box>
    );
}

export default ProblemsPage;
