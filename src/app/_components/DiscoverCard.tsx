import Image from "next/image"
import MissionInfo from "./MissionInfo"

interface DiscoverCardProps {
  title: string;
  description: string;
  stats: {
    number: number;
    label: string;
  }[];
  src: string;
  reverse?: boolean; // optional prop to reverse grid layout
}
function DiscoverCard({title,description,stats,src,reverse=false}:DiscoverCardProps) {
  if(!reverse)
  return (
    
      <div
      className={` gap-12 grid grid-cols-2 items-center gap-x-28 mb-20
      `}
    >
        <div>
          <Image
            src={src}
            alt="Student"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
        <div>
          <h3 className="text-3xl tracking-wide font-bold uppercase font-bebas text-black mb-2">{title}</h3>
          <p className="text-gray-600 mb-6 pr-6">
            {description}
          </p>
          <div className="flex space-x-10">
            {stats.map(stat=><MissionInfo key={stat.label} digit={stat.number} desc={stat.label} style="text-orange-600"/>)}
            

            
          </div>
        </div>
      </div>
  )
  if(reverse){
  return (
    <div
      className={` gap-12 items-center grid grid-cols-2 gap-x-28 mb-20 `}
    >
        
        <div>
          <h3 className="text-3xl tracking-wide font-bold uppercase font-bebas text-black mb-2">{title}</h3>
          <p className="text-gray-600 mb-6 pr-6">
            {description}
          </p>
          <div className="flex space-x-10">
            {stats.map(stat=><MissionInfo key={stat.label} digit={stat.number} desc={stat.label} style="text-orange-600"/>)}
            

            
          </div>
        </div>
        <div>
          <Image
            src={src}
            alt="Student"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
      </div>
  )
}
}

export default DiscoverCard
