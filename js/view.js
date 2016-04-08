

    

    function affichePlateau(listeCases) {

        $('#board').append("<table>");
        for (var i = 0; i < 6; i++) {
            $('#board').append("<tr>");
            for (var j = 0; j < 5; j++) {

                if (i == 0 && j == 0) {
                    $("#board").append("<td id='" + i + "_" + j + "' class='door_closed img' onclick='eventOnClick(this)'></td>");
                } else {

                    if (!listeCases[i][j].getEst_revele()) {
                        $("#board").append("<td id='" + i + "_" + j + "' class='hidden img' onclick='eventOnClick(this)'></td>");
                    } else {

                        if (listeCases[i][j].getEst_detruit()) {
                            
                            if(listeCases[i][j].getMonstre != false){
                                $("#board").append("<td id='" + i + "_" + j + "' class='monster img' onclick='eventOnClick(this)'></td>");
                            } else {
                                $("#board").append("<td id='" + i + "_" + j + "' class='broken img' onclick='eventOnClick(this)'></td>");
                            }
                            
                        } else {

                            if (listeCases[i][j].getEst_destructible()) {
                                $("#board").append("<td id='" + i + "_" + j + "' class='revealed img' onclick='eventOnClick(this)'></td>");
                            } else {
                                $("#board").append("<td id='" + i + "_" + j + "' class='blocked img' onclick='eventOnClick(this)'></td>");
                            }

                        }

                    }

                }

            }
            $('#board').append("</tr>");
        }
        $('#board').append("</table>");
        $("#damage p").html(4);
        $("#health p").html(50);
    }
 

    //affichePlateau(grille);
    
    


