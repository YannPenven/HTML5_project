$(document).ready(function() {

    /*var blocks =[];
    for (var i = 0; i < 6; i++) {
        blocks.push(new Array());
        for (var j = 0; j < 5; j++) {
            blocks[i].push(new case_(0, 0));
        }
    }*/

    var plateau = new plateau_de_jeu();
    var grille = plateau.plateau();

    function affichePlateau(listeCases) {

        $('#board').append("<table>");
        for (var i = 0; i < 6; i++) {
            $('#board').append("<tr>");
            for (var j = 0; j < 5; j++) {

                if (i == 0 && j == 0) {
                    $("#board").append("<td id='" + i + "_" + j + "' class='door_closed img'></td>");
                } else {

                    if (!listeCases[i][j].getEst_revele()) {
                        $("#board").append("<td id='" + i + "_" + j + "' class='hidden img'></td>");
                    } else {

                        if (listeCases[i][j].getEst_detruit()) {
                            $("#board").append("<td id='" + i + "_" + j + "' class='broken img'></td>");
                        } else {

                            if (listeCases[i][j].getEst_destructible()) {
                                $("#board").append("<td id='" + i + "_" + j + "' class='revealed img'></td>");
                            } else {
                                $("#board").append("<td id='" + i + "_" + j + "' class='blocked img'></td>");
                            }

                        }

                    }

                }

            }
            $('#board').append("</tr>");
        }
        $('#board').append("</table>");

    }

    affichePlateau(grille);

});