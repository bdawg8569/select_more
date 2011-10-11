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
        
        //if there is an error on the form, show the textarea so its clear where the problem is
        $('.form-item-' + mySettings[i] + ' input.form-checkbox.error').each(function() {
          $(this).parent().parent().find('.form-type-textarea').show();
        });
      }
    }
  }
})(jQuery);