import Image from "next/image"

function BackgroundImg() {
  return (
    <div className="fixed inset-0 -z-10">

  <div className="bg-cover relative bg-center  bg-no-repeat h-screen w-full">
    <Image src={"/imgs/child-5.jpg"} alt="Background Image" fill className="object-cover" />
  </div>
  </div>
  )
}

export default BackgroundImg
