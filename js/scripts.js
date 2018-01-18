$(document).ready(function() {
  var trait = []
  var tier = ""
  var total = 0
  $('#survey2').hide();
  $('#next').click(function(event) {
    $('#tiers').hide();
    $('#survey2').show();
    tier = $('input:radio:checked').val();
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
      if (tier === "top") {
        $("#character").html('<div class="character-info"><img src="img/fox.png" class="char-img"></div>')
        total = 0;
        trait = [];
      } else if (tier === "mid"){
        $("#character").html('<div class="character-info"><img src="img/captain.png" class="char-img"></div>')
        total = 0;
        trait = [];
      } else {
        $("#character").html('<div class="character-info"><img src="img/dk.png" class="char-img"></div>')
        total = 0;
        trait = [];
      }
    }  else if (total <=2) {
        if (tier === "top") {
          $("#character").html('<div class="character-info"><img src="img/marth.png" class="char-img"></div>')
          total = 0;
          trait = [];
        } else if (tier === "mid"){
          $("#character").html('<div class="character-info"><img src="img/peach.png" class="char-img"></div>')
          total = 0;
          trait = [];
        } else {
          $("#character").html('<div class="character-info"><img src="img/pichu.png" class="char-img"></div>')
          total = 0;
          trait = [];
        }
    } else if (total === 3 || 4){
        if (tier === "top") {
          $("#character").html('<div class="character-info"><img src="img/sheik.png" class="char-img"></div>')
          total = 0;
          trait = [];
        } else if (tier === "mid"){
          $("#character").html('<div class="character-info"><img src="img/iceclimber.png" class="char-img"></div>')
          total = 0;
          trait = [];
        } else {
          $("#character").html('<div class="character-info"><img src="img/gameandwatch.png" class="char-img"></div>')
          total = 0;
          trait = [];
        }
    }
  })

});
