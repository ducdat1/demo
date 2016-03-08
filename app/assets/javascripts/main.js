 $(document).ready(function(){
  $("input#search").keyup(function(event) {
  	index = $("input#search").val();
    $.ajax({
      url: "products#search",
      type: "GET",
      dataType: "script",
      data: {"search": index},
      beforeSend:  function() {                
            $('input#search').addClass('loading');
        },
        success: function(server_response)        
        {
            $('.result').html(server_response).show();     
            if ($('input#search').hasClass("loading")) {       
                $("input#search").removeClass("loading");        
            } 
        }
    });return false;
  });
});
 $(document).ready(function(){
  $('td > input#quantity').change(function() {
    key = $('td > input#quantity').val();
    $('.display-test').html(key).show;
  });
 });