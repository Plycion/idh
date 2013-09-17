// Generated by CoffeeScript 1.3.3
(function() {
  var active, button, buttons, clickButtonSetup, fontColor, hideButtons, makeActive, makeInactive, _i, _len;

  fontColor = '#ffffff';

  buttons = ["#csc", "#phl", "#contact", "#about", "#solutions"];

  active = "#about";

  hideButtons = function(exception) {
    var button, _i, _len, _results;
    if (exception == null) {
      exception = "";
    }
    _results = [];
    for (_i = 0, _len = buttons.length; _i < _len; _i++) {
      button = buttons[_i];
      if (button !== exception) {
        _results.push($(button).hide("fast"));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  clickButtonSetup = function(button) {
    return $(button + "Button").click(function() {
      if (button !== active) {
        return makeActive(button);
      }
    });
  };

  makeActive = function(button) {
    var other_button, _i, _len;
    active = button;
    $(button).show("fast");
    for (_i = 0, _len = buttons.length; _i < _len; _i++) {
      other_button = buttons[_i];
      if (other_button !== button) {
        makeInactive(other_button);
      }
    }
    return $(button + "Button").addClass("active");
  };

  makeInactive = function(button) {
    $(button + "Button").removeClass("active");
    return $(button).hide("fast");
  };

  makeActive("#about");

  for (_i = 0, _len = buttons.length; _i < _len; _i++) {
    button = buttons[_i];
    clickButtonSetup(button);
  }

  $("h1").mouseover(function() {
    return $(this).animate({
      color: '#1C8FE1'
    }, 200).mouseout(function() {
      return $(this).animate({
        color: '#ffffff'
      }, 200);
    });
  });

}).call(this);
