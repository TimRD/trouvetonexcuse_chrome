let color = '#FC3D60';
let blackcolor = '#000000';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color, blackcolor });
});
