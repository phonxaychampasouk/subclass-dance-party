$(document).ready(function () {
  window.blinkyDancers = [];
  window.lineDancers = [];
  window.riverDancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    if (dancerMakerFunctionName === 'LineUp') {
      var x = 40;
      var y = 59;
      for (var i = 0; i < window.blinkyDancers.length; i++) {
        window.blinkyDancers[i].setPosition(y, x);
        window.blinkyDancers[i].top = y;
        window.blinkyDancers[i].left = x;
        if (x > ($("body").width() - 100)) {
          y += 60;
          x = 40;
        } else {
          x += 60;
        }
      }

    } else {
      var DancerFunction = window[dancerMakerFunctionName];
      // make a dancer with a random position
      var dancer = new DancerFunction();
      dancer.$node.addClass(dancerMakerFunctionName);

      // push to the correct array
      if (dancerMakerFunctionName === 'BlinkyDancer') {
        window.blinkyDancers.push(dancer);
      } else if (dancerMakerFunctionName === 'LineDancer') {
        window.lineDancers.push(dancer);
      } else if (dancerMakerFunctionName === 'RiverDancer') {
        window.riverDancers.push(dancer);
      }

      $('body').append(dancer.$node);
    }
  });
});

