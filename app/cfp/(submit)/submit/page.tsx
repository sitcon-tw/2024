import Title from '@/components/cfp/Title'

function ColorNumber({ n, color }: { n: number; color: string }) {
  return <span className={`text-[${color}] text-6xl text-center`}>{n}</span>
}

type EventProp = {
  time: [number, string, number | string]
  // [2023, 'Nov.', 19]
  // [2023, 'Nov.', 下旬]

  endTime?: [number, string, number | string]

  type: ('general' | 'undefined' | 'poster' | 'SITCON')[]

  name: string

  desc?: string
}

function Event({ time, endTime, type, name, desc }: EventProp) {
  const typeColor = {
    'general': 'bg-[#AC24FF]',
    'undefined': 'bg-[#FF3495]',
    'poster': 'bg-[#0CE295]',
    'SITCON': 'bg-[#46A5FD]',
  }

  function zero(n: number | string) {
    if (typeof n === 'string') return n

    if (n < 10) return `0${n}`
    return `${n}`

  }

  return <div className="h-[110px] w-[512px] flex border border-[0.5px] border-[#D9D9D9] rounded shadow-[0px_4px_8px_0px_#0000001A] my-6">
    <div className="flex flex-col">
      {type.map(type => <div key={type} className={`${typeColor[type]} w-[5px] flex-grow first:rounded-tl-[3.5px] last:rounded-bl-[3.5px]`} />)}
    </div>
    <div className="flex flex-col items-center p-2">
      <span className="text-[#E5C366]">{time[0]}</span>
      <span className="text-[#E5C366] text-2xl">{time[1]}</span>
    </div>
    <div className={`text-[#E5C366] flex flex-col items-center py-2 px-1 ${typeof time[2] === 'string' ? 'text-2xl' : 'text-5xl'}`}>
      <span>{zero(time[2])}</span>
      {/* todo: endTime */}
    </div>
    {/* todo: align */}
    <div className="text-[#808080] my-2 mx-4 flex flex-col">
      <span className="text-[32px] font-bold">{name}</span>
      <span>{desc}</span>
    </div>
  </div>
}

export default function Page() {
  return (
    <div className="container flex flex-col gap-6">
      <Title content="投稿頁面" />

      {/* count down */}
      <div className="flex flex-col items-center gap-4">
        <p>距離投稿截止還有：</p>
        <div className="w-full border-[#E5C366] border-2 rounded-full py-[50px] px-[100px] grid grid-cols-4">
          <span className="text-[#FF3495] text-6xl text-center">99</span>
          <span className="text-[#46A5FD] text-6xl text-center">99</span>
          <span className="text-[#0CE295] text-6xl text-center">99</span>
          <span className="text-[#AC24FF] text-6xl text-center">99</span>
          <span className="font-medium text-[#E5C366] text-center">
            DAYS
          </span>
          <span className="font-medium text-[#E5C366] text-center">
            HOURS
          </span>
          <span className="font-medium text-[#E5C366] text-center">
            MINUTES
          </span>
          <span className="font-medium text-[#E5C366] text-center">
            SECONDS
          </span>
        </div>
        <p className="text-sm font-bold">截止日期</p>
        <p>即日起至 2024 年 1 月 20 日（六）23:59</p>
      </div>

      {/* submit botton */}
      <div className="flex justify-center">
        <button className="bg-[#E5C366] text-white h-[60px] w-[196px] rounded-full">
          立刻投稿
        </button>
      </div>

      {/* time table */}
      <div className="flex flex-col gap-4 pt-16">
        <div className="flex items-center gap-6">
          <h2 className="text-[32px] font-medium">時程表</h2>
          <div className="bg-[#AC24FF1A] text-[#AC24FF] rounded-full w-[110px] h-[40px] flex justify-center items-center">
            <span>一般議程</span>
          </div>
          <div className="text-[#FF3495] border border-[#FF3495] rounded-full w-[110px] h-[40px] flex justify-center items-center">
            <span>開放式議程</span>
          </div>
          <div className="text-[#0CE295] border border-[#0CE295] rounded-full w-[110px] h-[40px] flex justify-center items-center">
            <span>海報</span>
          </div>
        </div>

        <div>
          <Event time={[2023, 'Nov.', 19]} name="開始徵稿" type={['general', 'undefined', 'poster']} />
          <Event time={[2024, 'Jan.', 20]} name="投稿截止" type={['general', 'undefined', 'poster']} desc="至 2024 年 1 月 20 日（六）23:59" />
          <Event time={[2024, 'Jan.', '下旬']} name="稿件錄取通知" type={['general', 'undefined', 'poster']} />
          <Event time={[2024, 'Jan.', '下旬']} endTime={[2024, 'Feb.', '中旬']} name="試講" type={['general', 'undefined']} />
          <Event time={[2024, 'Feb.', 18]} name="錄取海報檔案上傳截止" type={['poster']} />
          <Event time={[2024, 'Mar.', 8]} name="彩排" type={['general', 'undefined']} />
          <Event time={[2024, 'Mar.', 9]} name="年會" type={['SITCON']} />

        </div>


      </div>
    </div>
  )
}
