$(document).ready(function () {
  getData();
});

function getData() {
  $.ajax({
    type: "GET",
    url: uri,
    cache: false,
    success: function (data) {
      const tBody = $("#friends");

      $(tBody).empty();

      getCount(data.length);

      $.each(data, function (key, item) {
        const tr = $("<tr></tr>")
          .append(
            $("<td></td>").append(
              $("<input/>", {
                type: "checkbox",
                disabled: true,
                checked: item.isComplete
              })
            )
          )
          .append($("<td></td>").text(friend.name))
          .append(
            $("<td></td>").append(
              $("<button>Edit</button>").on("click", function () {
              editFriend(friend.id);
              })
            )
          )
          .append(
            $("<td></td>").append(
              $("<button>Delete</button>").on("click", function () {
                deleteItem(item.id);
              })
            )
          );

        tr.appendTo(tBody);
      });

      friends = data;
    }
  });
}