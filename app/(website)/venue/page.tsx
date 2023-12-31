import { PiMapTrifoldDuotone } from "react-icons/pi";
export default function Page() {
  return (
    <div className="container flex flex-col justify-center items-center text-center pt-20 gap-4">
      <PiMapTrifoldDuotone className="text-8xl" />
      <div>
        <div className="text-4xl font-bold">會場地圖</div>
        <div className="text-2xl">即將上線！</div>
      </div>
    </div>
  );
}
