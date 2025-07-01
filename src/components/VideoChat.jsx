// Placeholder for WebRTC implementation using Firebase for signaling
export default function VideoChat() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-64 h-48 bg-black text-white flex items-center justify-center">
        Local Video
      </div>
      <div className="w-64 h-48 bg-black text-white flex items-center justify-center">
        Remote Video
      </div>
      <div className="mt-2 space-x-2">
        <button className="px-2 py-1 bg-gray-700 text-white">Toggle Cam</button>
        <button className="px-2 py-1 bg-gray-700 text-white">Mute</button>
        <button className="px-2 py-1 bg-red-600 text-white">End</button>
      </div>
    </div>
  )
}
