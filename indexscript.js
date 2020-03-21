$(document).ready(function(){
    
    $(".showmore").click(function() {
        $(".group2").fadeIn("slow");
    });

    $(".filterbutton").click(function() {
        $(".filterdropdown").slideToggle("slow");
    });

    $("#male").click(function() {
        $(".female").hide()
        $(".male").show()
        $(".filterselector").removeClass("activefilter")
        $("#male").addClass("activefilter")
    });

    $("#female").click(function() {
        $(".female").show()
        $(".male").hide()
        $(".filterselector").removeClass("activefilter")
        $("#female").addClass("activefilter")
    });

    $("#allgender").click(function() {
        $(".female").show()
        $(".male").show()
        $(".filterselector").removeClass("activefilter")
        $("#allgender").addClass("activefilter")
    });

  });