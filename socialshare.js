/* ==========================================================
 * Social Sharing
 *
 * @author Nigel Sirisomphone
 * @date 03/02/14
 * ==========================================================
 * - Interactions for sitewide social buttons
 * ========================================================== */

!(function ($) {
  var shareWindow

  var SocialShare = function (el, options) {
    this.$el       = $(el)
    this.dataSrc   = this.$el.attr('data-url')
    this.options   = options

    this.bindClick()
  }

  SocialShare.prototype.bindClick = function () {
    var _self = this

    this.$el.on('click', function () {
      shareWindow = window.open(_self.dataSrc, 'shareWindow',
        "width="   + _self.options.width +
        ",height=" + _self.options.height +
        ",left="   + _self.options.left +
        ",top="    + _self.options.top
      )
    })
  }
  
  SocialShare.defaults = {
    width : 615,
    height: 320,
    left  : 100,
    top   : 130
  }

  $.fn.socialshare = function (option, param) {
    this.each(function () {
      var $this   = $(this)
      var data    = $this.data('data.social')
      var options = $.extend({}, SocialShare.defaults, option)

      if (!data) $this.data('data.social', (data = new SocialShare(this, options)))

      return this
    })
  }
})(jQuery)
