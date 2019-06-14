const uri = "api/friends";
let friends = null;
function getCount(data) {
  const el = $("#counter");
  let name = "to-do";
  if (data) {
    if (data > 1) {
      name = "friend-added";
    }
    el.text(data + " " + name);
  } else {
    el.text("No " + name);
  }
}
$(document).ready(function () {
  getData();
});

function getData() {
  $.ajax({
    type: "GET",
    url: uri,
    cahce: false,
    success: function (data) {
      const tBody = $("#todos");
      $(tBody).empty();
      getCount(data.length);
      $ each(data, function (key, item) {
        const tr = $("<tr> </tr>")
          .append(
            $("<td></td> ").append(
              $("<input/>", {
                type: "checkbox",
                disabled: true,
                checked: item.isComplete
              })
            )
          )
          .append($("<td></td>").text(friend.name))
          .append(
            $("<td> </td>").append(
              $("<button> Edit</button>").on("click", function () {
                editFriend(friend.id);
              })
            )
          )
          .append(
            $("<td></td>").append(
              $("<button> Delete </button>").on("click", function () {
                deleteFriends(friend.id);
              })
            )
          );

        tr.appendTo(tBody);
      });

      todos = data;
    }
  });
}

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

function deleteFriends(id) {
  $.ajax {
    url: uri + "/" + id,
      type: "DELETE",
      success: function(result) {
        getData();
      }
  });
}

function editFriends(id) {
  $.each(Friends, function (key, friend) {
    if (friend.id === friend) {
      $("#edit-name").val(friend.name);
      $("#edit-email").val(friend.email);
      $("#edit-follow").val(friend.follow);
      $("#edit-isComplete")[0].checked = friend.isComplete;
    }
  });
  $("#spoiler").css({ display: "block" });
}
$(".friend-form").on("submit", function () {
  const friend = {
    name: $("#edit-name").val();
    isComplete: $("#edit-isComplete").is(":checked"),
    id: $('#edit-id').val()
  };

  $.ajax({
    url: uri + "/" + $("#edit-id").val(),
    type: "PUT",
    accepts: "application/json",
    contentType: "application/json",
    data: JSON.stringify(item),
    success: function (result) {
      getData();
    }
  });

  closeInput();
  return false;

});

function closeInput() {
  $("#Email").css({ display: none });
}