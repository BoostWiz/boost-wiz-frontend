'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components';
import ktPitcherData from '@/mocks/data/ktPitcherData.json';
import { useState } from 'react';

const KTPitcherTable = () => {
  const ktPitchers = ktPitcherData.data.list;
  const headerContents = [
    '선수명',
    '팀명',
    '평균자책점',
    '경기',
    '승',
    '패',
    '세',
    '홀',
    '승률',
    '이닝',
    '피안타',
    '피홈런',
    '볼넷',
    '사구',
    '탈삼진',
    '실점',
    '자책점',
  ];
  const [sortedBy, setSortedBy] = useState('평균자책점');
  const settingSort = (header: string) => {
    if (header !== '선수명' && header !== '팀명') {
      setSortedBy(header);
    }
  };

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {headerContents.map((headerName) => (
              <TableHead
                key={headerName}
                onClick={() => settingSort(headerName)}
                className={`${headerName === sortedBy ? 'text-[#D60C0C]' : ''} ${headerName == '선수명' || headerName == '평균자책점' ? 'w-12' : 'w-8'} ${headerName != '선수명' && headerName != '팀명' ? 'hover:cursor-pointer hover:text-[#D60C0C]' : ''} p-1 h-1 bg-[#ECEEF2]/30 text-center border border-[#ECEEF2]`}
              >
                {headerName}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ktPitchers.map((pitcher) => (
            <TableRow key={pitcher.pcode} className="hover:bg-[#ECEEF2]/30">
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.playerName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.teamName}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.era}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.gamenum}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.w}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.l}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.sv}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.hold}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.wra}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.inn}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.hit}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.hr}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.bb}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.hp}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.kk}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.r}
              </TableCell>
              <TableCell className="p-1 h-1 text-center text-[#717781] border border-[#ECEEF2]">
                {pitcher.er}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default KTPitcherTable;