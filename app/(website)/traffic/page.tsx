"use client";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function Tab({
  children,
  selected,
  onSelected,
}: {
  children: ReactNode;
  selected: boolean;
  onSelected: () => void;
}) {
  return (
    <button
      className={twMerge(
        "h-[90px] grow text-xl font-bold transition-all",
        selected &&
          "rounded-xl border-2 border-[#F8C57B] bg-[#F8C57B33] shadow-[0px_4px_20px_0px_#F8C57B6E]",
      )}
      onClick={onSelected}
    >
      {children}
    </button>
  );
}

const icons = {
  mrt: "捷運",
  shuttleBus: "接駁車",
  hsr: "高鐵",
  tra: "臺鐵",
  bus: "公車",
  youbike: "YouBike",
  car: "開車",
} as const;

function Icon({
  type,
  desc,
  className,
}: {
  type: keyof typeof icons;
  desc?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex min-h-[90px] min-w-[60px] flex-col items-center justify-center gap-4 xl:flex-row",
        className,
      )}
    >
      <div className="flex flex-col items-center">
        <img
          src={`/2024/website/${type}.svg`}
          width={45}
          height={50}
          alt={icons[type]}
        />
        <p className="break-keep text-center">{icons[type]}</p>
      </div>
      {desc}
    </div>
  );
}

function H({ className, deco }: { className?: string; deco?: ReactNode }) {
  return (
    <div
      className={twMerge(
        "flex flex-row items-center justify-center gap-1 xl:w-full xl:flex-col-reverse",
        className,
      )}
    >
      <div className="h-full min-h-[40px] w-0 rounded border-2 border-black xl:h-0 xl:min-h-0 xl:w-full xl:min-w-[50px]" />
      {deco}
    </div>
  );
}

function Block({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex h-full w-fit flex-col items-center gap-2 break-keep rounded-xl bg-[#FFD598] p-5 text-center xl:h-fit xl:flex-row",
        className,
      )}
    >
      {children}
    </div>
  );
}

function MyLink({
  className,
  href,
  children,
  ...params
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={twMerge(className, "underline underline-offset-1")}
      target="_blank"
      rel="noopener noreferrer"
      {...params}
    >
      {children}
    </Link>
  );
}

function ShuttleBus() {
  return (
    <div className="grid place-items-center gap-4 xl:grid-flow-col">
      <Icon type="mrt" />
      <H />
      <Block className="xl:flex-col">
        捷運
        <br />
        南港展覽館
        <br />
        2A 出口
        <span className="text-sm">（當天會有人舉牌引導）</span>
      </Block>
      <Icon
        type="shuttleBus"
        desc={
          <p className="">
            發車時間：7:45~10:00
            <br />
            班距：15~20 分鐘一班
          </p>
        }
      />
      <H />
      <Block>
        中研院
        <br />
        人文社會科學館
      </Block>
    </div>
  );
}

function PublicTransportation() {
  const Walking = ({ className }: { className?: string }) => (
    <H
      className={className}
      deco={
        <div className="w-fit">
          <img src="/2024/website/walking.svg" width={23} height={23} alt="" />
          <p className="text-xs">步行</p>
        </div>
      }
    />
  );

  return (
    <div className="grid grid-cols-3 place-items-center gap-4 xl:grid-flow-col xl:grid-cols-none xl:grid-rows-3">
      <div className="flex xl:gap-10">
        <Icon type="hsr" />
        <Icon type="tra" />
      </div>

      <div className="col-span-2 xl:col-span-1 xl:row-span-2">
        <Icon type="mrt" />
      </div>

      {/* ------ */}

      <H />

      <H className="col-span-2 row-span-2 h-full xl:h-0" />

      {/* ------ */}

      <Block className="row-span-2 px-3 xl:col-span-2 xl:row-span-1 xl:w-full">
        高鐵南港站
        <br />
        南港火車站
        <Walking />
        捷運
        <br />
        南港站
        <br />
        2號出口
      </Block>

      {/* -------- */}

      <Block className="px-1 xl:px-5">
        捷運
        <br />
        南港展覽館站
        <br />
        5號 出口
      </Block>

      <Block className="px-1 xl:px-5">
        捷運
        <br />
        南港展覽館站
        <br />
        4號 出口
      </Block>

      {/* -------- */}

      <div className="flex h-full w-full flex-col items-center justify-center gap-2 place-self-start xl:flex-row">
        <Icon type="bus" desc="212 直、270" />
        <H className="grow xl:w-fit" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 place-self-start xl:flex-row">
        <Icon
          type="bus"
          desc={
            <p className="text-center">
              205、212
              <br />
              276、306
              <br />
              306區、645
            </p>
          }
        />
        <H className="grow xl:w-fit" />
      </div>
      <Icon
        type="youbike"
        desc={
          <div className="flex flex-col">
            <p>中研院附近的 YouBike 2.0 站牌 :</p>
            <ol className="ml-4 list-decimal">
              <li>中研院人文社會科學館中</li>
              <li>研院綜合體育館</li>
              <li>東側研究院舊莊街口</li>
            </ol>
          </div>
        }
      />

      {/* -------- */}

      <Block className="col-span-2 w-full xl:col-span-1 xl:row-span-2 xl:h-full ">
        中研院站
      </Block>
      <H className="row-span-2 h-full xl:col-span-2 xl:row-span-1 xl:h-0" />

      {/* -------- */}

      <Walking className="col-span-2 xl:col-span-1 xl:row-span-2" />

      {/* -------- */}

      <Block className="col-span-3 w-full xl:col-span-1 xl:row-span-3 xl:h-full">
        中研院
        <br />
        人文社會科學館
      </Block>
    </div>
  );
}

