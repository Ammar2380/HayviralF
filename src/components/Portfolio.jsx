

import { DynamicFrameLayout } from "./dynamic-frame-layout"
import bg from './test_bg.png'

const demoFrames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
]

export default function DemoPage() {
  return (
    <>
    <div className="md:h-230  w-full p-5 md:p-10   "  style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                
              }}>
<div>
  <div className="text-center mb-10 md:mb-16 space-y-4 ">
        <div className="text-center flex justify-center items-center  ">

        <h1 className="border-1 border-[#C6FD07] font-semibold item-center text-center text-[#C6FD07] w-40 rounded-2xl">Portfolio</h1>
        </div>
        <h2 className="text-4xl md:text-5xl font-outfit font-bold text-[#ffff]">
          Real Stories. Real Results.
        </h2>
        <p className="text-[#ffff] max-w-xl md:w-130 md:text-lg opacity-59 leading-tight font-extralight mx-auto mt-2 text-xl">
          Hear directly from our clients about how HayViral helped them grow,
          scale, and succeed.
        </p>
      </div>
</div>
    <div className=" h-100 md:h-screen w-full bg-[#303030] scroll-mt-72  p-1 rounded-xl scroll-22 "  id="portfolio"  >
      <DynamicFrameLayout 
        frames={demoFrames} 
        className="w-full h-full" 
        hoverSize={6}
        gapSize={3}
        />
    </div>
        </div>
        </>
  )
}
