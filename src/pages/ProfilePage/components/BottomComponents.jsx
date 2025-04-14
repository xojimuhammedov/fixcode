import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import RecentIcon from '../../../assets/RecentIcon';
import ListIcon from '../../../assets/ListIcon';
import SolutionsIcon from '../../../assets/SolutionsIcon';

const BottomComponents = () => {
    return (
        <Box {...css.item}>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab gap="8px" _selected={{ color: "#fff", background: "#0153D5", borderRadius: "10px", padding: "6px 16px", gap: "8px" }}> <RecentIcon />  Recent AC</Tab>
                    <Tab gap="8px" _selected={{ color: "#fff", background: "#0153D5", borderRadius: "10px", padding: "6px 16px", gap: "8px" }}> <ListIcon /> List</Tab>
                    <Tab gap="8px" _selected={{ color: "#fff", background: "#0153D5", borderRadius: "10px", padding: "6px 16px", gap: "8px" }}> <SolutionsIcon /> Solutions</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                        <Flex {...css.list}>
                            <Heading {...css.title}>Remove Duplicates from Sorted Array</Heading>
                            <Text {...css.date}>a month ago</Text>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default BottomComponents;

const css = {
    item: {
        background: "#EDF2FF",
        borderRadius: "15px",
        padding: "26px 20px 26px 21px",
        width: "100%"
    },
    title: {
        fontWeight: "500",
        fontSize: "16px"
    },
    list: {
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        borderRadius: "5px",
        background: "#F6F8FA",
        padding: "14px 15px",
        cursor: "pointer",
        margin:"14px 0"
    }
}
