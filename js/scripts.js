$(document).ready(function(){
  $("#email-form").submit(function(){
    var dateInput = $("input#date").val();
    var greetingInput = $("input#greeting").val();
    var nameInput = $("input#name").val();
    var expletiveInput= $("input#expletive").val().toUpperCase();
    var jobTitleInput = $("input#job-title").val();
    var nounInput = $("input#noun").val();
    var restaurantInput = $("input#restaurant").val();
    var jobTitle2Input = $("input#job-title2").val();
    var jobTitle3Input = $("input#job-title3").val();
    var numberInput = $("input#number").val();
    var goodbyeSalutationInput= $("input#goodbye-salutation").val();
    var bossNameInput = $("input#boss-name").val();

    $(".date").text(dateInput);
    $(".greeting").text(greetingInput);
    $(".name").text(nameInput);
    $(".expletive").text(expletiveInput);
    $(".job-title").text(jobTitleInput);
    $(".noun").text(nounInput);
    $(".restaurant").text(restaurantInput);
    $(".job-title2").text(jobTitle2Input);
    $(".job-title3").text(jobTitle3Input);
    $(".number").text(numberInput);
    $(".goodbye-salutation").text(goodbyeSalutationInput);
    $(".boss-name").text(bossNameInput);

    $("#email").show();

    event.preventDefault();
  });
});
