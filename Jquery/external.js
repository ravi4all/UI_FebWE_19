$(document).ready(function() {
    $("#btn").click(function() {
        var str = $("input").val();
        $("span").html(str);
    })
})