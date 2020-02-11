var LineDancer = function () {
  this.top = (Math.random() * ($("body").height() - 84)) + 42;
  this.left = (Math.random() * ($("body").width() - 84)) + 42;
  this.timeBetweenSteps = 10;
  this.direction = Math.random(0, 2) * Math.PI;
  this.xmove = Math.sin(this.direction);
  this.ymove = Math.cos(this.direction);
  this.size = 2;
  Dancer.call(this, this.top, this.left, this.timeBetweenSteps);


};

LineDancer.prototype = Object.create(Dancer.prototype);

LineDancer.prototype.constructor = LineDancer;

LineDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.fadeToggle();
  if (this.left > ($("body").width() - (20 * this.size))) {
    // if it hit the right wall
    // change direction
    this.xmove = -Math.abs(this.xmove);
  } else if (this.top < 32) {
    // if it hit the top wall
    // change direction
    this.ymove = Math.abs(this.ymove);
  } else if (this.left < 0) {
    // if it hit the left wall
    // change direction
    this.xmove = Math.abs(this.xmove);
  } else if (this.top > $("body").height() - (20 * this.size)) {
    // if it hit the bottom wall
    // change direction
    this.ymove = -Math.abs(this.ymove);
  }

  // check all of the dots on the page
  for (var i=0; i < window.blinkyDancers.length; i++) {
    // this.top and this.left is our position
    // window.blinkyDancers[i].top and window.blinkyDancers[i].left is their position
    if (window.blinkyDancers[i].left > this.left && window.blinkyDancers[i].left < (this.left + (20 * this.size - 10))
      && window.blinkyDancers[i].top > this.top && window.blinkyDancers[i].top < (this.top + (20 * this.size - 10))) {
      // remove the blinky dancer
      window.blinkyDancers[i].$node.remove();
      window.blinkyDancers.splice(i,1);
      // and grow
      if (this.size < 12) {
        this.size++;
      }
      this.$node.addClass("linesize"+this.size);
    }
  }

  this.top += this.ymove;
  this.left += this.xmove;
  this.setPosition(this.top, this.left);
};