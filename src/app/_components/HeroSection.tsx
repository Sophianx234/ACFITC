"use client";
export type HeroSectionProps = {
  imgNum: string;
  imgPos?: string;
  bgOverlay?: boolean;
};
export default function HeroSection({
  imgNum,
  imgPos = "bg-center",
  bgOverlay=true,
}: HeroSectionProps) {
  return (
    <section className=" bg-orange-100 text-center md:text-left ">
      <div
        className={` bg-cover ${imgPos} h-dvh  flex flex-col justify-center items-center text-white`}
        style={{
          backgroundImage: `url(/imgs/child-${imgNum}.jpg)`,
        }}
      >
        {bgOverlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 to-orange-950/30 z-0"></div>
        )}
        <div className="md:grid grid-cols-2 w-full h-full z-50 px-16">
          <div className=" self-center">
            <h2 className="text-4xl md:text-7xl font-bold text-orange-600 font-archivo mb-2 ">
              Education
            </h2>
            <p className="text-2xl font-semibold font-caveat">
              for Brighter Future
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
