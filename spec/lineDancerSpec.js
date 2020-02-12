describe('lineDancer', function() {

  var lineDancer, clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    lineDancer = new LineDancer();
  });

  it('should have a jQuery $node object', function() {
    expect(lineDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(lineDancer, 'step');
      expect(lineDancer.step.callCount).to.be.equal(0);
      clock.tick(100);

      expect(lineDancer.step.callCount > 1);
    });
  });

});