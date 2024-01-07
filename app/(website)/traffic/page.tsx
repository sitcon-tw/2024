export default function Page() {
  return <div className="container">
    <h1 className="text-5xl font-bold mb-14">交通方式</h1>
    <div className=" justify-center">
      <h3 className="text-3xl font-bold text-center">中央研究院 人文社會科學館</h3>
      <h3 className="text-xl font-normal mt-8 text-center">中央研究院 人文社會科學館</h3>

       {/* Picture of the route */}


      <div>
        <div className="flex flex-col-3 justify-between mt-10">
          <button className="font-bold text-2xl py-4 px-20 w-fit rounded-xl hover:bg-[#F9EFDD] border-transparent border-4 hover:border-[#F8C57B] hover:shadow-[0px_4px_25px_0px_#F8C57B] focus:border-[#F8C57B] active:hover:bg-[#fee6c1]">
            大會接駁車
          </button>
          <button className="font-bold text-2xl py-4 px-20 w-fit rounded-xl hover:bg-[#F9EFDD] border-transparent border-4 hover:border-[#F8C57B] hover:shadow-[0px_4px_25px_0px_#F8C57B] focus:border-[#F8C57B] active:hover:bg-[#fee6c1]">
            大眾運輸工具
          </button>
          <button className="font-bold text-2xl py-4 px-20 w-fit rounded-xl hover:bg-[#F9EFDD] border-transparent border-4 hover:border-[#F8C57B] hover:shadow-[0px_4px_25px_0px_#F8C57B] focus:border-[#F8C57B] active:hover:bg-[#fee6c1]">
            自行開車
          </button>
        </div>
      </div>

    </div>

  </div>
}