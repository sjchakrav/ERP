var popup;

popup = function() {
  var generator;
  generator = window.open('Publish To Linked In!', 'publish-to', 'height=600,width=800');
  generator.document.write('<html><head><img src="http://i.imgur.com/vGez2Lm.png" width = "800" height = "600"><img src="http://i.imgur.com/55zf4G5.png" width = "500" height = "500"><title>Publish To LinkedIn</title>');
  generator.document.write($('#publish-to').html());
  generator.document.write('</body></html>');
  generator.document.close();
};

var popup2;

popup2 = function() {
  var generator;
  generator = window.open('Find Your Connections', 'finding', 'height=600,width=800');
  generator.document.write('<html><head><img src="http://i.imgur.com/mUxgY6n.png" width = "800" height = "600"><img src="http://i.imgur.com/8jwhcuO.png" width = "500" height = "500"><title>Find your Connections</title>');
  generator.document.write($('#finding').html());
  generator.document.write('</body></html>');
  generator.document.close();
};


var popup3;

popup3 = function() {
  var generator;
  generator = window.open('Refer a Friend', 'finding', 'height=600,width=800');
  generator.document.write('<html><head><img src="http://i.imgur.com/Ezcy4AS.png" width = "800" height = "600"><title>Refer a Friend</title>');
  generator.document.write($('#finding').html());
  generator.document.write('</body></html>');
  generator.document.close();
};