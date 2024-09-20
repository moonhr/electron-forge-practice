const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendPing: (message) => ipcRenderer.send("ping", message), // ping 이벤트를 메인 프로세스로 보냄
  onPong: (callback) =>
    ipcRenderer.on("pong", (event, message) => callback(message)), // 메인 프로세스로부터 pong 이벤트 수신
});
