function show(){
    var drop = document.getElementById('bestStarter');
    var selected = drop.value;
    
    var output

    switch(selected){
        case 'genOne':
        output = 'The best starter for Generation 1 is Bulbasaur. The Grass/Poison typing makes Bulbasaur effectivbe against the first 2 Gym Leaders. \n\nBulbasuar also resists the 3rd Gym Leader, making the early game of Generation 1 very easy compared to the other starters.';
        break;
        case 'genTwo':
        output = 'There are 2 starters in Generation 2 that can be the best. \n\nTotodile is one contender for this position. While it holds no type advantage against any Gym Leaders, the diverse movepool gives attacking options for 4 Gym Leaders, an Elite 4 member, and the Champion.'+
        '\n\nCyndaquil is the other contender. Cyndaquil is effective against 3 Gym Leaders, and the Fire Type is generally rare and usually useful, so picking Cyndaquil is also a viable option. \n\nPersonally, I believe that Totodile is the more useful starter to choose.';
        break;
        case 'genThree':
        output = 'The best starter for Generation 3 is Mudkip. The Water, and eventually Water/Ground typing makes Mudkip effective against 3 Gym Leaders. \n\nMudkip also has a great movepull to diversify the amount of other Pokemon it can fight.';
        break;
        default:
            output = 'Error. Select a Generation';
            break;
    }

    alert(output);
}