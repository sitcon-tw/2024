import Title from '@/components/cfp/Title'

function ColorNumber({ n, color }: { n: number; color: string }) {
  return <span className={`text-[${color}] text-6xl text-center`}>{n}</span>
}

type EventProp = {
  time: [number, number, number | string]

  endTime?: [number, number, number | string]

  type: ('general' | 'undefined' | 'poster')[]

  name: string

  desc?: string
}

function Event({ time, endTime, type, desc }: EventProp) {
  const typeColor = {
    'general': '#AC24FF',
    'undefined': '#FF3495',
    'poster': '#0CE295',
  }

  return <div>
    <div>
      {type.map(type => <div key={type} className={`bg-[${typeColor[type]}] w-[5px] h-[100px]`} />)}

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
          <ColorNumber n={99} color={'#FF3495'} />
          <ColorNumber n={99} color={'#AC24FF'} />
          <ColorNumber n={99} color={'#46A5FD'} />
          <ColorNumber n={99} color={'#0CE295'} />
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
          {/* <Event time={[2023, 1, 19]} name="開始徵稿" type={['general', 'undefined', 'poster']} /> */}

        </div>


      </div>
    </div>
  )
}
