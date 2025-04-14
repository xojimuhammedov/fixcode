import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';

const AboutProblemsPage = () => {
    return (
        <Box className='container'>
            <Navbar />
            <SimpleGrid mt={'36px'} gap={'12px'} columns={2}>
                <LeftComponent />
                <RightComponent />
            </SimpleGrid>
        </Box>
    );
}

export default AboutProblemsPage;
