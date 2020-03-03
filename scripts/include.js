// (C) RootiCo
$(function() {
    let includes = $("[data-include]");
    jQuery.each(includes, function() {
        let file = "html_source/" + $(this).data("include") + ".html";
        $(this).load(file);
    });
});
