import { PiMegaphoneSimpleDuotone } from "react-icons/pi";
export default function Page() {
  return (
    <div className="container flex flex-col justify-center items-center text-center pt-20 gap-4">
      <PiMegaphoneSimpleDuotone className="text-8xl" />
      <div>
        <div className="text-4xl font-bold">議程表</div>
        <div className="text-2xl">即將上線！</div>
      </div>
    </div>
  );
}
