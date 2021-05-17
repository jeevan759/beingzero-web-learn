window.stop()
console.log("hi");
function submit() {
  document.getElementById("div1").innerHTML="<p>hi</p>";
  // Call Web API to get a list of Product
  // $.ajax({
  //   url: '/api/Product/',
  //   type: 'GET',
  //   dataType: 'json',
  //   success: function (products) {
  //     console.log(products)
  //   },
  //   error: function (request, message, error) {
  //     handleException(request, message, error);
  //   }
  // });
}