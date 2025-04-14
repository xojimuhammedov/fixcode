import { Box } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import React from 'react';

const Coding = () => {
    return (
        <Box p={'48px 0'}>
            <Box className='container'>
                <Editor height="52vh"
                    onChange={(item) => setCodeValue(item)}
                    defaultLanguage="python" defaultValue="// some comment" />
            </Box>
        </Box>
    );
}

export default Coding;
