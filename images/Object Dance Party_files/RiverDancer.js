var RiverDancer = function () {
  this.top = Math.random() * ($("body").height() - 84) + 42;
  this.left = Math.random() * ($("body").width() - 84) + 42;
  this.timeBetweenSteps = 10;

  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);

  this.$node.mouseover(function() {
    this.direction = Math.random(0, 2) * Math.PI;
    this.xmove = Math.sin(this.direction);
    this.ymove = Math.cos(this.direction);
    this.setPosition(this.top+ymove, this.left+xmove);
  });
};

RiverDancer.prototype = Object.create(Dancer.prototype);

RiverDancer.prototype.constructor = RiverDancer;

RiverDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
    this.$node.fadeToggle();
};