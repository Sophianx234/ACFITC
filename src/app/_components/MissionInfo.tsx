import { TbLineDashed } from "react-icons/tb"
type missionInfo = {
  digit:number;
  desc:string;
  style?:string
}
function MissionInfo({digit,desc,style}:missionInfo) {
  return (
    <div className={`flex items-center justify-center flex-col -space-y-3 ${style}`}><span className="text-8xl font-bebas tracking-tight">{digit}</span><TbLineDashed className="size-12"/><span className=" font-medium font-caveat text-base">{desc}</span></div>
  )
}

export default MissionInfo
