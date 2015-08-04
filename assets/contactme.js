$(document).ready(function() {

  /* writes emails backwards to avoid spammers. D
   * Does it even work? I don't know ... */
  function printEmail() {
    var reversed = "ude.yelekreb@nauy.y";
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

