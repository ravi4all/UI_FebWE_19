$(document).ready(function() {
    $("button").on("click", function() {
        var opr = $(this).html();
        var f_num = $("#box_1").val();
        var s_num = $("#box_2").val();
        var expression = f_num + opr + s_num;
        var result = eval(expression);
        $("span").html(result);
    })
});