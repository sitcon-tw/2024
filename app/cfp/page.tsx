"use client"
import Title from '@/components/Title'
import React, { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [counts, setCounts] = useState({
    audience: 0,
    speaker: 0,
    lecture: 0,
    camp: 0,
    volunteer: 0,
  });

  const contentText = (index: number) => {
    switch (index) {
      case 1: return '超過';
      case 2: return '';
      case 3: return '';
      case 4: return '扶植近';
      default: return '';
    }
  }

  const contentCount = (index: number) => {
    switch (index) {
      case 1: return counts.audience.toLocaleString();
      case 2: return counts.speaker.toLocaleString();
      case 3: return counts.lecture.toLocaleString();
      case 4: return counts.volunteer.toLocaleString();
      default: return '';
    }
  }

  const contentUnit = (index: number) => {
    switch (index) {
      case 1: return '名 與會者';
      case 2: return '名 學生講者';
      case 3: return '場 聚會與講座';
      case 4: return '名 資訊推廣志工';
      default: return '';
    }
  }

  useEffect(() => {
    const rawCounts = {
      audience: 10000,
      speaker: 350,
      lecture: 400,
      camp: 7,
      volunteer: 1000
    };

    const intervals = {};

    for (const key in rawCounts) {
      intervals[key] = setInterval(() => {
        setCounts(prev => {
          if (prev[key] < rawCounts[key]) {
            return {
              ...prev,
              [key]: prev[key] + Math.floor(rawCounts[key] / 100)
            };
          } else {
            clearInterval(intervals[key]);
            return {
              ...prev,
              [key]: rawCounts[key]
            };
          }
        });
      }, 10);
    }

    return () => {
      for (const key in intervals) {
        clearInterval(intervals[key]);
      }
    };

  }, []);

  return <div className="container">
    <div className="h-screen flex justify-center items-center">
      <div className="text-center w-1/2">
        <h1 className="text-3xl font-bold mb-2">SITCON 贊助徵求</h1>
        <p>
        SITCON 秉持著不向與會者收費的原則，十年以來致力於推廣學生資訊教育，創造學生交流、教學互長的機會。
        </p>
        <h2 className="text-xl font-bold mt-6">自 2012 發源以來，</h2>
        <h2 className="text-xl font-bold">我們帶領了無數學子進入資訊的殿堂，更做到：</h2>
        <div className="grid grid-cols-2 gap-4 w-full aspect-w-1 aspect-h-1">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-black p-4 rounded-lg relative group transform transition-transform duration-400 hover:scale-105">
              <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('/statscard/${i}.jpg')` }}></div>
              <div className="relative z-10 flex flex-col items-center justify-end space-y-2">
                <span className="text-white text-lg font-light">{contentText(i)}</span>
                <span className="text-white text-4xl font-bold">{contentCount(i)}</span>
                <span className="text-white text-base font-light ml-2 inline-block">{contentUnit(i)}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>;
}
