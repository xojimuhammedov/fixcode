import React from 'react';
import Navbar from '../../components/Navbar';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Main from './components/Main';
import Analitcs from './components/Analitics';
import Badge from './components/Badge';
import GitHubCalendar from 'react-github-calendar';
import BottomComponents from './components/BottomComponents';

const ProfilePage = () => {
    return (
        <Box className='container'>
            <Navbar />
            <Flex gap={'20px'} mt={'30px'}>
                <Main />
                <Flex gap={'20px'} flexDirection={'column'} w={'calc(100% - 406px)'}>
                    <Flex gap={'20px'}>
                        <Analitcs />
                        <Badge />
                    </Flex>
                    <Box {...css.item}>
                        <Heading {...css.name}>0 submissions in the past one year</Heading>
                        <GitHubCalendar year={2023} style={{ width: "100%", marginTop:"24px" }} colorScheme='light' username="Muhammadislom-Dev" />
                    </Box>
                    <BottomComponents />
                </Flex>
            </Flex>
        </Box>
    );
}

export default ProfilePage;


const css = {
    item: {
        background: "#EDF2FF",
        borderRadius: "15px",
        padding: "26px 20px 26px 21px",
        width: "100%"
    },
    name: {
        fontSize: "17px",
        fontWeight: "500",
        marginBottom:"12px"
    }
}