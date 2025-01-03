import { flexColumnCenter, flexRow, flexRowCenter } from '@/styles/flex';
import { convertDateString } from '@/shared/lib/convertDateString';
import { ArrowLeft, ArrowRight, CalendarDays, Eye, List } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/shared/components';
import Link from 'next/link';
import { replacePathToImgSrc } from '@/shared/lib/replacePathToImgSrc';
import { NewsArticleData } from '@/interface/media';

const NewsArticle = ({articleData}: {articleData: NewsArticleData}) => {

  const htmlString = articleData.artcContents;
  const baseUrl = "https://www.ktwiz.co.kr";

  return (
    <div>
      <div className={`${flexRow} justify-between items-center justify-items-center h-[60px] px-4 bg-[#ECEEF2] rounded-b-lg`}>
        <div className="text-lg">{articleData.artcTitle}</div>
        <div className={`${flexRow} justify-end h-6 gap-2`}>
          <span className={`${flexRowCenter} text-xs text-slateGray`}>
            <CalendarDays color="#717781" className="h-4"/>
            {convertDateString(articleData.regDttm)}
          </span>
          <span className={`${flexRowCenter} w-12 text-xs text-slateGray`}>
            <Eye color="#717781" className="h-4"/>
            {articleData.viewCnt}
          </span>
        </div>
      </div>
      <div className={`${flexColumnCenter} mt-4 p-8 bg-[#ECEEF2] rounded-lg`}>
        <div className={`${flexColumnCenter} gap-2 [&_img]:mt-4`}
             dangerouslySetInnerHTML={{__html : replacePathToImgSrc(htmlString, baseUrl)}} />
        <div className={`${flexRowCenter} gap-2 mb-4`}>
          <div className={`${flexColumnCenter} w-12 h-12 bg-white rounded cursor-pointer`}>
            <Image src="/sns/kakaotalk.svg" alt="Kakaotalk" width={30} height={30} />
          </div>
          <div className={`${flexColumnCenter} w-12 h-12 bg-white rounded cursor-pointer`}>
            <Image src="/sns/facebook.svg" alt="Kakaotalk" width={30} height={30} />
          </div>
          <div className={`${flexColumnCenter} w-12 h-12 bg-white rounded cursor-pointer`}>
            <Image src="/sns/x.svg" alt="Kakaotalk" width={30} height={30} />
          </div>
        </div>
      </div>
      <div className={`${flexRow} justify-between items-center justify-items-center h-[50px] mt-4 mb-6 px-4 bg-[#ECEEF2] rounded-lg`}>
        <div className={`${flexRow} gap-2`}>
          <Link href={articleData.artcPrevSeq !== 0 ? `/media/wiznews/${articleData.artcPrevSeq}` : "javascript:void(0);"}>
            <div>
              <Button className="h-8" variant="default">
                <span className={`${flexRowCenter} text-xs gap-2`}><ArrowLeft />이전</span>
              </Button>
            </div>
          </Link>
          <Link href={articleData.artcNextSeq !== 0 ? `/media/wiznews/${articleData.artcNextSeq}` : "javascript:void(0);"}>
            <div>
              <Button className="h-8" variant="default">
                <span className={`${flexRowCenter} text-xs gap-2`}>다음<ArrowRight /></span>
              </Button>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/media/wiznews">
            <Button className="h-8" variant="default">
              <span className={`${flexRowCenter} text-xs gap-2`}><List />목록보기</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsArticle;