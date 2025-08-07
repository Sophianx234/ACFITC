'use client'
export type HeroSectionProps = {
  imgNum: string;
  imgPos?:string;
  bgOverlay?:boolean;
  

}
export default function HeroSection({imgNum,imgPos='center'}: HeroSectionProps) {

  return (
    <section className="pt-28 bg-orange-100 text-center md:text-left ">
        <div className={` bg-cover bg-${imgPos} h-dvh  flex flex-col justify-center items-center text-white`}
        style={{
    backgroundImage: `url(/imgs/child-${imgNum}.jpg)`,
  }}>

        <div className="md:grid grid-cols-2 w-full h-full  px-8">
          <div className=" self-center">

          <h2 className="text-4xl md:text-7xl font-bold text-orange-600 font-archivo mb-2 ">Education</h2>
          <p className="text-2xl font-semibold font-caveat">for Brighter Future</p>
          </div>
          <div >

          </div>
          
        </div>
        </div>
      </section>
  );
}