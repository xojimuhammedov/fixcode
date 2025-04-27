import React, { useEffect, useState } from 'react';
import useGetAllQuery from '../../../hooks/useGetAllQuery';
import SolutionIcon from '../../../assets/SolutionIcon';
import LockIcon from '../../../assets/LockIcon';
import CheckIcon from '../../../assets/CheckIcon';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Heading
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import useGetOneQuery from '../../../hooks/useGetOneQuery';

const HistoryList = () => {
    const { data: userData } = useGetAllQuery({
        key: "userData",
        url: "/users/me"
    })
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        if (userData?.data?.id) {
            setUserId(userData.data.id);
        }
    }, [userData]);
    const { data, isLoading } = useGetAllQuery({
        key: "getAllHistory",
        url: userId ? `/api/v1/submissions/user/${userId}` : null,
    })
    return (
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
                            data?.data?.items?.map((item, index) => (
                                <Tr key={index}>
                                    <Td>
                                        {dayjs(item?.created_at).format('D MMMM')}
                                    </Td>
                                    <Td>{item?.title}</Td>
                                    <Td {...css.status} >{item?.status}</Td>
                                </Tr>
                            ))
                        }

                    </Tbody>
                }
            </Table>
        </TableContainer>
    );
}

export default HistoryList;

const css = {
    status: {
        fontWeight: "400",
        marginTop: "14px",
    },
    name: {
        color: "#565656",
        fontSize: "14px",
        fontWeight: "400"
    },
}