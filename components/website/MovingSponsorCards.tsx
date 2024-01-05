import { InfiniteMovingCards } from "./InfiniteMovingCards";
import SponsorCard from "./SponsorCard";
import sponsorData from "../../app/(website)/sponsor/sponsorData";
export default function MovingSponsorCards() {
  const data = [
    ...sponsorData.specialThanks,
    ...sponsorData.mediaPartners,
    ...sponsorData.sponsors.map((x) => x.items).flat(),
  ];
  return (
    <div className="relative mb-4 mt-8 flex flex-col items-center justify-center overflow-hidden rounded-md border-b border-t border-[#4620021A] antialiased">
      <InfiniteMovingCards direction="right" speed="slow">
        {data.slice(0, data.length / 2).map((sponsor, i) => (
          <SponsorCard
            data={sponsor}
            key={i}
            className="w-[120px] md:w-[180px]"
          />
        ))}
      </InfiniteMovingCards>
      <div className="w-full border-t border-[#4620021A]" />
      <InfiniteMovingCards direction="right" speed="slow">
        {data.slice(data.length / 2, data.length).map((sponsor, i) => (
          <SponsorCard
            data={sponsor}
            key={i}
            className="w-[120px] md:w-[180px]"
          />
        ))}
      </InfiniteMovingCards>
    </div>
  );
}
