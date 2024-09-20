const input = document.getElementById("input");
const sendButton = document.getElementById("sendButton");

// 버튼을 클릭했을 때 ping 이벤트 보내기
sendButton.addEventListener("click", () => {
  const message = input.value; // input 창의 값을 가져옴
  if (message) {
    window.electronAPI.sendPing(message); // 메인 프로세스에 메시지 보냄
  }
});

// 메인 프로세스에서 pong 이벤트 응답 받기
window.electronAPI.onPong((message) => {
  console.log("Received from main process:", message); // 메인 프로세스에서 받은 메시지를 출력
});
