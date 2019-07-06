var window_url = window.location.href;
var url = new URL(window_url);
var book_id = url.searchParams.get("book_id");


// $.ajax({
//     url: "http://localhost:3000/book-details",
//     data: { 
//         "book_id": book_id
//     },
//     cache: false,
//     type: "GET",
//     success: function(response) {
//         console.log(response)
//         var price = response[0].price;
//         var book_title = response[0].title
//         console.log(price)
//         $('p.product-price')[0].textContent = "$" + price;
//     },
//     error: function(xhr) {

//     }
// });

// $.get("http://localhost:3000/book-details", function( data ) {
//     $('p.product-price')[0].textContent = "$" + data.price
// }
// )

