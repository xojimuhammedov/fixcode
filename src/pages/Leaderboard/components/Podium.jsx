import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Text,
    Image,
    HStack,
    VStack,
} from "@chakra-ui/react";

export default function IsometricLeaderboard({ data }) {
    const [loaded, setLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState("all");
    const [hoveredUser, setHoveredUser] = useState(null);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 100);
    }, []);

    const leaders = data?.data?.map((item) => ({
        position: item?.rank,
        name: item?.fullname,
        username: item?.username,
        problems: item.problem_score,
        country: "UZ",
        avatar: item.avatar || `https://fixcode-fastapi-636bb.ondigitalocean.app/api/${item?.profile_picture}`,
        stats: {
            algorithm: 1240,
            dataStructure: 890,
            database: 439,
        },
    }));



    // const leaders = [
    //     {
    //         position: 1,
    //         name: "Alex",
    //         username: "@alexcoder",
    //         problems: 2569,
    //         country: "PT",
    //         avatar: "/api/placeholder/100/100",
    // stats: {
    //     algorithm: 1240,
    //     dataStructure: 890,
    //     database: 439,
    // },
    //     },
    //     {
    //         position: 2,
    //         name: "Sophie",
    //         username: "@sophdev",
    //         problems: 1449,
    //         country: "FR",
    //         avatar: "/api/placeholder/100/100",
    //         stats: {
    //             algorithm: 720,
    //             dataStructure: 509,
    //             database: 220,
    //         },
    //     },
    //     {
    //         position: 3,
    //         name: "Ethan",
    //         username: "@ethancodes",
    //         problems: 1054,
    //         country: "CA",
    //         avatar: "/api/placeholder/100/100",
    //         stats: {
    //             algorithm: 502,
    //             dataStructure: 401,
    //             database: 151,
    //         },
    //     },
    // ];

    const ordered = [
        leaders?.find((l) => l?.position === 2),
        leaders?.find((l) => l?.position === 1),
        leaders?.find((l) => l?.position === 3),
    ];

    const flagEmojis = {
        UZ: "🇺🇿",
        FR: "🇫🇷",
        CA: "🇨🇦",
    };

    const tabLabels = {
        all: "All Problems",
        algorithm: "Algorithms",
        dataStructure: "Data Structures",
        database: "Databases",
    };

    const medalColors = {
        1: ["yellow.300", "yellow.500"],
        2: ["gray.300", "gray.500"],
        3: ["orange.400", "orange.600"],
    };

    const podiumHeight = {
        1: 32,
        2: 24,
        3: 20,
    };

    return (
        <Box minH="40vh" p={8}>
            <VStack spacing={8}>

                {/* Podium */}
                <Flex
                    mt={12}
                    justify="center"
                    align="flex-end"
                    gap={6}
                    transition="all 0.7s ease"
                >
                    {ordered?.map((leader, idx) => {
                        const pos = leader?.position;
                        const isHover = hoveredUser === pos;
                        const problemCount =
                            activeTab === "all"
                                ? leader?.problems
                                : leader?.stats[activeTab] ?? 0;

                        return (
                            <VStack
                                key={pos}
                                spacing={3}
                                onMouseEnter={() => setHoveredUser(pos)}
                                onMouseLeave={() => setHoveredUser(null)}
                                transform={isHover ? "scale(1.05)" : "scale(1)"}
                                transition="0.3s ease"
                            >
                                {/* Avatar & Crown */}
                                <Box position="relative">
                                    <Box
                                        w="24"
                                        h="24"
                                        borderRadius="full"
                                        bgGradient={`linear(to-br, ${medalColors[pos]?.[0]}, ${medalColors[pos]?.[1]})`}
                                        p={1}
                                    >
                                        <Image
                                            src={leader?.avatar}
                                            alt={leader?.name}
                                            w="full"
                                            h="full"
                                            borderRadius="full"
                                            border="2px solid white"
                                        />
                                    </Box>

                                    <Text
                                        position="absolute"
                                        right="-2"
                                        bottom="-2"
                                        w="8"
                                        h="8"
                                        bg="gray.800"
                                        borderRadius="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontWeight="bold"
                                        color="#fff"
                                        fontSize="sm"
                                        border="1px solid white"
                                    >
                                        {pos}
                                    </Text>

                                    {idx === 1 && (
                                        <Text
                                            fontSize="2xl"
                                            position="absolute"
                                            top="-8"
                                            left="50%"
                                            transform="translateX(-50%)"
                                            animation="bounce 2s infinite"
                                        >
                                            👑
                                        </Text>
                                    )}
                                </Box>

                                {/* Info */}
                                <VStack spacing={1}>
                                    <HStack>
                                        <Text fontSize="xl">{flagEmojis[leader?.country]}</Text>
                                        <Text fontWeight="bold" color="#000">
                                            {leader?.name}
                                        </Text>
                                    </HStack>
                                    <Text fontSize="sm" color="blue.800">
                                        {leader?.username}
                                    </Text>
                                    <Box
                                        px={4}
                                        py={1}
                                        bg="blue.600"
                                        borderRadius="full"
                                        color="white"
                                        fontSize="sm"
                                        boxShadow="md"
                                    >
                                        <Text fontWeight="semibold" as="span">
                                            {problemCount}
                                        </Text>{" "}
                                        {tabLabels[activeTab]}
                                    </Box>
                                </VStack>

                                {/* Podium block */}
                                <Box
                                    w="56"
                                    h={`${podiumHeight[pos]}vh`}
                                    bgGradient="linear(to-b, #0063FF 0%, #85B4FF 70.33%)"
                                    position="relative"
                                    borderRadius="md"
                                    boxShadow="xl"
                                >
                                    <Text
                                        position="absolute"
                                        bottom={isHover ? "2rem" : "1rem"}
                                        w="full"
                                        textAlign="center"
                                        fontSize="4xl"
                                        fontWeight="bold"
                                        color="whiteAlpha.800"
                                        transition="0.3s"
                                    >
                                        {pos}
                                    </Text>
                                </Box>
                            </VStack>
                        );
                    })}
                </Flex>
            </VStack>

            {/* Bouncing Keyframe */}
            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
        </Box>
    );
}
