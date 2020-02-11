var LineDancer = function () {
  this.top = (Math.random() * ($("body").height() - 84)) + 42;
  this.left = (Math.random() * ($("body").width() - 84)) + 42;
  this.timeBetweenSteps = 10;
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);

  this.direction = Math.random(0, 2) * Math.PI;
  this.xmove = Math.floor(Math.sin(this.direction) * 20);
  this.ymove = Math.floor(Math.cos(this.direction) * 20);

};

LineDancer.prototype = Object.create(Dancer.prototype);

LineDancer.prototype.constructor = LineDancer;

LineDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  debugger;
  this.$node.fadeToggle();
  this.top += this.ymove;
  this.left += this.xmove;
  this.setPosition(this.top, this.left);
};