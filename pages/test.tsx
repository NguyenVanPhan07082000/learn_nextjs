import { Stack } from "@mui/material";
import * as React from "react";

export interface ITestProps {}

export default function Test(props: ITestProps) {
  const numList = [1, 2, 7, 4, 3, 5];
  const checkBigger5 = numList.filter((i) => {
    if (i > 5) return i;
  });
  let index = numList.findIndex((val) => val == 7);
  const delete3 = numList.filter((i) => {
    if (i !== 3) return i;
  });
  let sort = numList.sort();
  const devMember: any = [
    { Name: "Lê Thành Hiếu", Email: "hieu.lt@oryza.vn" },
    { Name: "Nguyễn Văn Phần", Email: "phan.nv@oryza.vn" },
  ];
  const newMember = { Name: "Nguyễn Hoàng Lâm", Email: "lam.nh@oryza.vn" };
  devMember.push(newMember);
  console.log("devMember", devMember);
  devMember[0] = { ...devMember[0], Age: 27 };
  console.log("devMember27", devMember);
  const newData = { Company: `Oryza JSC` };
  devMember.unshift(newData);
  return (
    <Stack>
      <Stack>Câu 1.1: {checkBigger5.toString()}</Stack>
      <Stack>Câu 1.2: {index + 1}</Stack>
      <Stack>Câu 1.3: {sort.toString()}</Stack>
      <Stack>Câu 1.4: {delete3.toString()}</Stack>
    </Stack>
  );
}
