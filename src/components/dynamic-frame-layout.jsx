import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Play, X } from "lucide-react"

function MobileCard({ video, thumbnail, title, category, onPlayClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Thumbnail/Video Preview */}
      <div className="w-full h-full">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title || "Portfolio item"}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={video}
            className="w-full h-full object-cover"
            muted
            playsInline
          />
        )}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {category && (
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3">
            {category}
          </span>
        )}
        {title && (
          <h3 className="text-white text-2xl font-bold mb-4">
            {title}
          </h3>
        )}
        <button
          onClick={onPlayClick}
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all active:scale-95"
        >
          <Play className="w-5 h-5" fill="black" />
          Watch Project
        </button>
      </div>

      {/* Center Play button */}
      <button
        onClick={onPlayClick}
        className="absolute inset-0 flex items-center justify-center group"
      >
        <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-active:scale-95 transition-transform">
          <Play className="w-10 h-10 text-black ml-1" fill="black" />
        </div>
      </button>
    </motion.div>
  )
}

function DesktopFrame({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isHovered,
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }, [isHovered])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src={video}
              loop
              muted
              playsInline
              ref={videoRef}
            />
          </div>
        </div>

        {showFrame && corner && (
          <div className="absolute inset-0" style={{ zIndex: 2, pointerEvents: 'none' }}>
            <div
              className="absolute top-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleX(-1)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scaleY(-1)" }}
            />
            <div
              className="absolute bottom-0 right-0 w-16 h-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})`, transform: "scale(-1, -1)" }}
            />

            {edgeHorizontal && (
              <>
                <div
                  className="absolute top-0 left-16 right-16 h-16"
                  style={{
                    backgroundImage: `url(${edgeHorizontal})`,
                    backgroundSize: "auto 64px",
                    backgroundRepeat: "repeat-x",
                  }}
                />
                <div
                  className="absolute bottom-0 left-16 right-16 h-16"
                  style={{
                    backgroundImage: `url(${edgeHorizontal})`,
                    backgroundSize: "auto 64px",
                    backgroundRepeat: "repeat-x",
                    transform: "rotate(180deg)",
                  }}
                />
              </>
            )}

            {edgeVertical && (
              <>
                <div
                  className="absolute left-0 top-16 bottom-16 w-16"
                  style={{
                    backgroundImage: `url(${edgeVertical})`,
                    backgroundSize: "64px auto",
                    backgroundRepeat: "repeat-y",
                  }}
                />
                <div
                  className="absolute right-0 top-16 bottom-16 w-16"
                  style={{
                    backgroundImage: `url(${edgeVertical})`,
                    backgroundSize: "64px auto",
                    backgroundRepeat: "repeat-y",
                    transform: "scaleX(-1)",
                  }}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function FullscreenVideoPlayer({ video, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch(() => {})
    }

    videoRef.current?.play()

    return () => {
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock()
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full object-contain"
        controls
        autoPlay
        playsInline
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-10 active:scale-95"
      >
        <X className="w-6 h-6 text-white" strokeWidth={2.5} />
      </button>
    </div>
  )
}

export function DynamicFrameLayout({ 
  frames = [], 
  className = "",
  showFrames = false,
  hoverSize = 6,
  gapSize = 4
}) {
  const [hovered, setHovered] = useState(null)
  const [fullscreenVideo, setFullscreenVideo] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handlePlayClick = (video) => {
    setFullscreenVideo(video)
  }

  const handleCloseFullscreen = () => {
    setFullscreenVideo(null)
  }

 

  // Mobile Layout - Vertical scrolling cards
if (isMobile) {
  return (
    <>
      <div className={`w-full px-4 py-8 space-y-6 ${className}`}>
        {frames.map((frame) => (
          <MobileCard   key={frame.id}
              video={frame.video}
              thumbnail={frame.thumbnail}
              title={frame.title}
              category={frame.category}
              onPlayClick={() => handlePlayClick(frame.video)} />
        ))}
      </div>

      {fullscreenVideo && (
        <FullscreenVideoPlayer
          video={fullscreenVideo}
          onClose={handleCloseFullscreen}
        />
      )}
    </>
  )
}

  // const handlePlayClick = (video) => {
  //   setFullscreenVideo(video)
  // }

  // const handleCloseFullscreen = () => {
  //   setFullscreenVideo(null)
  // }

  const getRowSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { row } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) return "4fr 4fr 4fr"
    const { col } = hovered
    const nonHoveredSize = (12 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x, y) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  // Mobile Layout
  if (isMobile) {
    return (
      <>
        <div className={`w-full px-4 py-8 space-y-6 ${className}`}>
          {frames.map((frame) => (
            <MobileCard
              key={frame.id}
              video={frame.video}
              thumbnail={frame.thumbnail}
              title={frame.title}
              category={frame.category}
              onPlayClick={() => handlePlayClick(frame.video)}
            />
          ))}
        </div>

        {fullscreenVideo && (
          <FullscreenVideoPlayer
            video={fullscreenVideo}
            onClose={handleCloseFullscreen}
          />
        )}
      </>
    )
  }

  // Desktop Layout - 3x3 Grid
  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4)
        const col = Math.floor(frame.defaultPos.x / 4)
        const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

        return (
          <motion.div
            key={frame.id}
            className="relative"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <DesktopFrame
              video={frame.video}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize || 1}
              borderThickness={frame.borderThickness || 10}
              borderSize={frame.borderSize || 90}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
            />
          </motion.div>
        )
      })}
    </div>
  )
}