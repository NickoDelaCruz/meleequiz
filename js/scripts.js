$(document).ready(function() {
  var trait = []
  var tier = ""
  var total = 0
  $('#survey2').hide();
  $('#next').click(function(event) {
    $('#tiers').hide();
    $('#survey2').show();
    var tier = $('input:radio:checked').val();
    console.log(tier);
  });
  $('#survey2').submit(function(event) {
    event.preventDefault();
    $('.chk:checked').each(function() {
      trait.push(parseInt($(this).val()));
    })
    console.log(trait);
    //sum of all trait values
    for (var i = 0; i < trait.length; i++) {
    total += trait[i] << 0;
    }
    console.log(total);
    //function that shows character based on sum of trait array
    if (total >=5){
      $("#character").html('<img src="img/fox.png">')
      total = 0;
      trait = [];
    }  else if (total <=2) {
      $("#character").html('<img src="img/marth.png">')
      total = 0;
      trait = [];
    } else if (total === 3 || 4){
      $("#character").html('<img src="img/sheik.png">')
      total = 0;
      trait = [];
    }
  })

});
