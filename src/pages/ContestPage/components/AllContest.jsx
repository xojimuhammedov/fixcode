import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Image, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';
import CardImage from '../../../assets/card.png'
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const AllContest = () => {
    const { data } = useGetAllQuery({
        key: "contestData",
        url: "/api/v1/contests"
    })

    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })

    const { data: myContest } = useGetAllQuery({
        key: "myContestData",
        url: `/api/v1/contests/users/${userData?.data?.id}/participations/`
    })

    console.log(myContest)

    const navigate = useNavigate()
    return (
        <Box {...css.card}>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList gap={'40px'}>
                    <Tab _selected={{ color: "#fff", background: "#0153D5", borderRadius: "10px", padding: "6px 16px", }}>   Past Contests</Tab>
                    <Tab _selected={{ color: "#fff", background: "#0153D5", borderRadius: "10px", padding: "6px 16px", }}>  My Contests</Tab>
                    <Tab _selected={{ color: "#fff", background: "#0153D5", borderRadius: "10px", padding: "6px 16px", }}>  Team Contests</Tab>
                </TabList>
                <TabPanels mt="42px" p={'0'}>
                    <TabPanel>
                        {
                            data?.data?.map((item, index) => (
                                <Flex p={'30px 0'} borderBottom={'1px solid rgba(0, 0, 0, 0.20)'} key={index} align={'center'} justifyContent={'space-between'}>
                                    <Flex gap={'20px'} align={'center'}>
                                        <Image src={CardImage} />
                                        <Box>
                                            <Heading {...css.name}>{item.title}</Heading>
                                            <Text {...css.date}>{dayjs(item.start_date).format("YYYY-MM-DD, hh:mm")}</Text>
                                        </Box>
                                    </Flex>
                                    <Button onClick={() => navigate(`/contest/${item?.id}`)} {...css.button}>Learn More</Button>
                                </Flex>
                            ))
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            myContest?.data?.map((item, index) => (
                                <Flex p={'30px 0'} borderBottom={'1px solid rgba(0, 0, 0, 0.20)'} key={index} align={'center'} justifyContent={'space-between'}>
                                    <Flex gap={'20px'} align={'center'}>
                                        <Image src={CardImage} />
                                        <Box>
                                            <Heading {...css.name}>{item.contest_name}</Heading>
                                            <Text {...css.date}>{dayjs(item.joined_at).format("YYYY-MM-DD, hh:mm")}</Text>
                                        </Box>
                                    </Flex>
                                    {/* <Button onClick={() => navigate(`/contest/${item?.id}`)} {...css.button}>Learn More</Button> */}
                                </Flex>
                            ))
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            myContest?.data?.map((item, index) => (
                                <Flex p={'30px 0'} borderBottom={'1px solid rgba(0, 0, 0, 0.20)'} key={index} align={'center'} justifyContent={'space-between'}>
                                    <Flex gap={'20px'} align={'center'}>
                                        <Image src={CardImage} />
                                        <Box>
                                            <Heading {...css.name}>{item.contest_name}</Heading>
                                            <Text {...css.date}>{dayjs(item.joined_at).format("YYYY-MM-DD, hh:mm")}</Text>
                                        </Box>
                                    </Flex>
                                    {/* <Button onClick={() => navigate(`/contest/${item?.id}`)} {...css.button}>Learn More</Button> */}
                                </Flex>
                            ))
                        }
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default AllContest;


const css = {
    card: {
        borderRadius: "15px",
        background: "#EDF2FF",
        marginTop: "160px",
        padding: "30px"
    },
    name: {
        fontSize: "22px",
        lineHeight: "28px",
        color: "#152B46"
    },
    date: {
        color: "#58626E",
        fontSize: "16px",
        lineHeight: "14px",
        fontWeight: "400",
        marginTop: "12px"
    },
    button: {
        borderRadius: "6px",
        background: "#0153D5",
        padding: "10px 18px",
        color: "#fff",
        transition: "0.3s",

        _hover: {
            background: "#0153D5",
        }
    }
}