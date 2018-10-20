// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {

    $(".devour-form").on("submit", (event) => {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then((data) => {
      // reload page to display devoured burger in proper column
      location.reload();
    });
  });
});
  