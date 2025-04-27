import { Box, Tab, TabList, TabPanels, Tabs, TabPanel, Heading, Text, Flex, Tag } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useGetOneQuery from '../../../hooks/useGetOneQuery';



const LeftComponent = () => {
    const { id } = useParams()

    const { data, error } = useGetOneQuery({
        key: `getOneProblems${id}`,
        url: `/api/v1/problems/${id}`,
        params: {}
    })

    if (error) {
        toast.error(`Behruzni errori: ${error}`)
    }
    
    return (
        <Box {...css.item}>
            <Tabs variant='unstyled'>
                <TabList gap={'18px'}>
                    <Tab borderRadius={'8px'} _selected={{ color: 'white', bg: '#0153D5', borderRadius: "8px" }}>Description</Tab>
                    <Tab borderRadius={'8px'} _selected={{ color: 'white', bg: '#0153D5', borderRadius: "8px" }}>Solution</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Heading {...css.title}>{data?.title}</Heading>
                        <Text {...css.text}>{data?.description}</Text>
                        <Text {...css.text}
                            dangerouslySetInnerHTML={{
                                __html: data?.solution_template
                            }}
                        />
                        <Flex mt={'24px'} gap={'12px'}>
                            {
                                data?.tags?.map((item) => (
                                    <Tag cursor={'pointer'} variant='solid' colorScheme='teal'>{item}</Tag>
                                ))
                            }
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Text {...css.text}
                            dangerouslySetInnerHTML={{
                                __html: data?.solution_template
                            }}
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}

export default LeftComponent;


const css = {
    item: {
        borderRadius: "10px",
        border: "1px solid #C7D8FF",
        background: "#EDF2FF",
        height: "100vh",
        padding: "12px"
    },
    title: {
        fontSize: "24px",
        lineHeight: "30px",
        fontWeight: "500"
    },
    text: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#565656",
        marginTop: "12px"
    }
}