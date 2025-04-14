import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import dayjs from 'dayjs';

const ContestAboutPage = () => {
    const id = useParams()
    const navigate = useNavigate()
    const { data } = useGetAllQuery({
        key: "contestData",
        url: `/api/v1/contests/${id?.id}`
    })
    return (
        <Box className='container'>
            <Navbar />
            <Box mt={'128px'}>
                <Heading {...css.title}>{data?.data?.title}</Heading>
                <Text {...css.text}>Solve challenges, earn rewards, and climb the leaderboard. Show you're the best coder! </Text>
            </Box>
            <Button onClick={() => navigate(`/discussion/${data?.data?.id}`)} {...css.button}>Go to Contest Discussion</Button>
            <Text {...css.description}>{data?.data?.description}</Text>
            <Box {...css.item}>
                <Flex
                    p={'13px 20px'}
                    borderBottom='1px solid rgba(0, 0, 0, 0.30)'
                    borderRadius="8px"
                    background="#EDF2FF"
                    justify={'space-between'}
                    align={'center'}>
                    <Heading {...css.subname}>Problem List</Heading>
                    <Text>Score</Text>
                </Flex>
                {
                    data?.data?.problems?.map((item, index) => (
                        <Flex
                            p={'13px 20px'}
                            borderBottom='1px solid rgba(0, 0, 0, 0.30)'
                            justify={'space-between'}
                            align={'center'}>
                            <Heading {...css.subname}>{item?.title}</Heading>
                            <Text>{item?.difficulty}</Text>
                        </Flex>
                    ))
                }
            </Box>
        </Box>
    );
}

export default ContestAboutPage;


const css = {
    title: {
        textAlign: "center",
        color: "#152B46",
        fontSize: "58px",
        lineHeight: "66px",
        fontWeight: "700",
        marginBottom: "16px"
    },
    text: {
        color: "#58626E",
        textAlign: "center",
        fontSize: "20px",
        lineHeight: "26px",
        fontWeight: "400",
        width: "500px",
        margin: "auto"
    },
    button: {
        borderRadius: "6px",
        background: "#0153D5",
        padding: "10px 20px",
        color: "#fff",
        transition: "0.3s",
        marginTop: "90px",

        _hover: {
            background: "#0153D5",
        }
    },
    description: {
        fontSize: "20px",
        lineHeight: "34px",
        fontWeight: "400",
        marginTop: "45px"
    },
    item: {
        borderRadius: "8px",
        border: "1px solid rgba(0, 0, 0, 0.30)",
        width: "700px",
        margin: "89px 0"
    },
    subname: {
        fontSize: "20px",
        lineHeight: "34px",
        fontWeight: "500",
    }
}