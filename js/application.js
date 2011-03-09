getTwitters('tweet', { 
  id: 'spicycode', 
  count: 1, 
  enableLinks: false, 
  ignoreReplies: true, 
  clearContents: true,
  template: '&quot; %text% &quot; <span>About %time%</span>'
});