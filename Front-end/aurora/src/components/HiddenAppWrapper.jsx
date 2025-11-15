// import { useState, useEffect, useRef } from "react";
// import { Folder, FileText, Image, X } from "lucide-react";

// const HiddenAppWrapper = ({ children }) => {
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [tapCount, setTapCount] = useState(0);
//   const [longPressTimer, setLongPressTimer] = useState(null);
//   const cornerRef = useRef(null);

//   useEffect(() => {
//     if (tapCount > 0) {
//       const timeout = setTimeout(() => setTapCount(0), 2000);
//       return () => clearTimeout(timeout);
//     }
//   }, [tapCount]);

//   const handleCornerTap = () => {
//     const newCount = tapCount + 1;
//     setTapCount(newCount);
//     if (newCount === 3) unlockApp();
//   };

//   const handleLongPressStart = () => {
//     const timer = setTimeout(() => {
//       unlockApp();
//     }, 2000);
//     setLongPressTimer(timer);
//   };

//   const handleLongPressEnd = () => {
//     if (longPressTimer) {
//       clearTimeout(longPressTimer);
//       setLongPressTimer(null);
//     }
//   };

//   const unlockApp = () => {
//     setIsUnlocked(true);
//     setTapCount(0);
//   };

//   const emergencyExit = () => {
//     setIsUnlocked(false);
//     // Optional: redirect or close tab
//   };

//   const DisguisedInterface = () => (
//     <div className="min-h-screen bg-soft-gray">
//       <div className="bg-white border-b border-gray-200 p-4">
//         <h1 className="text-lg font-semibold text-gray-800">My Files</h1>
//       </div>

//       <div className="p-4 space-y-2">
//         <div
//           className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50"
//           onMouseDown={handleLongPressStart}
//           onMouseUp={handleLongPressEnd}
//           onMouseLeave={handleLongPressEnd}
//           onTouchStart={handleLongPressStart}
//           onTouchEnd={handleLongPressEnd}
//         >
//           <Folder className="h-6 w-6 text-blue-500" />
//           <div>
//             <p className="font-medium text-gray-800">Documents</p>
//             <p className="text-xs text-gray-500">12 items</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
//           <Folder className="h-6 w-6 text-blue-500" />
//           <div>
//             <p className="font-medium text-gray-800">Photos</p>
//             <p className="text-xs text-gray-500">45 items</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
//           <FileText className="h-6 w-6 text-gray-400" />
//           <div>
//             <p className="font-medium text-gray-800">Notes.txt</p>
//             <p className="text-xs text-gray-500">2.4 KB</p>
//           </div>
//         </div>

//         <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
//           <Image className="h-6 w-6 text-green-500" />
//           <div>
//             <p className="font-medium text-gray-800">Screenshot.png</p>
//             <p className="text-xs text-gray-500">1.2 MB</p>
//           </div>
//         </div>
//       </div>

//       <div
//         ref={cornerRef}
//         onClick={handleCornerTap}
//         className="fixed bottom-0 right-0 w-16 h-16 cursor-pointer"
//         style={{ opacity: 0.01 }}
//       />

//       {tapCount > 0 && (
//         <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
//           {tapCount}/3
//         </div>
//       )}

//       <p className="fixed bottom-2 left-2 text-xs text-gray-400">
//         Tip: Long press "Documents" or triple-tap corner
//       </p>
//     </div>
//   );

//   return (
//     <>
//       {!isUnlocked ? (
//         <DisguisedInterface />
//       ) : (
//         <div className="relative min-h-screen animate-fade-in">
//           <button
//             onClick={emergencyExit}
//             onDoubleClick={emergencyExit}
//             className="fixed top-4 right-4 z-50 p-3 bg-danger hover:bg-danger/90 rounded-full shadow-lg transition-colors"
//             title="Emergency Exit (Double-click or ESC)"
//           >
//             <X className="h-6 w-6 text-white" />
//           </button>

//           <div
//             tabIndex={0}
//             onKeyDown={(e) => {
//               if (e.key === "Escape") emergencyExit();
//             }}
//             className="outline-none"
//           >
//             {children}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default HiddenAppWrapper;

