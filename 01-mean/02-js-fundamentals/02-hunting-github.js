// 1 hour

$(function () {
    $.get("https://api.github.com/users/ZVR999", displayName)
    function displayName(data) {
        console.log(data.name);
        $('#button').click(function(){
            $('#name').append(data.name);
        })
    }

});