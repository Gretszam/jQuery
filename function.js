        $("select")
            .change(function () {
                var string = "";
                $("select option:selected").each(function () {
                    string += $(this).text() + " =>";
                });
                $("#div").text(string);
            })
            .change();

$("#off").click(function() {
    $("#text1").focus();
});

let $linky = $("#link");
let $div = $("#div");

$div.on({
    click: () => {
        $linky.show();
    }
});
