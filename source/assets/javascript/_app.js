/**
 * [description]
 * @param  {[type]} $     [description]
 * @param  {[type]} publ  [description]
 * @return {[type]}       [description]
 */
var App = (function ($, publ) {

  publ.init = function (options) {
    $("pre").append("> App loaded!\n");
    return;
  };

  /**
   * Return public objects
   */
  return publ;

})(jQuery, App || {});

/**
 * When DOM is ready, initialize map plugin
 */
$(document).ready(function(){
  App.init();
});
