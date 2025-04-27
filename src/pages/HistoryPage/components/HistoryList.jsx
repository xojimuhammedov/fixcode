import React, { useEffect, useMemo, useState } from 'react';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading,
    Box
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import Pagination from '../../../components/Pagination';
import useGetOneQuery from '../../../hooks/useGetOneQuery';

const ITEMS_PER_PAGE = 10;

const HistoryList = () => {
    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    const [userId, setUserId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (userData?.data?.id) {
            setUserId(userData.data.id);
        }
    }, [userData]);
    const { data, isLoading } = useGetOneQuery({
        key: "getAllHistory",
        url: userId ? `/api/v1/submissions/user/${userId}` : null,
        enabled: !!userId
    })

    const paginatedData = useMemo(() => {
        if (!data || !Array.isArray(data?.items)) return [];

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return data?.items?.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [data?.items, currentPage]);


    const totalPages = useMemo(() => {
        if (!data || !Array.isArray(data?.items)) return 0;
        return Math.ceil(data?.items?.length / ITEMS_PER_PAGE);
    }, [data?.items]);


    return (
        <>
            <TableContainer mt={'40px'}>
                <Table variant='simple'>
                    <Thead borderRadius={'6px'} bg={'#F6F8FA'}>
                        <Tr>
                            <Th {...css.name}>Date</Th>
                            <Th {...css.name}>Subject</Th>
                            <Th {...css.name}>Status</Th>
                            {/* <Th {...css.name}>Popularity</Th> */}
                        </Tr>
                    </Thead>
                    {
                        isLoading ? <Heading fontSize={'22px'} position={'relative'} color={'#152B46'} left={'350px'} >Yuklanmoqda...</Heading> : <Tbody>
                            {
                                paginatedData?.map((item, index) => (
                                    <Tr key={index}>
                                        <Td>
                                            {dayjs(item?.created_at).format('D MMMM')}
                                        </Td>
                                        <Td>{item?.title}
                                            <Box bg={`${item?.difficulty === "medium" ? "#FFC107" : item?.difficulty === 'hard' ? "#F44336" : "#4CAF50"}`} {...css.statusOne} >{item?.difficulty}</Box>
                                        </Td>
                                        <Td color={`${item.status === 'accepted' ? "green" : "red"}`} {...css.status}>{item?.status}</Td>
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
        </>
    );
}

export default HistoryList;

const css = {
    status: {
        fontWeight: "600",
        marginTop: "14px",
    },
    name: {
        color: "#565656",
        fontSize: "14px",
        fontWeight: "400"
    },
    statusOne: {
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "400",
        marginTop: "6px",
        cursor: "pointer",
        textTransform: 'uppercase',
        width: "80px",
        height: "22px"
    },
}