
var expect = require('chai').expect;
var server = require(__dirname + '/../server');
var net = require('net');
var fs = require('fs');
var filesLength;

describe('server', function () {
    before(() => {
      var filesLength = fs.readdirSync(__dirname + '/../files').length;
      console.log(filesLength);
    });

    it('should create a new file', function() {
      net.connect({port: 3000}, function(done) {
        expect(filesLength < fs.readdirSync(__dirname + '/../files').length).eql(true);
        done();
      });
    });

    it('should be listening at port 3000', function() {
      expect(server._connectionKey).is.eql('6::::3000');
    });
});