function Drive() {
  return (
    <div className="grid place-items-center gap-4 xl:grid-flow-col">
      <Icon
        type="car"
        desc={
          <p className="break-keep">
            導航至
            <MyLink href="https://www.google.com/maps/place/%E4%B8%AD%E5%A4%AE%E7%A0%94%E7%A9%B6%E9%99%A2/@25.0422388,121.6116466,17z/data=!4m7!3m6!1s0x3442ab4501e8c151:0x2f2b63fe4251d55c!8m2!3d25.0422388!4d121.6161527!15sCg_kuK3lpK7noJTnqbbpmaKSARJyZXNlYXJjaF9pbnN0aXR1dGXgAQA!16zL20vxlIxNnRr?entry=tts&shorturl=1">
              中央研究院
            </MyLink>
          </p>
        }
      />
      <H />
      <Block>中研院門口</Block>
      <ul className="ml-8 list-disc xl:max-w-[400px]">
        <li>
          中研院內設有停車格，車輛進入院區持證件向大門警衛換證後可駛入院區，計費方式請參考{" "}
          <MyLink href="https://dga.sinica.edu.tw/posts/78705">
            中央研究院院區車輛通行停放管理施行要點。
          </MyLink>
        </li>
        <li>
          機車禁止進入院區，在
          <MyLink href="https://www.google.com.tw/maps/place/%E4%B8%AD%E7%A0%94%E9%99%A2%E6%A9%9F%E8%BB%8A%E6%A3%9A/@25.0439537,121.6154488,19z/data=!4m6!3m5!1s0x3442ab45718bd237:0xb1ab80836cc1e091!8m2!3d25.0439533!4d121.6158427!16s%2Fg%2F11f53mqm33?hl=en&entry=ttu">
            大門右側
          </MyLink>
          、
          <MyLink href="https://www.google.com/maps/place/No.+5,+Alley+1+Lane+61+Section+2+Research+Inst+Rd,+Nangang+District,+Taipei+City,+Taiwan+115/@25.0442333,121.6166216,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ab45615dcee1:0x73054572c84e39c2!8m2!3d25.0442333!4d121.6166216!16s%2Fg%2F11c4x84n9v?hl=en&entry=tts">
            大門對面
          </MyLink>
          與
          <MyLink href="https://www.google.com/maps/place/No.+5,+Alley+1+Lane+61+Section+2+Research+Inst+Rd,+Nangang+District,+Taipei+City,+115/@25.0440778,121.6162484,19z/data=!4m6!3m5!1s0x3442ab45615dcee1:0x73054572c84e39c2!8m2!3d25.0442333!4d121.6166216!16s%2Fg%2F11c4x84n9v?hl=en&entry=ttu">
            胡適公園旁
          </MyLink>
          均設有機車停車場，供員工和來賓停放不予收費（不負保管責任）。
        </li>
        <li>
          <MyLink href="https://dga.sinica.edu.tw/pages/1442">
            中研院區停車 Q&A
          </MyLink>
        </li>
      </ul>
    </div>
  );
}

function TabContent({ tab }: { tab: number }) {
  switch (tab) {
    case 0:
      return <ShuttleBus />;
    case 1:
      return <PublicTransportation />;
    case 2:
      return <Drive />;
    default:
      return <ShuttleBus />;
  }
}

export default function Page() {
  // TODO: 改成 query string
  const [tab, setTab] = useState(1);

  return (
    <>
      <h1 className="mx-8 mb-8 mt-12 text-5xl font-bold xl:mx-[165px] xl:mb-6">
        交通方式
      </h1>
      <h3 className="text-center text-xl font-bold xl:mb-6">
        中央研究院 人文社會科學館
      </h3>
      <h3 className="mt-3 text-center text-xl font-bold">
        台北市南港區研究院路 2 段 128 號
      </h3>
      <div className="container my-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.18734000737!2d121.6113732!3d25.0409679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab46b3aaaaab%3A0x6ad0b8243ddc70ef!2z5Lit5aSu56CU56m26Zmi5Lq65paH56S-5pyD56eR5a246aSo!5e0!3m2!1szh-TW!2stw!4v1705165279899!5m2!1szh-TW!2stw"
          className="h-[400px] w-full md:h-[600px]"
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mb-10 mt-8 flex gap-3 px-3 xl:mx-[165px] xl:mb-[100px]">
        <Tab selected={tab === 0} onSelected={() => setTab(0)}>
          大會接駁車
        </Tab>
        <Tab selected={tab === 1} onSelected={() => setTab(1)}>
          大眾運輸工具
        </Tab>
        <Tab selected={tab === 2} onSelected={() => setTab(2)}>
          自行開車
        </Tab>
      </div>
      <div className="flex w-full items-center justify-center gap-8 px-5 text-xl xl:text-xl ">
        <TabContent tab={tab} />
      </div>
    </>
  );
}
