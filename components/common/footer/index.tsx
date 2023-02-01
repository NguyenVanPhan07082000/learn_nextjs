import React from 'react';
import { Box, Stack } from '@mui/material';

export interface FooterProps {}

export default function Footer(props: FooterProps) {
    return (
        <Stack>
            <Stack display={{ xs: 'none', md: 'flex' }}>hello</Stack>
        </Stack>
    );
}
