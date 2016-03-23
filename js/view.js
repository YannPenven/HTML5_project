var blocks = new Array();
for (var i = 0; i < 6; i++) {
    blocks.push(new Array());
    for (var j = 0; j < 5; j++) {
        blocks[i].push(new case_(0, 0));
    }
}


$(document).ready(function() {



    $('#board').append("<table>");
    for (var i = 1; i <= 6; i++) {
        $('#board').append("<tr>");
        for (var j = 1; j <= 5; j++) {

            if (!(blocks[i][j].getEst_revele())) {
                $("#board").append("<td id='" + i + "_" + j + "' class='hidden'></td>");
            } else if (blocks[i][j].getEst_destructible()) {
                $("#board").append("<td id='" + i + "_" + j + "' class='revealed'></td>");
            } else {
                $("#board").append("<td id='" + i + "_" + j + "' class='broken'></td>");
            }

        }
        $('#board').append("</tr>");
    }
    $('#board').append("</table>");

});