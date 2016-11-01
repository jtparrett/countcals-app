var EmojiRater = function(val){
  const emojis = {
    '😄': 0,
    '😬': 500,
    '😐': 700,
    '😵': 1000
  };
  var emoji = Object.keys(emojis)[0];
  Object.keys(emojis).map(function(key){
    if(val >= emojis[key]){
      emoji = key;
    }
  });
  return emoji;
};
