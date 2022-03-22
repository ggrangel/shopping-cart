let updateTable = function () {
  totalPrice = 0;

  $("tbody tr").each(function (__, elem) {
    let price = parseFloat($(elem).children(".price").text());
    let qty = parseInt($(elem).children(".qty").text());

    let subtotal = price * qty;
    $(elem).children(".subtotal").html(subtotal);

    totalPrice += subtotal;
    $("#total-price").html(totalPrice);
  });
};

$(document).ready(function () {
  updateTable();

  $(".btn.remove").on("click", function (__) {
    $(this).closest("tr").remove();
    updateTable();
  });
});
