import { Recording } from "./ClassRecordings";

type RecordProps = {
    recording: Recording;
    openModal: (recording: Recording) => void;
}

function RecordingComp({recording, openModal}: RecordProps) {

  return (
    <div onClick={() => openModal(recording)} key={recording.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:border-b hover:border-x-slate-950 group hover:cursor-pointer">
            <div>
              <p className={`${recording.color ? 'text-purple-500' : 'text-indigo-600'} text-sm group-hover:opacity-50`}>{recording.className}</p>
              <h2 className={`text-lg font-bold ${recording.color ? 'group-hover:text-purple-500' : 'group-hover:text-indigo-600'}`}>{recording.title}</h2>
              <p className="text-sm text-gray-500">{recording.date}</p>
            </div>
            <div className="w-20 h-12 relative group">
              <img
                src={recording.videoThumbnail}
                alt={`Thumbnail for ${recording.title}`}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-md">
                <span className="hidden group-hover:flex text-white text-sm font-semibold">
                    play now
                </span>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:hidden">
                <path d="M9.1 12.4741V10.9941C9.1 9.08411 10.45 8.31411 12.1 9.26411L13.38 10.0041L14.66 10.7441C16.31 11.6941 16.31 13.2541 14.66 14.2041L13.38 14.9441L12.1 15.6841C10.45 16.6341 9.1 15.8541 9.1 13.9541V12.4741Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22.4741C17.5228 22.4741 22 17.997 22 12.4741C22 6.95127 17.5228 2.47412 12 2.47412C6.47715 2.47412 2 6.95127 2 12.4741C2 17.997 6.47715 22.4741 12 22.4741Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </div>
            </div>
          </div>
  )
}

export default RecordingComp