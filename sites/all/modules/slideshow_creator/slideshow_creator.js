/**
 * @author: Bruno Massa http://drupal.org/user/67164
 * @file slideshow_creator.js
 * The main Javacript for this module
 */

/**
 * Initialize the module's JS functions
 *
 * See http://drupal.org/node/756722
 */

(function ($) {

  Drupal.behaviors.ssc = {
    attach: function (context) {
      if (typeof(window['ssc_settings']) != 'undefined' ) {
        for (var ss in ssc_settings) {
          if (ssc_settings.hasOwnProperty(ss)) {
            ssc_settings[ss].before = Drupal.ssc_before;
            $("#ssc-content-" + ss).cycle(ssc_settings[ss]);
          }
        }
      }
    }
  };

  Drupal.ssc_before = function() {
    var sscid = this.id.replace(/ssc-slide-/, "").replace(/-.*/, "");
    var slide = parseInt(this.id.replace(/ssc-slide-.*-/, ""), 10) + 1;
    $("#ssc-current-" + sscid).html(slide);
  };

}(jQuery));
