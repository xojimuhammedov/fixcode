import {
    Box, Table,
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
    HStack,
    Button,
    Badge,
    IconButton,
    VStack,
    Text,
} from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import SolutionIcon from '../../../assets/SolutionIcon';
import LockIcon from '../../../assets/LockIcon';
import CheckIcon from '../../../assets/CheckIcon';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import RightIcon from '../../../assets/RightIcon';
import { useNavigate } from 'react-router-dom';
import ArrowIcon from '../../../assets/ArrowIcon';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';
import Pagination from '../../../components/Pagination';

const MotionBox = motion(Box);
const ITEMS_PER_PAGE = 10;

const Filter = ({ numberData }) => {
    const navigate = useNavigate()
    const [status, setStatus] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTags, setSelectedTags] = useState([]);
    const [search, setSearch] = useState(null)
    const [showAll, setShowAll] = useState(false);
    const maxVisibleTags = 7; // Nechta tag birinchi qatorda chiqishi (ikonacha ko'rinishidan oldin)
    const [situation, setSituation] = useState(null)
    const queryString = selectedTags.map(tag => `tags=${encodeURIComponent(tag)}`).join("&");
    const { data, isLoading } = useGetAllQuery({
        key: ["getAllProblems", selectedTags, status, search, situation],
        url: `/api/v1/problems?${queryString}`,
        params: {
            difficulty: status,
            search: search,
            status: situation,
        }
    })

    const { data: tagsData } = useGetAllQuery({
        key: "getAllTags",
        url: "/api/v1/problems/tags/all"
    })

    const handleTagClick = (tagName) => {
        setSelectedTags((prevSelected) =>
            prevSelected.includes(tagName)
                ? prevSelected.filter((name) => name !== tagName) // agar oldin bor bo'lsa, olib tashla
                : [...prevSelected, tagName] // bo'lmasa qo'sh
        );
    };

    const visibleTags = tagsData?.data?.slice(0, maxVisibleTags) || [];
    const hiddenTags = tagsData?.data?.slice(maxVisibleTags) || [];

    const paginatedData = useMemo(() => {
        if (!data || !Array.isArray(data?.data?.items)) return [];

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return data?.data?.items?.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [data, currentPage]);


    const totalPages = useMemo(() => {
        if (!data || !Array.isArray(data?.data?.items)) return 0;
        return Math.ceil(data?.data?.items?.length / ITEMS_PER_PAGE);
    }, [data]);


    return (
        <Box p={'48px 0'}>
            <Flex borderBottom={'1px solid rgba(190, 190, 190, 0.40)'} alignItems="center" overflow="auto" p={'16px 0'}>
                <VStack spacing={3} align={'center'}>
                    <HStack align={'center'} flexWrap="wrap" gap={'18px'} spacing={2}>
                        {visibleTags?.map((topic, index) => {
                            const isSelected = selectedTags.includes(topic.name)
                            return (
                                <Box key={index} position="relative">
                                    <Button
                                        borderRadius="full"
                                        onClick={() => handleTagClick(topic?.name)}
                                        bg={isSelected ? "#0153D5" : "white"}
                                        color={isSelected ? "white" : "black"}
                                        border="1px solid"
                                        size="md"
                                        height={'35px'}
                                        fontSize={'14px'}
                                        fontWeight="medium"
                                        _hover={{ bg: isSelected ? "#0142a0" : "#0153D5", color: "white" }}
                                    >
                                        {topic.name}
                                    </Button>
                                    <Badge
                                        position="absolute"
                                        top="-10px"
                                        right="-10px"
                                        borderRadius="full"
                                        bg="#D4E0FF"
                                        p={'4px 12px'}
                                        fontSize="xs"
                                        color="black"
                                        fontWeight={'500'}
                                    >
                                        {numberData?.popular_tags?.[topic?.name]}
                                    </Badge>
                                </Box>
                            )
                        })}

                        {hiddenTags.length > 0 && (
                            <IconButton
                                aria-label={showAll ? "Yopish" : "Ko'proq"}
                                icon={showAll ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                onClick={() => setShowAll(prev => !prev)}
                                borderRadius="full"
                                border="1px solid"
                                bg="white"
                                color="black"
                                _hover={{ bg: "#0153D5", color: "white" }}
                                size="md"
                                flexShrink={0}
                            />
                        )}
                    </HStack>
                    <AnimatePresence>
                        {showAll && (
                            <MotionBox
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                overflow="hidden"
                                width="100%"
                            >
                                <HStack gap={'18px'} spacing={2} flexWrap="wrap" mt={4}>
                                    {hiddenTags.map((topic, index) => {
                                        const isSelected = selectedTags.includes(topic.name);
                                        return (
                                            <Box key={index} position="relative">
                                                <Button
                                                    borderRadius="full"
                                                    onClick={() => handleTagClick(topic?.name)}
                                                    bg={isSelected ? "#0153D5" : "white"}
                                                    color={isSelected ? "white" : "black"}
                                                    border="1px solid"
                                                    size="md"
                                                    height={'35px'}
                                                    fontSize={'14px'}
                                                    fontWeight="medium"
                                                    _hover={{ bg: isSelected ? "#0142a0" : "#0153D5", color: "white" }}
                                                >
                                                    {topic.name}
                                                </Button>
                                                {
                                                    numberData?.popular_tags?.[topic?.name] && (
                                                        <Badge
                                                            position="absolute"
                                                            top="-10px"
                                                            right="-10px"
                                                            borderRadius="full"
                                                            bg="#D4E0FF"
                                                            p={'4px 12px'}
                                                            fontSize="xs"
                                                            color="black"
                                                            fontWeight={'500'}
                                                        >
                                                            {numberData?.popular_tags?.[topic?.name]}
                                                        </Badge>
                                                    )
                                                }

                                            </Box>
                                        );
                                    })}
                                </HStack>
                            </MotionBox>
                        )}
                    </AnimatePresence>
                </VStack>
            </Flex>

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
                        <MenuItem onClick={() => setStatus(null)} fontSize={'14px'} background="#EDF2FF">
                            <Box
                                w={'100%'}
                                textAlign={'center'}
                            >All Lists</Box>
                        </MenuItem>
                        <MenuItem onClick={() => setStatus("easy")} fontSize={'14px'} background="#EDF2FF">
                            <Box
                                borderRadius="100px"
                                background="#4CAF50"
                                color={'#fff'}
                                w={'100%'}
                                textAlign={'center'}
                            >Easy</Box>
                        </MenuItem>
                        <MenuItem onClick={() => setStatus("medium")} fontSize={'14px'} background="#EDF2FF">
                            <Box
                                borderRadius="100px"
                                background="#FFC107"
                                color={'#fff'}
                                w={'100%'}
                                textAlign={'center'}
                            >Medium</Box>
                        </MenuItem>
                        <MenuItem onClick={() => setStatus("hard")} fontSize={'14px'} background="#EDF2FF">
                            <Box
                                borderRadius="100px"
                                background="#F44336"
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
                        w={'100px'}> doesn't
                        <MenuItem onClick={() => setSituation(null)} fontSize={'14px'} background="#EDF2FF">
                            All Lists
                        </MenuItem>
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
            <TableContainer overflow={'hidden'} mt={'40px'}>
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
                                paginatedData?.map((item, index) => (
                                    <Tr cursor={'pointer'} onClick={() => navigate(`/problems/${item?.id}`)} key={index}>
                                        <Td>
                                            {item?.is_solved ? <CheckIcon /> : item?.attempts === 0 ? "" : <Flex align={'center'}>
                                                <ArrowIcon />
                                                {item?.attempts}
                                            </Flex>}
                                        </Td>
                                        <Td>
                                            <Box w="200px">
                                                <Text
                                                    noOfLines={1}
                                                >
                                                    {item?.title}
                                                </Text>
                                            </Box>
                                        </Td>
                                        <Td>
                                            <Flex align={'center'} justify={'center'}> <SolutionIcon /></Flex>
                                        </Td>
                                        <Td>
                                            <Flex align={'center'} justify={'center'}>{item?.acceptance_rate ?? "--"}</Flex>
                                        </Td>
                                        <Td bg={`${item?.difficulty === "medium" ? "#FFC107" : item?.difficulty === 'hard' ? "#F44336" : "#4CAF50"}`} {...css.status} >{item?.difficulty}</Td>
                                        <Td>
                                            <Flex align={'center'} justify={'center'}> <LockIcon /></Flex>
                                        </Td>
                                    </Tr>
                                ))
                            }

                        </Tbody>
                    }
                </Table>
            </TableContainer>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
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
        width: "450px"
    }
}
