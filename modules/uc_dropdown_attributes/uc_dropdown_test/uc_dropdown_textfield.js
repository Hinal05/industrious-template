/**
 * @file
 * Javascript behaviors for Dropdown test.
 */

(function ($) {
  'use strict';
  Drupal.behaviors.ucDropdownTest = {
    attach: function (context) {
      var pane = $('div#order-pane-products').html();
      var results;
      var prefix;
      var resultsDiv;
      var index;
      if ($(pane).length > 0) {
        results = $('div#order-pane-products div#results').html();
        prefix = 'product_controls[attributes]';
        resultsDiv = $('div#order-pane-products');
        index = 4;
      }
      else {
        results = $('main#content div#results').html();
        prefix = 'attributes';
        resultsDiv = $('main#content');
        index = 2;
      }
      var step = 1;
      if (typeof (results) == 'undefined') {
        $(resultsDiv).prepend('<div id="results"><p>Test started</p><p style="display:none">Step: <span id="count">1</div></p></div>');
      }
      else {
        var step = parseInt($(resultsDiv).find('span#count').html());
        step += 1;
        $(resultsDiv).find('span#count').html(step);
      }

      switch (step) {
        case 2:
          var parent = getAttributeID('Parent', index);
          var child = getAttributeID('Child', index);
          var grandchild = getAttributeID('Grandchild', index);
          if (child === 0) {
            $('div#results').append('<p style="color:green">Child attribute hidden</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Child attribute displayed</p>');
          }
          if (grandchild === 0) {
            $('div#results').append('<p style="color:green">Grandchild attribute hidden</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Grandchild attribute displayed</p>');
          }

          var oid = 0;
          $('select[name="' + prefix + '[' + parent + ']"] option').each(function () {
            if ($.isNumeric(this.value) &&
              (oid === 0 || oid > parseInt(this.value))) {

              oid = parseInt(this.value);
            }
          });
          if (oid > 0) {
            $('select[name="' + prefix + '[' + parent + ']"]').val(oid);
          }
          var parent = getAttributeID('Parent', index);
          $('select[name="' + prefix + '[' + parent + ']"]').change();
          $('div#results').append('<p>Parent dependent option selected</p>');
          break;

        case 5:
          var child = getAttributeID('Child', index);
          if (child !== 0) {
            $('div#results').append('<p style="color:green">Child attribute displayed</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Child attribute hidden</p>');
          }

          var oid = 0;
          $('select[name="' + prefix + '[' + child + ']"] option').each(function () {
            if ($.isNumeric(this.value) &&
              (oid === 0 || oid > parseInt(this.value))) {

              oid = parseInt(this.value);
            }
          });
          if (oid > 0) {
            $('select[name="' + prefix + '[' + child + ']"]').val(oid);
          }
          var child = getAttributeID('Child', index);
          $('select[name="' + prefix + '[' + child + ']"]').change();
          $('div#results').append('<p>Child dependent option selected</p>');
          break;

        case 8:
          var grandchild = getAttributeID('Grandchild', index);
          if (grandchild !== 0) {
            $('div#results').append('<p style="color:green">Grandchild attribute displayed</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Grandchild attribute hidden</p>');
          }

          $('input[name="' + prefix + '[' + grandchild + ']"]').val('Test');
          var grandchild = getAttributeID('Grandchild', index);
          $('select[name="' + prefix + '[' + grandchild + ']"]').change();
          $('div#results').append('<p>Grandchild value inserted</p>');
          var grandchild = getAttributeID('Grandchild', index);
          var value = $('input[name="' + prefix + '[' + grandchild + ']"]').val();
          if (value !== '') {
            $('div#results').append('<p style="color:green">Grandchild value displayed</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Grandchild value hidden</p>');
          }
          var parent = getAttributeID('Parent', index);

          var oid = 0;
          $('select[name="' + prefix + '[' + parent + ']"] option').each(function () {
            if ($.isNumeric(this.value) && oid < parseInt(this.value)) {
              oid = parseInt(this.value);
            }
          });
          if (oid > 0) {
            $('select[name="' + prefix + '[' + parent + ']"]').val(oid);
          }
          var parent = getAttributeID('Parent', index);
          $('select[name="' + prefix + '[' + parent + ']"]').change();
          $('div#results').append('<p>Parent non-dependent option selected</p>');
          break;

        case 11:
          var parent = getAttributeID('Parent', index);
          var child = getAttributeID('Child', index);
          var grandchild = getAttributeID('Grandchild', index);
          if (child === 0) {
            $('div#results').append('<p style="color:green">Child attribute hidden</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Child attribute displayed</p>');
          }
          if (grandchild === 0) {
            $('div#results').append('<p style="color:green">Grandchild attribute hidden</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Grandchild attribute displayed</p>');
          }

          var oid = 0;
          $('select[name="' + prefix + '[' + parent + ']"] option').each(function () {
            if ($.isNumeric(this.value) &&
              (oid === 0 || oid > parseInt(this.value))) {

              oid = parseInt(this.value);
            }
          });
          if (oid > 0) {
            $('select[name="' + prefix + '[' + parent + ']"]').val(oid);
          }
          var parent = getAttributeID('Parent', index);
          $('select[name="' + prefix + '[' + parent + ']"]').change();
          $('div#results').append('<p>Parent dependent option selected</p>');
          break;

        case 14:
          var child = getAttributeID('Child', index);
          if (child !== 0) {
            $('div#results').append('<p style="color:green">Child attribute displayed</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Child attribute hidden</p>');
          }
          var oid = $('select[name="' + prefix + '[' + child + ']"]').val();
          if (oid === '') {
            $('div#results').append('<p style="color:green">Child option removed</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Child option selected</p>');
          }

          oid = 0;
          $('select[name="' + prefix + '[' + child + ']"] option').each(function () {
            if ($.isNumeric(this.value) &&
              (oid === 0 || oid > parseInt(this.value))) {

              oid = parseInt(this.value);
            }
          });
          if (oid > 0) {
            $('select[name="' + prefix + '[' + child + ']"]').val(oid);
          }
          var child = getAttributeID('Child', index);
          $('select[name="' + prefix + '[' + child + ']"]').change();
          $('div#results').append('<p>Child dependent option selected</p>');
          break;

        case 17:
          var grandchild = getAttributeID('Grandchild', index);
          if (grandchild !== 0) {
            $('div#results').append('<p style="color:green">Grandchild attribute displayed</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Grandchild attribute hidden</p>');
          }
          var value = $('input[name="' + prefix + '[' + grandchild + ']"]').val();
          if (value === '') {
            $('div#results').append('<p style="color:green">Grandchild value empty</p>');
          }
          else {
            $('div#results').append('<p style="color:red">Error: Grandchild value present</p>');
          }
          $('div#results').append('<p>Test finished.</p>');
          break;

        default:
          break;

      }
      return false;

    }
  };

  var getAttributeID = function (label, index) {
    var aid = 0;
    $('div.product-attributes label').each(function () {
      if (label === $(this).html()) {
        var attr = $(this).attr('for');
        var attribute = attr.split('-');
        aid = attribute[index];
      }
    });
    return aid;
  };

})(jQuery);
