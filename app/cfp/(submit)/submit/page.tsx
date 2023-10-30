'use client'
import Title from '@/components/cfp/Title'
import Event, { EventType } from '@/components/cfp/Event'
import { useEffect, useReducer, useState } from 'react'

function Countdown() {
  const [deadline] = useState(new Date('2024-01-20T23:59:00+08:00'))
  const [days, setDays] = useState(99)
  const [hours, setHours] = useState(99)
  const [minutes, setMinutes] = useState(99)
  const [seconds, setSeconds] = useState(99)

  useEffect(() => {
    let diff = (deadline.getTime() - Date.now()) / 1000

    if (diff <= 0) {
      return
    }

    const interval = setInterval(() => {
      setSeconds(Math.floor(diff % 60))
      diff /= 60
      setMinutes(Math.floor(diff % 60))
      diff /= 60
      setHours(Math.floor(diff % 24))
      diff /= 24
      setDays(Math.floor(diff))
    }, 1000)

    return () => clearInterval(interval)
  }, [days, hours, minutes, minutes, seconds, deadline])

  return (
    <div className="flex flex-col items-center gap-4">
      <p>距離投稿截止還有：</p>
      <div className="w-full border-[#E5C366] border-2 rounded-full py-[50px] px-[100px] grid grid-cols-4">
        <span className="text-[#FF3495] text-6xl text-center">
          {days}
        </span>
        <span className="text-[#46A5FD] text-6xl text-center">
          {hours}
        </span>
        <span className="text-[#0CE295] text-6xl text-center">
          {minutes}
        </span>
        <span className="text-[#AC24FF] text-6xl text-center">
          {seconds}
        </span>
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
  )
}

export default function Page() {
  const [type, toggleTyoe] = useReducer(
    (state: EventType | '', action: EventType | '') => {
      if (state === '') return action
      if (state === action) return ''
      else return action
    },
    ''
  )

  return (
    <div className="flex flex-col gap-6 mb-12">
      <Title content="投稿頁面" />

      {/* count down */}
      <Countdown />
      {/* submit botton */}
      <div className="flex justify-center">
        <button className="bg-[#E5C366] text-white h-[60px] w-[196px] rounded-full hover:shadow-[0px_4px_16px_0px_#E5C366CC] active:bg-[#D6A41D] active:shadow-[0px_2px_4px_0px_#E5C36699] focus:border focus:border-[#AC24FF] disabled:text-[#808080] disabled:bg-[#BFBFBF]">
          立刻投稿
        </button>
      </div>

      {/* time table */}
      <div className="flex flex-col gap-4 pt-16">
        <div className="flex items-center gap-6">
          <h2 className="text-[32px] font-medium">時程表</h2>
          <button
            className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-[#A441E0] ${type === 'general'
              ? 'text-[#A441E0] bg-white'
              : 'text-white bg-[#A441E0]'
              }`}
            onClick={() => toggleTyoe('general')}
          >
            一般議程
          </button>
          <button
            className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-[#FF3495] ${type === 'undefined'
              ? 'text-[#FF3495] bg-white'
              : 'text-white bg-[#FF3495]'
              }`}
            onClick={() => toggleTyoe('undefined')}
          >
            開放式議程
          </button>
          <button
            className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-[#00D98B] ${type === 'poster'
              ? 'text-[#00D98B] bg-white'
              : 'text-white bg-[#00D98B]'
              }`}
            onClick={() => toggleTyoe('poster')}
          >
            海報
          </button>
        </div>

        <div>
          <Event
            time={[2023, 'Nov.', 19]}
            type={['general', 'undefined', 'poster']}
            selectedType={type}
            name="開始徵稿"
          />
          <Event
            time={[2024, 'Jan.', 20]}
            type={['general', 'undefined', 'poster']}
            selectedType={type}
            name="投稿截止"
            desc="至 2024 年 1 月 20 日（六）23:59"
          />
          <Event
            time={[2024, 'Jan.', '下旬']}
            type={['general', 'undefined', 'poster']}
            selectedType={type}
            name="稿件錄取通知"
          />
          <Event
            time={[2024, 'Jan.', '下旬']}
            endTime={[2024, 'Feb.', '中旬']}
            type={['general', 'undefined']}
            selectedType={type}
            name="試講"
            desc="若稿件入選，確切時間將再與您協調"
          />
          <Event
            time={[2024, 'Feb.', 18]}
            type={['poster']}
            selectedType={type}
            name="錄取海報檔案上傳截止"
          />
          <Event
            time={[2024, 'Mar.', 8]}
            type={['general', 'undefined']}
            selectedType={type}
            name="彩排"
          />
          <Event
            time={[2024, 'Mar.', 9]}
            type={['SITCON']}
            selectedType={type}
            name="年會"
          />
        </div>
      </div>
    </div>
  )
}
