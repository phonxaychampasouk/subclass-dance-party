var RiverDancer = function () {
  this.top = Math.random() * ($("body").height() - 84) + 42;
  this.left = Math.random() * ($("body").width() - 84) + 42;
  this.timeBetweenSteps = 10;

  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);

  this.$node.mouseover(function() {
    this.direction = Math.random() * 2 * Math.PI;
    this.xmove = (Math.sin(this.direction)) * 50;
    this.ymove = (Math.cos(this.direction)) * 50;
    this.top += this.ymove;
    this.left += this.xmove;
    if (this.left > ($("body").width() - 30)) {
      // if it hit the right wall
      // change direction
      this.left = ($("body").width() - 30);
    } else if (this.top < 32) {
      // if it hit the top wall
      // change direction
      this.top = 32;
    } else if (this.left < 0) {
      // if it hit the left wall
      // change direction
      this.left = 0;
    } else if (this.top > ($("body").height() - 30)) {
      // if it hit the bottom wall
      // change direction
      this.top = ($("body").height() - 30);
    }
    this.setPosition(this.top, this.left);
  }.bind(this));
};

RiverDancer.prototype = Object.create(Dancer.prototype);

RiverDancer.prototype.constructor = RiverDancer;

RiverDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //  this.$node.fadeToggle();
};