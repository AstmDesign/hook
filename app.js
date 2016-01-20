$(document).ready(function() {

  /**
   * Hook loader
   * Author: Astm " ⓐⓢⓣⓜ  "
   * Copyright (c) 2016.
   * All rights reserved.
   * http://astm.herokuapp.com/
   */

  //  Load my data method
  function getMoreData(num){
    // Get the json data
    $.get( "data.json", function(file_data) {
      var json_data="";
      var last_id=$(".container ul li:last-child").attr("data-id");
      if(last_id==undefined){last_id=0;}
      // covnert the last id to integer
      var end_key=parseInt(last_id)+num;
      //  loop in json
      $.each(file_data.slice(last_id,end_key), function(i,data) {
        // show the data
        var json_data = "<li data-id="+(parseInt(i)+parseInt(last_id)+1)+"> Name: "+data.name+"</li>";
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
