'use client';

import { useState, useEffect } from 'react';
import { flexColumnCenter, flexRowSpaceBetween } from '@/styles/flex';
import { Button } from '@/shared/components';
import Input from '@/shared/components/Input';
import { fetchStoryVideo } from '@/api/wiztv/useGetWiztv';
import WiztvCard from './WiztvCard';
import PaginationFooter from '@/shared/components/Pagination';
import Skeleton from './Skeleton';

export default function WiztvDaily() {
  const [videoData, setVideoData] = useState<HighlightItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const calculatedPageList = (totalPages: number) => {
    return Math.round(totalPages / 5);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchStoryVideo('캠프', 12, 1);
        setVideoData(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <section>
      {/* 검색창 */}
      <div className="w-full my-4 h-16 bg-[#ECEEF2]/50 border-y border-y-[#ECEEF2]">
        <div className={`container-default !py-0 ${flexRowSpaceBetween}`}>
          <p className={`${flexColumnCenter} ml-3`}>
            경기를 위해 훈련하는 선수들을 확인해보세요
          </p>

          <div className={`w-[350px] flex  items-center text-sm mr-6`}>
            <p className="whitespace-nowrap mr-2 ">검색</p>
            <Input
              className="bg-white mr-1"
              placeholder="원하는 키워드로 검색하세요."
            />
            <Button>검색</Button>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 place-items-center">
        {isLoading ? (
          // Skeleton UI
          <>
            <Skeleton width="w-64" height="h-64" className="flex-1" />
            <Skeleton width="w-64" height="h-64" className="flex-1" />
            <Skeleton width="w-64" height="h-64" className="flex-1" />
          </>
        ) : (
          <>
            {videoData.map((item) => (
              <WiztvCard
                key={item.artcSeq}
                imgSrc={item.imgFilePath || '/common/banner.png'}
                Title={item.artcTitle || '영상 제목!'}
                viewCnt={item.viewCnt || '본 사람!'}
                date={item.contentsDate}
                videoLink={item.videoLink}
              />
            ))}
          </>
        )}
      </div>
      <div className="mt-10">
        <PaginationFooter
          totalPages={calculatedPageList(30)}
          currentPage={1}
          handlePage={() => {}}
        />
      </div>
    </section>
  );
}
