var blocks = new Array();
for (var i = 0; i < 6; i++) {
    blocks.push();
    for (var j = 0; j < 5; j++) {
        blocks.push(new block(1, 0));
    }
}


$(document).ready(function() {



    $('#board').append("<table>");
    for (var i = 1; i <= 6; i++) {
        $('#board').append("<tr>");
        for (var j = 1; j <= 5; j++) {

            $("#board").append("<td id='" + i + "_" + j + "'></td>")

        }
        $('#board').append("</tr>");
    }
    $('#board').append("</table>");

});