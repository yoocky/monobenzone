$(function() {
    AV.init({
        appId: "PmpqD8uKDHcPsGpWm8MqrDwS-gzGzoHsz",
        appKey: "iXDr4R6MfPjLW49MoeIrlIhV",
        serverURLs: "https://pmpqd8uk.lc-cn-n1-shared.com"
    });
    var Comment = AV.Object.extend('Comment');
    // 构建对象
    var comment = new Comment();
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            comment.set('name', name);
            comment.set('email', email);
            comment.set('phone', phone);
            comment.set('message', message);
            // 将对象保存到云端
            comment.save().then(function (res) {
                // Success message
                $('#success').html("<div class='alert alert-success'>");
                $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-success')
                    .append("<strong>你的消息已经成功提交，我们会尽快与您联系。 </strong>");
                $('#success > .alert-success')
                    .append('</div>');

                //clear all fields
                $('#contactForm').trigger("reset");
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
