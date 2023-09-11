$(document).ready(function() {
  /* writes emails backwards to avoid spammers. Does this actually work? idk */
  function printEmail() {
    var reversed = "moc.liamg@nauy.ot.klat";
    var link = "";
    var result;
    for (var i = reversed.length; i > -1; i -= 1) {
      link += reversed.charAt(i);
    }
    result = "<a href= 'mailto:" + link + "'" + "></a>";
    return result;
  }

  $("#emailimg").wrap(printEmail());
})
