function addFriend() {
  const friend = {
    name: $("#add-name").val(),
    isComplete: false
  };
  $.ajax({
    type: "POST",
    accepts: "application/json",
    url: uri,
    contentType: "application/json",
    data: JSON.stringify(item),
    error: function (jqXHR, textStatus, errorThrown) {
      alert("Something went wrong!");
    },
    success: function (result) {
      getData();
      $("#add-name").val("");
    }
  });
}