import {
    Box, SimpleGrid, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input,
    Heading,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import SolutionIcon from '../../../assets/SolutionIcon';
import LockIcon from '../../../assets/LockIcon';
import CheckIcon from '../../../assets/CheckIcon';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import RightIcon from '../../../assets/RightIcon';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
    const navigate = useNavigate()
    const [status, setStatus] = useState(null)
    const [search, setSearch] = useState(null)
    const [situation, setSituation] = useState(null)
    const { data, isLoading } = useGetAllQuery({
        key: "getAllProblems",
        url: "/api/v1/problems",
        params: {
            difficulty: status,
            search: search,
            status: situation
        }
    })

    const { data: tagsData } = useGetAllQuery({
        key: "getAllTags",
        url: "/api/v1/problems/tags/all"
    })

    return (
        <Box p={'48px 0'}>
            <SimpleGrid gap={'24px'} columns={5}>
                {
                    tagsData?.data?.map((item, index) => (
                        <Box key={index} {...css.item}>{item.name}</Box>
                    ))
                }
            </SimpleGrid>
            <Flex gap={'24px'} align={'center'} mt={'24px'}>
                <Menu isLazy>
                    <MenuButton h={'37px'} display={'flex'} w={'120px'} {...css.button}>
                        <Flex justify={'center'} align={'center'}>
                            Lists <RightIcon />
                        </Flex>
                    </MenuButton>
                    <MenuList
                        borderRadius="5px"
                        background="#EDF2FF"
                        boxShadow="0px 3px 8px 0px rgba(0, 0, 0, 0.24)"
                        w={'229px'}>
                        <MenuItem fontSize={'12px'} background="#EDF2FF">LeetCode Curated Algorithms</MenuItem>
                        <MenuItem fontSize={'12px'} background="#EDF2FF">LeetCode Curated Algorithms</MenuItem>
                        <MenuItem fontSize={'12px'} background="#EDF2FF">LeetCode Curated Algorithms</MenuItem>
                    </MenuList>
                </Menu>
                <Menu isLazy>
                    <MenuButton h={'37px'} display={'flex'} w={'120px'} {...css.button}>
                        <Flex justify={'center'} align={'center'}>
                            Difficulty <RightIcon />
                        </Flex>
                    </MenuButton>
                    <MenuList
                        borderRadius="5px"
                        background="#EDF2FF"
                        boxShadow="0px 3px 8px 0px rgba(0, 0, 0, 0.24)"
                        minW={'110px'}
                        w={'100px'}>
                        <MenuItem onClick={() => setStatus("easy")} fontSize={'12px'} background="#EDF2FF">
                            <Box
                                borderRadius="100px"
                                background="#52A28A"
                                color={'#fff'}
                                w={'100%'}
                                textAlign={'center'}
                            >Easy</Box>
                        </MenuItem>
                        <MenuItem onClick={() => setStatus("medium")} fontSize={'14px'} background="#EDF2FF">
                            <Box
                                borderRadius="100px"
                                background="#FFBF1E"
                                color={'#fff'}
                                w={'100%'}
                                textAlign={'center'}
                            >Medium</Box>
                        </MenuItem>
                        <MenuItem onClick={() => setStatus("hard")} fontSize={'12px'} background="#EDF2FF">
                            <Box
                                borderRadius="100px"
                                background="#FF6063"
                                color={'#fff'}
                                w={'100%'}
                                textAlign={'center'}
                            >Hard</Box>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Menu isLazy>
                    <MenuButton h={'37px'} display={'flex'} w={'120px'} {...css.button}>
                        <Flex justify={'center'} align={'center'}>
                            Status <RightIcon />
                        </Flex>
                    </MenuButton>
                    <MenuList
                        borderRadius="5px"
                        background="#EDF2FF"
                        boxShadow="0px 3px 8px 0px rgba(0, 0, 0, 0.24)"
                        minW={'120px'}
                        w={'100px'}>
                        <MenuItem onClick={() => setSituation("unattempted")} fontSize={'14px'} background="#EDF2FF">
                            UnAttempted
                        </MenuItem>
                        <MenuItem onClick={() => setSituation("solved")} fontSize={'14px'} background="#EDF2FF">
                            Solved
                        </MenuItem>
                        <MenuItem onClick={() => setSituation("attempted")} fontSize={'14px'} background="#EDF2FF">
                            Attempted
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Input onChange={(evt) => setSearch(evt.target.value)} {...css.input} placeholder='Seach...' />
            </Flex>
            <TableContainer mt={'40px'}>
                <Table variant='simple'>
                    <Thead borderRadius={'6px'} bg={'#F6F8FA'}>
                        <Tr>
                            <Th {...css.name}>Status</Th>
                            <Th {...css.name}>Subject</Th>
                            <Th {...css.name}>Solution</Th>
                            <Th {...css.name}>Acceptance</Th>
                            <Th {...css.name}>Difficulty</Th>
                            <Th {...css.name}>Popularity</Th>
                        </Tr>
                    </Thead>
                    {
                        isLoading ? <Heading fontSize={'22px'} position={'relative'} color={'#152B46'} left={'350px'} >Yuklanmoqda...</Heading> : <Tbody>
                            {
                                data?.data?.items?.map((item, index) => (
                                    <Tr cursor={'pointer'} onClick={() => navigate(`/problems/${item?.id}`)} key={index}>
                                        <Td>
                                            {item?.is_active ? <CheckIcon /> : ""}
                                        </Td>
                                        <Td>{item?.title}</Td>
                                        <Td>
                                            <SolutionIcon />
                                        </Td>
                                        <Td>{item?.acceptance_rate ?? "--"}</Td>
                                        <Td bg={`${item?.difficulty === "medium" ? "#358168" : item?.difficulty === 'hard' ? "#FFBF1E" : "#FF6063"}`} {...css.status} >{item?.difficulty}</Td>
                                        <Td>
                                            <LockIcon />
                                        </Td>
                                    </Tr>
                                ))
                            }

                        </Tbody>
                    }
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Filter;

const css = {
    item: {
        borderRadius: "100px",
        border: "0.6px solid rgba(0, 0, 0, 0.60)",
        padding: "8px 13px 10px 14px",
        fontSize: "16px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        height: "30px",
        cursor: "pointer",
        color: "#000",
        transition: "0.3s",
        justifyContent: "center",

        _hover: {
            background: "#0153D5",
            color: "#fff"
        }
    },
    items: {
        borderRadius: "100px",
        background: "rgba(1, 83, 213, 0.30)",
        fontSize: "20px",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        color: "#fff",
        transition: "0.3s",
        justifyContent: "center",
        padding: "12px 20px 13px 20px",
        transition: "0.3s",

        _hover: {
            background: "#0153D5",
        }
    },
    button: {
        borderRadius: "100px",
        border: "0.6px solid rgba(0, 0, 0, 0.60)",
    },
    status: {
        padding: "4px 12px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "400",
        marginTop: "14px",
        cursor: "pointer",
        textTransform: 'uppercase'
    },
    name: {
        color: "#565656",
        fontSize: "14px",
        fontWeight: "400"
    },
    input: {
        borderRadius: "100px",
        border: "0.6px solid rgba(0, 0, 0, 0.60)",
        width: "400px"
    }
}
