import React from "react";

type ModalProps = {
    title?: string;
    subTitle?: string;
    closeModal: () => void;
    noShowCross?: boolean;
    noHeader?: boolean;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

function Modal(props: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div style={props.style} className="bg-indigo-600 rounded-3xl overflow-hidden shadow-xl w-full h-4/5 max-w-5xl relative">
          {/* Close Button */}
         {!props.noShowCross && <button
            onClick={props.closeModal}
            className="absolute top-2 right-3 text-white hover:text-gray-900"
          >
            ✕
          </button>}
          {/* Modal Header */}
          {!props.noHeader && <div className="bg-indigo-600 text-white p-4 text-center">
            {props.subTitle && <p className="text-sm">{props.subTitle}</p>}
            <h2 className="text-xl font-semibold">
              {props.title}
            </h2>
          </div>}
          {props.children}
        </div>
      </div>
  )
}

export default Modal