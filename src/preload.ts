const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendPing: (message: string) => ipcRenderer.send("ping", message),
  onPong: (callback: (message: string) => void) => {
    ipcRenderer.on(
      "pong",
      (event: Electron.IpcRendererEvent, message: string) => callback(message)
    ); // event와 message에 타입 지정
  },
});
