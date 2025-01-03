import BoxScore from '@/components/BoxScore';
import Banner from '@/shared/components/Banner';

export default function BoxScorePage() {
  return (
    <section>
      <div className="mt-[100px]">
        <Banner
          title="박스스코어"
          description="박스스코어 정보를 알려드립니다."
        />
      </div>
      <BoxScore />
    </section>
  );
}
