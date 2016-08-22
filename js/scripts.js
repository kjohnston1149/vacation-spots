  // bussiness end
function Destination(place, country, date, info, image){
  this.placeName = place;
  this.country = country;
  this.date = date;
  this.info = info;
  this.image = image;
}

  // front end
$(function() {
  $("#submit").click(function(event){
    event.preventDefault();
    var placeName = $("#placeName").val();
    var country = $("#country").val();
    var date = $("#date").val();
    var info = $("#info").val();
    var image = $("#image").val();
    var newDestination = new Destination(placeName, country, date, info, image);

    $("ul#placeList").append("<li><span class='listItem'>" + newDestination.placeName + "</span></li>");

    $(".listItem").last().click(function() {
      $("#showTravelInfo").show();
      $("#showTravelInfo h2").text(newDestination.placeName);
      $(".image").html("<img src='" + image + "'>");
      $(".country").text(newDestination.country);
      $(".date").text(newDestination.date);
      $(".info").text(newDestination.info);
    });

    $("#placeName").val("");
    $("#image").val("");
    $("#country").val("");
    $("#date").val("");
    $("#info").val("");


  });

});
