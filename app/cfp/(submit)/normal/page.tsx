"use client"
import { useReducer } from 'react'
import Title from '@/components/cfp/Title'
import Event, {EventType} from '@/components/cfp/Event';

export default function Page() {
  const [type, toggleTyoe] = useReducer((state: EventType | '', action: EventType | '') => {
    if (state === '') return action
    if (state === action) return ''
    else return action
  }, '')
  return (
    <div className='flex flex-col ml-4'>
      <div className='mt-4'>
        <Title content="一般議程"/>
        {/* leading-[75px] */}
        <h2 className="text-4xl mt-8 font-medium">重要時程</h2>
      </div>  
      <div>
        <Event
              time={[2023, 'Nov.', 19]}
              type={['general']}
              selectedType={type}
              name="開始徵稿"
        />
        <Event
              time={[2024, 'Jan.', 20]}
              type={['general']}
              selectedType={type}
              name="投稿截止"
              desc='至 2024 年 1 月 20 日（六）23:59'
        />
        <Event
              time={[2024, 'Jan.','下旬']}
              type={['general']}
              selectedType={type}
              name="稿件錄取通知"
        />   
        <Event
            time={[2024,'Jan.','下旬']}
            endTime={[2024,'Feb.','中旬']}
            type={['general']}
            selectedType={type}
            name="試講"
            desc='若稿件入選，確切時間將再與您協調'
        />   
        <Event
              time={[2024, 'Mar.', 8]}
              type={['general']}
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

      <h2 className="text-4xl leading-[75px] font-medium">議程種類</h2>    

      <div className='flex flex-row gap-6 justify-center items-center'>
        {/* Replace It With Components */}
        <div>
          <span>Presentation</span>
        </div>
        <div className='flex-1 w-500 h-500 rounded-xl'>
          <span>Double <br/> Espresso</span>
        </div>
        <div className='flex-1 w-500 h-500 rounded-xl'>
          <span>Espresso</span>
        </div>        
      </div>

      <h2 className="text-4xl leading-[75px] font-medium">投稿主題範例</h2>

      <div className='text-xl leading-8'>
        <p>SITCON 作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。</p>
        <p className='mt-4'>任何與資訊科技、電腦技術相關的講題，我們都非常歡迎投稿！</p>
        <p className='mt-4'>除此之外，您也可以透過參與投稿者小聚或前往 SITCON 歷年網站（<a href='https://sitcon.org/2013/'  className="text-blue-600" target="_blank">2013</a>、<a href='https://sitcon.org/2014/' className="text-blue-600" target="_blank">2014</a>、<a href='https://sitcon.org/2015/' className="text-blue-600" target="_blank">2015</a>、<a href='https://sitcon.org/2016/' className="text-blue-600" target="_blank">2016</a>、<a href='https://sitcon.org/2017/' className="text-blue-600" target="_blank">2017</a>、<a href='https://sitcon.org/2018/' className="text-blue-600" target="_blank">2018</a>、<a href='https://sitcon.org/2019/' className="text-blue-600" target="_blank">2019</a>、<a href='https://sitcon.org/2020/' className="text-blue-600" target="_blank">2020</a>、<a href='https://sitcon.org/2021/' className="text-blue-600" target="_blank">2021</a>、<a href='https://sitcon.org/2022/' className="text-blue-600" target="_blank">2022</a>）查看過去的議程。</p>
      </div>

      <h2 className="text-2xl mt-8 font-medium">PRESENTATION</h2>

      <div className='leading-[35px]'>
        {/* purple */}
        <p>Presentation <span className='text-purple-500'> 共 40 分鐘</span>，包含完整 30 分鐘的議程與 10 分鐘的問答時間，</p> 
        <p>讓您有充分的時間展示想法、描述經歷、和與會者交流</p>
      </div>

      <div className='flex flex-row gap-6'>
        <div className='text-red-500'>
          <p className='leading-[75px]'>影片</p>
          <p>desc</p>
        </div>
        <div className='text-red-500'>
          <p className='leading-[75px]'>影片</p>
          <p>desc</p>
        </div>
        <div className='text-red-500'>
          <p className='leading-[75px]'>影片</p>
          <p>desc</p>
        </div>                
      </div>

      <div className='flex flex-row gap-6'>
        <div className='text-red-500'>
          <p className='leading-[75px]'>影片</p>
          <p>desc</p>
        </div>
        <div className='text-red-500'>
          <p className='leading-[75px]'>影片</p>
          <p>desc</p>
        </div>
        <div className='text-red-500'>
          <p className='leading-[75px]'>影片</p>
          <p>desc</p>
        </div>                
      </div>


    </div>
  )
}
