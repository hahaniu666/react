import Config from "../config/config";

export default function plusReady(callback) {
  if (window.plus || Config.dev) {
    if (typeof callback === 'function') {
      callback();
    }
  } else {
    document.addEventListener('plusready', () => {
      if (typeof callback === 'function') {
        callback();
      }
    });
  }
}