var popup;

popup = function() {
  var generator;
  generator = window.open('', 'publish-to', 'height=600,width=800');
  generator.document.write('<html><head><img src="http://i.imgur.com/vGez2Lm.png" width = "800" height = "600"><img src="http://i.imgur.com/55zf4G5.png" width = "500" height = "500"><title>Publish To LinkedIn</title>');
  generator.document.write($('#publish-to').html());
  generator.document.write('</body></html>');
  generator.document.close();
};

var popup2;

popup2 = function() {
  var generator;
  generator = window.open('', 'finding', 'height=600,width=800');
  generator.document.write('<html><head><img src="http://i.imgur.com/mUxgY6n.png" width = "800" height = "600"><img src="http://i.imgur.com/8jwhcuO.png" width = "500" height = "500"><title>Publish To LinkedIn</title>');
  generator.document.write($('#finding').html());
  generator.document.write('</body></html>');
  generator.document.close();
};