$(document).ready(function() {

  //  Load my data method
  function getMoreData(num){
    // Get the json data
    $.get( "data.json", function(file_data) {
      var json_data="";
      var last_id=$(".container ul li:last-child").attr("data-id");
      if(last_id==undefined){last_id=0;}
      var end_key=last_id+num;
      //  loop in json
      $.each(file_data.slice(last_id,end_key), function(i,data) {
        // show the data
        var json_data = "<li data-id="+data.id+"> Name: "+data.name+"</li>";
        $(".container ul ").append(json_data);
      }); // each

    }); // get
  } // load

  // Call my hook
  $('#hook').hook({
    reloadPage: false,
    reloadEl: function(){
      getMoreData(5);
    }
  });


}); // ready
