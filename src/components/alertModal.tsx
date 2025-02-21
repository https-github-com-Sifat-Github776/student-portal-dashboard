"use client";

import { useState } from "react";

const ClassNotificationModal = () => {
  const [isWaitingModalOpen, setIsWaitingModalOpen] = useState(true);


  const handleOkButton = () => {
    setIsWaitingModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Notification Alert Bar */}
      {isWaitingModalOpen && (
        <div onClick={handleOkButton} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <span className="flex items-center space-x-2 text-purple-600 font-bold bg-white rounded-3xl mb-3 px-10 py-2">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16644 6.10352e-05C5.68355 6.10352e-05 4.26139 0.589139 3.21282 1.6377C2.16425 2.68627 1.57518 4.10843 1.57518 5.59133V8.57458L0.377402 11.574C0.339887 11.6682 0.325998 11.7701 0.336945 11.8709C0.347893 11.9717 0.383345 12.0683 0.440208 12.1523C0.49707 12.2362 0.573615 12.305 0.663161 12.3525C0.752707 12.4001 0.852532 12.425 0.953924 12.4251H13.379C13.4804 12.425 13.5802 12.4001 13.6697 12.3525C13.7593 12.305 13.8358 12.2362 13.8927 12.1523C13.9495 12.0683 13.985 11.9717 13.9959 11.8709C14.0069 11.7701 13.993 11.6682 13.9555 11.574L12.7577 8.57334V5.59133C12.7577 4.10843 12.1686 2.68627 11.1201 1.6377C10.0715 0.589139 8.64934 6.10352e-05 7.16644 6.10352e-05ZM7.16644 15.5314C6.61542 15.5315 6.07998 15.3485 5.64431 15.0111C5.20864 14.6737 4.89747 14.2011 4.75971 13.6676H9.57317C9.43542 14.2011 9.12424 14.6737 8.68857 15.0111C8.25291 15.3485 7.71747 15.5315 7.16644 15.5314Z" fill="#E66DFF"/>
            </svg>
            <span>
              Class 7 Math is starting in 1 hour, 34 minutes.
            </span>
          </span>
          <div className="bg-white rounded-3xl px-16 py-8 shadow-md max-w-sm text-center">
            <p className="text-indigo-700 font-extrabold text-2xl mb-4">
              You can join the live class 5 minutes before it starts. Please wait.
            </p>
            <button
              onClick={handleOkButton}
              className="bg-indigo-600 text-white rounded-full px-4 py-2 mt-4 hover:bg-indigo-700"
            >
              Okay.
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassNotificationModal;
