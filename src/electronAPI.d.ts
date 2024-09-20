// ts에게 electronAPI가 존재한다는 것을 알리기 위함
// renderer 프로세스에서 electronAPI를 찾지 못하는 에러를 해결함
declare global {
  interface Window {
    electronAPI: {
      sendPing: (message: string) => void;
      onPong: (callback: (message: string) => void) => void;
      offPong: (callback: (message: string) => void) => void; // 필요하다면 추가
    };
  }
}
export {};
