import Head from 'next/head';
import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { HomeLayout } from '@/components/common';

export interface MusicPagesProps {}

export default function MusicPage(props: MusicPagesProps) {
    return (
        <Stack sx={{ flexDirection: { xs: 'column', md: 'row' }, height: '88vh', pl: 25 }}>
            <Stack sx={{ width: { xs: '90vw', md: '70vw' }, height: '100%' }}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/U7V5rRYafCw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Stack>
            <Stack
                sx={{
                    pl: { xs: 2, md: 10 },
                    maxHeight: '100%',
                    overflow: 'auto',
                    ' &::-webkit-scrollbar': {
                        width: '3px',
                        height: '10px',
                        bgcolor: 'black',
                        cursor: 'pointer',
                    },
                    ' &::-webkit-scrollbar-thumb': {
                        background: 'silver',
                        borderRadius: '6px',
                        width: '6px',
                        cursor: 'pointer',
                    },
                    pt: { xs: 2, md: 0 },
                }}
            >
                <Typography paragraph>Có những tháng ngày</Typography>
                <Typography paragraph>chỉ anh cùng đau buồn</Typography>
                <Typography paragraph>hoà vào cơn mưa chiều thu héo úa</Typography>
                <Typography paragraph>viết lên khúc nhạc</Typography>
                <Typography paragraph>buồn tan tình tan tình</Typography>
                <Typography paragraph>vội lau nhẹ đi khoé mi sầu cho mình</Typography>
                <br />
                <Typography paragraph>Chắc ta quá vội</Typography>
                <Typography paragraph>trót trao tình duyên rồi</Typography>
                <Typography paragraph>giờ người xem ta giống như đùa vui thôi</Typography>
                <Typography paragraph>mắt em hững hờ</Typography>
                <Typography paragraph>có ai nào đâu ngờ</Typography>
                <Typography paragraph>1 ngày 2 ta cách xa</Typography>
                <Typography paragraph>còn ai chờ</Typography>
                <Typography paragraph></Typography>
                <Typography paragraph>Và anh biết duyên mình đã lỡ</Typography>
                <Typography paragraph>phận bọt bèo đâu dám mơ</Typography>
                <Typography paragraph>trèo cao té đau</Typography>
                <Typography paragraph>đành lui về sau</Typography>
                <Typography paragraph>Biết mai này ta mất nhau</Typography>
                <br />
                <Typography paragraph>Phận duyên ta ngắn đành thôi từ đây</Typography>
                <Typography paragraph>một mình anh lê bước về</Typography>
                <Typography paragraph>câu hứa câu thề</Typography>
                <Typography paragraph>mãi chôn vùi trong cơn mê</Typography>
                <Typography paragraph>Nhìn em sanh đôi cùng duyên mới</Typography>
                <Typography paragraph>lòng anh đau thắt nghẹn lời</Typography>
                <Typography paragraph>
                    dẫu biết không thuộc về nhau nhưng sao lòng còn nhớ
                </Typography>
                <br />
                <Typography paragraph>em về nới chốn khuê phòng </Typography>
                <Typography paragraph>anh về nước mắt tuôn dòng</Typography>
                <Typography paragraph>chúc phúc cho em cùng người đến sau như đợi mong </Typography>
                <br />
                <Typography paragraph>dẫu biết là kết thúc chẳng níu kéo sao vẫn đợi</Typography>
                <Typography paragraph>xoá hết từng kí ức từng nỗi nhớ đau thấu trời </Typography>
                <Typography paragraph>
                    anh sẽ chẳng khóc nữa chẳng yếu đuối đâu hỡi người
                </Typography>
                <Typography paragraph>chúc em bình yên thôi bước đi đi môi cười tươi</Typography>
                <br />
                <Typography paragraph>mãi còn đó </Typography>
                <Typography paragraph>tình anh dành cho </Typography>
                <Typography paragraph>ngồi đợi trông ngày hình bóng e sang đò</Typography>
                <br />
                <Typography paragraph>pháo hồng cưới</Typography>
                <Typography paragraph>nhìn em cười tươi</Typography>
                <Typography paragraph>lệ trong tim trào dâng lòng anh đau ngàn đau</Typography>
                <br />
            </Stack>
        </Stack>
    );
}

MusicPage.Layout = HomeLayout;
