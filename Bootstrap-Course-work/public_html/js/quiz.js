/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//$(document).ready(function(){
//   ///tehtava 8
////   $(".choice2").click(function(){
////       let attribute_value = $(this).attr("name");
////       //color_e >> #color_e
////       $("#" + attribute_value).show();
////   });
//});

$(document).ready(function() {
  $('.exp').hide();
  $('.red').hide();
  $('input[name="test"]').on('click', function() {
    let el = $(this);
    if (el.val() === 'ans') {
      el.parents('.q').nextAll('.exp').first().show();
      el.parents('.q').nextAll('.red').first().hide();
      $('.red').hide();
    } else {
      el.parents('.q').nextAll('.red').first().show();
      el.parents('.q').nextAll('.exp').first().hide();
    }
  });
});

