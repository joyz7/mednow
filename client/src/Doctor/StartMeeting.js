import React from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3001");

const StartMeeting = () => {
  return (
    <>
      <button>Start Meeting</button>
    </>
  );
};

export default StartMeeting;
