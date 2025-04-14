import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../../components/Navbar';
import ContestList from './components/ContestList';

const ContestPage = () => {
    return (
        <Box className='container'>
            <Navbar />
            <ContestList />
        </Box>
    );
}

export default ContestPage;
