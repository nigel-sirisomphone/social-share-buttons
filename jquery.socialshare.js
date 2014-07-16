/* ==========================================================
 * Social Sharing
 *
 * @author Nigel Sirisomphone
 * @date 03/02/14
 * ==========================================================
 * - Interactions for sitewide social buttons
 * ========================================================== */

(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define('jquery-socialshare', ['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    'use strict';

    var shareWindow,
        SocialShare = function(el, options) {
            this.$el = $(el);
            this.dataSrc = this.$el.attr('href');
            this.options = options;
            this.bindClick();
        };

    SocialShare.defaults = {
        width: 615,
        height: 320,
        left: 100,
        top: 130
    };

    SocialShare.prototype.bindClick = function() {
        this.$el.on('click', function(e) {
            e.preventDefault();
            shareWindow = window.open(this.dataSrc, 'shareWindow',
                'width=' + this.options.width +
                ',height=' + this.options.height +
                ',left=' + this.options.left +
                ',top=' + this.options.top
            );
            return false;
        }.bind(this));
    };

    $.fn.socialshare = function(option) {
        this.each(function() {
            var $this = $(this),
                data = $this.data('data.social'),
                options = $.extend({}, SocialShare.defaults, option);
            if (!data) {
                $this.data('data.social', (data = new SocialShare(this, options)));
            }
            return this;
        });
    };

}));
