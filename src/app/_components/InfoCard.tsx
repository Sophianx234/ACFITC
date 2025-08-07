type infocardProps = {
  title: string;  
  desc?:string;
  style?:string
  
}
function InfoCard({title, desc=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maxime voluptas ipsa!', style}: infocardProps) {
  return (
     <div className={`${style}  flex justify-center text-white  h-50`}><div className="border-2 w-full border-gray-200 p-4 m-4 mx-6 pr-12 "><p className="text-3xl tracking-wide font-bold font-bebas text-zinc-200 "> {title}</p><p className="leading-7">{desc}</p></div></div>
  )
}

export default InfoCard
