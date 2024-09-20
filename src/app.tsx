import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  // 버튼 클릭 시 ping 이벤트 보내기
  const handleSendClick = () => {
    if (inputValue) {
      window.electronAPI.sendPing(inputValue); // 메인 프로세스에 메시지 보냄
    }
  };

  // 메인 프로세스에서 pong 이벤트 응답 받기
  useEffect(() => {
    const handlePong = (message: string) => {
      console.log("Received from main process:", message); // 메인 프로세스에서 받은 메시지를 출력
    };

    window.electronAPI.onPong(handlePong);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.electronAPI.offPong(handlePong); // offPong 메서드가 필요하다면 구현해 주세요.
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // input 값 변경 시 상태 업데이트
        placeholder="Type a message"
      />
      <button onClick={handleSendClick}>Send Ping</button>
    </div>
  );
};

export default App;
