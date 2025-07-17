// AI Meeting Summarizer - Background Script
console.log('AI Meeting Summarizer background script loaded');

// Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('AI Meeting Summarizer installed');
});

// Add your background logic here