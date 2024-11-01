// components/ClassRecordings.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import RecordingComp from "./Recording";
import ReactPlayer from "react-player";
import Modal from "./Modal";
import ClassNotificationModals from "./alertModal";

export type Recording = {
  id: number;
  className: string;
  subject: string;
  title: string;
  date: string;
  color?: string;
  videoThumbnail: string;
  url: string; // URL for thumbnail
};

const recordingsData: Recording[] = [
  {
    id: 1,
    className: "Class 7 Math",
    subject: "Math",
    title: "Algebraic Equations",
    date: "24th October, 2024",
    videoThumbnail: "/mask_group.png",
    url: 'https://www.youtube.com/watch?v=F1Mm-MvEvwo&list=PLCATGF9qVeC7pzr2GAGeisoa3lo_7ljlX'
  },
  {
    id: 2,
    className: "Class 7 Math",
    subject: "Math",
    title: "Differential Maths",
    date: "24th October, 2024",
    videoThumbnail: "/mask_group.png",
    url: 'https://www.youtube.com/watch?v=F1Mm-MvEvwo&list=PLCATGF9qVeC7pzr2GAGeisoa3lo_7ljlX'
  },
  {
    id: 3,
    className: "Class 7 Science",
    subject: "Science",
    title: "Fundamentals of Organic Chemistry",
    date: "24th October, 2024",
    videoThumbnail: "/mask_group_pink.png",
    color: '#E66DFF',
    url: 'https://www.youtube.com/watch?v=F1Mm-MvEvwo&list=PLCATGF9qVeC7pzr2GAGeisoa3lo_7ljlX'
  },
  {
    id: 4,
    className: "Class 7 Math",
    subject: "Math",
    title: "Trigonometry 101",
    date: "24th October, 2024",
    videoThumbnail: "/mask_group.png",
    url: 'https://www.youtube.com/watch?v=F1Mm-MvEvwo&list=PLCATGF9qVeC7pzr2GAGeisoa3lo_7ljlX'
  },
];

const ClassRecordings: React.FC = () => {
  const [filter, setFilter] = useState("This week");
  const [subject, setSubject] = useState("All subjects");
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const currentVideoRef = useRef<Recording | null>(null)

  useEffect(() => {
    setTimeout(() => setShowAlert(true), 2000)
  },[])
  const handleModalOpen = (video: Recording) => {
    currentVideoRef.current = video
    setIsModalOpen(true)
  }
  return (
    <div className="md:w-1/3 w-full mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Access Class Recordings</h1>

      <div className="relative flex flex-col justify-between gap-4">
      <input
    type="text"
    placeholder="Search for class recordings"
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <div className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
      />
    </svg>
  </div>

        <div className="flex gap-4 items-center justify-between">
          <p>Filter by:</p>
          <div className="flex gap-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
          >
            <option>This week</option>
            <option>Last week</option>
            <option>Last month</option>
          </select>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
          >
            <option>All subjects</option>
            <option>Math</option>
            <option>Science</option>
          </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {recordingsData.map((recording) => (
          <RecordingComp key={recording.id} recording={recording} openModal={handleModalOpen} />
        ))}
      </div>
    {isModalOpen && currentVideoRef.current && <VideoModal videoUrl={currentVideoRef.current.url} className={currentVideoRef.current.className} title={currentVideoRef.current.title} closeModal={() => setIsModalOpen(false)} />}
    {showAlert && <ClassNotificationModals />}
    </div>
  );
};

export default ClassRecordings;

const VideoModal = ({ videoUrl, className, title, closeModal }: any) => {
    return (
      <Modal title={title} subTitle={className} closeModal={closeModal} >
          {/* Video Content */}
          <div className="p-4 bg-black h-full rounded-3xl">
            <ReactPlayer
              url={videoUrl}
              controls={true}
              playing={true}
              width="100%"
              height="80%"
            />
          </div>
      </Modal>
    );
  };