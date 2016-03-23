$(document).ready(function() {

    var blocks =[];
    for (var i = 0; i < 6; i++) {
        blocks.push(new Array());
        for (var j = 0; j < 5; j++) {
            blocks[i].push(new case_(0, 0));
        }
    }

    function affichePlateau(listeCases) {

        $('#board').append("<table>");
        for (var i = 0; i < 6; i++) {
            $('#board').append("<tr>");
            for (var j = 0; j < 5; j++) {
                
                listeCases[i][j].setEst_detruit(1);
                
                $("#board").append("<td id='" + i + "_" + j + "' class='revealed img'></td>");

                /*if (!(listeCases[i][j].getEst_revele)) {
                    $("#board").append("<td id='" + i + "_" + j + "' class='hidden img'></td>");
                } else if (listeCases[i][j].getEst_destructible) {
                    $("#board").append("<td id='" + i + "_" + j + "' class='revealed img'></td>");
                } else {
                    $("#board").append("<td id='" + i + "_" + j + "' class='broken img'></td>");
                }*/

            }
            $('#board').append("</tr>");
        }
        $('#board').append("</table>");

    }

    affichePlateau(blocks);

});