$(document).ready(function() {
    $("#submitBtn").click(function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        let password = $("#password").val();
        let rpassword = $("#rpassword").val();
        
        var inputs = $('form input[type="text"], form input[type="password"]');
        var missingInputs = [];

        inputs.each(function() {
            if ($(this).val() === '') {
                missingInputs.push($(this).attr('name'));
            }
        });

        if (password !== rpassword) {
            alert("Passwords do not match!");
        } else if (missingInputs.length > 0) {
            alert('Information missing: ' + missingInputs.join(', '));
        } else {
            $('form').submit();
        }
    });
});
