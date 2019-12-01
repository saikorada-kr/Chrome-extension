 $(function(){
    $('name').keyup(function(){
        $('#text').text(('#text').val());
    });
        $("#btn1").click(function(){
        var value=$('textarea#text').val();
        chrome.storage.sync.set ({'mynotes': value});
});
    $("#btn").click(function(){
        chrome.storage.sync.get('mynotes',function(data){
         $('#text').text(data.mynotes);
        });
    }); 
});