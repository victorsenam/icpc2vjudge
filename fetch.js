var info= document.querySelectorAll('#mainScoreboard tbody tr');

var res = "";
for (var k = 0; k < info.length; k++) {
  var el = info[k];
  res += "<tr><td>" + el.children[2].children[0].innerHTML + "</td>";
  for (var i = 5; i < el.children.length; i++) {
    var curr = el.children[i].children;
    var val;

    if (curr.length == 0) {
      val = "";
    } else if (curr[0].children.length == 0) {
      val = curr[0].innerHTML+" # --";
    } else {
      val = curr[0].innerText.replace(" - ", " # ");
    }

    res += "<td>"+val+"</td>"
  }
  res += "</tr>";
}

document.write("<table>"+res+"</table>");
