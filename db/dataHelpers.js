var helpers = {
  imagePush: function() {
    var images = []
    for (var i = 1; i < 20; i++) {
      if (i < 5) {
        images.push(`https://s3.us-east-2.amazonaws.com/massdrop-carousel/img${i}.png`)
      } else if (i === 17) {
        images.push(`https://s3.us-east-2.amazonaws.com/massdrop-carousel/img17.jpeg`)
      } else {
        images.push(`https://s3.us-east-2.amazonaws.com/massdrop-carousel/img${i}.jpg`)
      }
    }
    return images;
  },
  generateRandomNumber: function() {
    return Math.floor((Math.random() * 16) + 5);
  },
}

module.exports = helpers;