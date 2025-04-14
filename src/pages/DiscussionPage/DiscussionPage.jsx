import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import AboutPage from './components/AboutPage';

const DiscussionPage = () => {
    return (
        <Box className='container'>
            <Navbar />
            <AboutPage />
        </Box>
    );
}

export default DiscussionPage;
