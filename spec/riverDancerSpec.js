describe('riverDancer', function() {

  var riverDancer, clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    riverDancer = new RiverDancer();
  });

  it('should have a jQuery $node object', function() {
    expect(riverDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(riverDancer, 'step');
      expect(riverDancer.step.callCount).to.be.equal(0);
      clock.tick(100);

      expect(riverDancer.step.callCount > 1);
    });
  });

});