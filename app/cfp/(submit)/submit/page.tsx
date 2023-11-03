'use client'
import { useReducer } from 'react'
import Image from 'next/image'

import Title from '@/components/cfp/Title'
import Event, { EventType } from '@/components/cfp/Event'

import useCountdown from '@/hooks/useCountdown'

function Countdown() {
	const { days, hours, minutes, seconds } = useCountdown()
	return (
		<div className="flex flex-col items-center gap-4">
			<p>距離投稿截止還有：</p>
			<div className="w-full border-gold border-2 rounded-full py-[50px] px-[100px] grid grid-cols-4">
				<span className="text-pink text-6xl text-center">
					{days}
				</span>
				<span className="text-purple text-6xl text-center">
					{hours}
				</span>
				<span className="text-blue text-6xl text-center">
					{minutes}
				</span>
				<span className="text-green text-6xl text-center">
					{seconds}
				</span>
				<span className="font-medium text-gold text-center">
					DAYS
				</span>
				<span className="font-medium text-gold text-center">
					HOURS
				</span>
				<span className="font-medium text-gold text-center">
					MINUTES
				</span>
				<span className="font-medium text-gold text-center">
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
		<div className="flex flex-col gap-6 overflow-hidden">
			<Title content="投稿頁面" />

			{/* count down */}
			<Countdown />
			{/* submit botton */}
			<div className="flex justify-center">
				<button className="bg-gold text-white h-[60px] w-[196px] rounded-full hover:shadow-[0px_4px_16px_0px_#E5C366CC] active:bg-[#D6A41D] active:shadow-[0px_2px_4px_0px_#E5C36699] focus:border focus:border-purple disabled:text-4-6 disabled:bg-2-6">
					立刻投稿
				</button>
			</div>

			{/* time table */}
			<div className="flex flex-col gap-4 pt-16">
				<div className="flex items-center gap-6">
					<h2 className="text-[32px] font-medium">時程表</h2>
					<button
						className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-purple ${type === 'general'
							? 'text-purple bg-white'
							: 'text-white bg-purple'
							}`}
						onClick={() => toggleTyoe('general')}
					>
						一般議程
					</button>
					<button
						className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-pink ${type === 'undefined'
							? 'text-pink bg-white'
							: 'text-white bg-pink'
							}`}
						onClick={() => toggleTyoe('undefined')}
					>
						開放式議程
					</button>
					<button
						className={`rounded-full w-[110px] h-[40px] flex justify-center items-center transition-colors border border-green ${type === 'poster'
							? 'text-green bg-white'
							: 'text-white bg-green'
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

			{/* hero bg image */}
			<div className="w-[calc(100vw-70%)] xl:w-[calc(100vw-60%)] h-[900px] overflow-hidden top-0 left-0 mt-[920px] ml-[70%] xl:ml-[60%] absolute z-[-1] hidden lg:block">
				<Image
					src="/hero_bg.webp"
					width={1857}
					height={1998}
					alt=""
					className="max-w-[unset]"
				/>
			</div>
		</div>
	)
}
