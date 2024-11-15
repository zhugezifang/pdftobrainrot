// components/ImageSplitter.js
import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { flushAllTraces } from 'next/dist/trace';

const ImageSplitter = ({
  locale = '',
  indexLanguageText
  }) => {
  

  const handleClick = () => {
      document.getElementById("game").requestFullscreen();
      console.log("Button clicked!");
  };

  return (
              
                    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden relative p-6">
                      <div className="absolute top-4 right-4 z-10 flex gap-2">
                      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm" title="Fullscreen">Fullscreen</button>
                      </div>
                      <iframe id="game" src="https://html5.gamedistribution.com/rvvASMiM/88adc972f6bc4956be084fe44998a531/index.html?utm_source=uutool.cn&utm_medium=organizer-master&utm_campaign=block-and-redirect&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2h0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tLzg4YWRjOTcyZjZiYzQ5NTZiZTA4NGZlNDQ5OThhNTMxLz91dG1fc291cmNlPXV1dG9vbC5jbiZ1dG1fbWVkaXVtPW9yZ2FuaXplci1tYXN0ZXImdXRtX2NhbXBhaWduPWJsb2NrLWFuZC1yZWRpcmVjdCIsInBhcmVudERvbWFpbiI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidG9wRG9tYWluIjoiaHRtbDUuZ2FtZWRpc3RyaWJ1dGlvbi5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9" allow="autoplay"  style={{ top: '0px', left: '0px',width: '100%', height: '800px'}}></iframe>
                    </div>
            
    

  );
};

export default ImageSplitter;
