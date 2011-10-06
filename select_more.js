(function ($) {
  Drupal.behaviors.selectMore = {
    attach: function (context, settings) {
      var mySettings = settings.selectMore;
      for (i in mySettings) {
        if ($('.form-item-' + mySettings[i] + ' input.form-checkbox:checked').val() == undefined) {
          $('.form-item-' + mySettings[i] + ' .form-type-textarea').hide();
        }
        
        $('.form-item-' + mySettings[i] + ' input.form-checkbox').change(function() {
          $(this).parent().parent().find('.form-type-textarea').slideToggle('fast');
        });
      }
    }
  }
})(jQuery);