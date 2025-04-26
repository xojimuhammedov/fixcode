import React from 'react';
import {
    Box,
    Text,
    Flex,
    useColorModeValue,
    extendTheme
} from '@chakra-ui/react';

// ChakraUI temasini sozlash (ixtiyoriy)
const theme = extendTheme({
    colors: {
        gaugeColors: {
            red: "#f87171",
            yellow: "#fbbf24",
            green: "#4ade80",
            gray: "#e2e8f0"
        }
    }
});

// Gauge komponenti
const GaugeChart = ({ value = 432, total = 684 }) => {


    // SVG path hisoblash uchun parametrlar
    const radius = 80;
    const thickness = 30;
    const startAngle = -180;
    const endAngle = 0;

    // Path yaratish uchun funksiya
    const createArc = (startPercent, endPercent) => {
        const start = startAngle + (startPercent / 100) * (endAngle - startAngle);
        const end = startAngle + (endPercent / 100) * (endAngle - startAngle);

        const startRadians = (start * Math.PI) / 180;
        const endRadians = (end * Math.PI) / 180;

        const startX = radius * Math.cos(startRadians);
        const startY = radius * Math.sin(startRadians);
        const endX = radius * Math.cos(endRadians);
        const endY = radius * Math.sin(endRadians);

        const largeArcFlag = end - start <= 180 ? 0 : 1;

        const outerStartX = (radius + thickness) * Math.cos(startRadians);
        const outerStartY = (radius + thickness) * Math.sin(startRadians);
        const outerEndX = (radius + thickness) * Math.cos(endRadians);
        const outerEndY = (radius + thickness) * Math.sin(endRadians);

        return `
      M ${startX} ${startY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      L ${outerEndX} ${outerEndY}
      A ${radius + thickness} ${radius + thickness} 0 ${largeArcFlag} 0 ${outerStartX} ${outerStartY}
      Z
    `;
    };

    // Har bir soha uchun pathlar
    const redPath = createArc(0, 25); // 25%
    const yellowPath = createArc(25, 40); // 15%
    const greenPath = createArc(40, 65); // 25%
    const grayPath = createArc(65, 100); // Qolgan qismi

    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            bg="blue.50"
            // p={6}
            borderRadius="lg"
            mt={'48px'}
            w="100%"
            maxW="300px"
        >
            <Box position="relative" w="full" h="160px">
                <Box as="svg" viewBox="-110 -110 220 130" w="full" h="full">
                    <Box as="path" d={grayPath} fill="#e2e8f0" />
                    <Box as="path" d={redPath} fill="#f87171" />
                    <Box as="path" d={yellowPath} fill="#fbbf24" />
                    <Box as="path" d={greenPath} fill="#4ade80" />
                </Box>

                <Flex
                    position="absolute"
                    inset="0"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    mt={'48px'}
                >
                    <Text color="gray.400" fontSize="lg">All</Text>
                    <Flex alignItems="baseline">
                        <Text fontSize="22px" fontWeight="500">{value}</Text>
                        <Text fontSize="14px" fontWeight={'500'} color="gray.400" ml={2}>/ {total}</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
};

export default GaugeChart
