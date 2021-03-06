let updateTable = function () {
  totalPrice = 0;

  $("tbody tr").each(function (__, elem) {
    let price = parseFloat($(elem).children(".price").text());
    let qty = parseInt($(elem).find(".qty input").val());

    let subtotal = price * qty;
    $(elem).children(".subtotal").html(subtotal);

    totalPrice += subtotal;
    $("#total-price").html(totalPrice);
  });
};

$(document).ready(function () {
  updateTable();

  $(document).on("click", ".btn.remove", function (__) {
    $(this).closest("tr").remove();
    updateTable();
  });

  var timeout;
  $(document).on("input", "tr input", function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateTable();
    }, 200);
  });

  $("#addItem").on("submit", function (event) {
    event.preventDefault();
    let name = $(this).children("[name=name]").val();
    let price = $(this).children("[name=price]").val();
    let qty = $(this).children("[name=qty]").val();
    console.log(price);

    $("tbody").append(
      "<tr>" +
        '<td class="name">' +
        name +
        "</td>" +
        '<td class="price">' +
        Number(price).toFixed(2) +
        "</td>" +
        '<td class="qty"><input type="number" min="1" value="' +
        qty +
        '" /></td>' +
        '<td class="subtotal"></td>' +
        '<td><button class="btn btn-light btn-sm remove">Remove</button></td>' +
        "</tr>"
    );
    updateTable();
  });
});
