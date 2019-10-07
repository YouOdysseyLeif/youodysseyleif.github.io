var grandtotal = document.querySelector("#GrandTotal").innerHTML.substr(1); //grand total
var taxtotal = document.querySelector("#TaxTotal").innerHTML.substr(1);
var servicetotal = document.querySelector("#ServiceTotal").innerHTML.substr(1);
var orderid = document.querySelector("#hdnorderId").value; //order id
var orderitemspre = document.querySelector(
  "#dvMagnificentOrderSummary > div > div.seat__body > div > div.seat__group.ticket-request > ul > li > div.divListTickets > p"
).innerHTML; //quantity and ticket type "2 X Sadonna  2019-10-03 8:00 PM Section: General "
var orderquantregex = /^[0-9]+/; //gets the quanity 2
var orderquant = orderquantregex.exec(orderitemspre);
var unitprice = document.querySelector("#dvMagnificentOrderSummary > div > div.seat__body > div > div.seat__group.ticket-request > ul > li > div.seconddivListTickets > ul > li").innerText;

//(?<=X\s).+?(?=[0-9]) //working on trying to get the fucking show title out of the middle

var orderitems =[];
for (i = 0; i < [EventId].length; i++) {
  var orderproducts = {name: };
}
window.dataLayer = window.dataLayer || [];
dataLayer.push({
   'transactionId': [OrderID],
   'transactionAffiliation': 'SimpleTix',
   'transactionTotal': [Revenue],
   'transactionProducts': [{
      'name': [EventId]
    }]
});


<script>
// Send transaction data with a pageview if available
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.
dataLayer.push({
  'ecommerce': {
    'checkout': {
      'actionField': {
        'id': [OrderID],                         // Transaction ID. Required for purchases and refunds.
        'affiliation': 'SimpleTix',
        'revenue': [Revenue],                     // Total transaction value (incl. tax and shipping)
      },

    }
  }
});
</script>
      'products': [{                            // List of productFieldObjects.
        'name': 'Triblend Android T-Shirt',     // Name or ID is required.
        'id': '12345',
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray',
        'quantity': 1,
        'coupon': ''                            // Optional fields may be omitted or set to empty string.
       },
       {
        'name': 'Donut Friday Scented T-Shirt',
        'id': '67890',
        'price': '33.75',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Black',
        'quantity': 1
       }]
<script>
/**
 * A function to handle a click on a checkout button. This function uses the eventCallback
 * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
 */
window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 1, 'option': 'Visa'},
        'products': [{
          'name': [EventId],
       }]
     }
   },
   'eventCallback': function() {
      document.location = 'checkout.html';
   }
  });

</script>

<script>
window.dataLayer = window.dataLayer || [];
dataLayer.push({
   'transactionId': orderid,
   'transactionAffiliation': 'SimpleTix',
   'transactionTotal': grandtotal,
   'transactionTax': taxtotal,
   'transactionShipping': servicetotal,
   'transactionProducts': [{
       'name': 'T-Shirt',
       'category': 'Ticket',
       'price': 11.99,
       'quantity': 1
   },{
       'sku': 'AA1243544',
       'name': 'Hat',
       'category': 'Apparel',
       'price': 9.99,
       'quantity': 2
   }]
});
</script>

'transactionProducts': [{
       'name': [EventId]
      }]



      //product details:

<script type="text/javascript">
// Measure a view of product details. This example assumes the detail view occurs on pageload,
// and also tracks a standard pageview of the details page.
var ticketPrice = document.querySelector("#mainPriceDiv > p.price.st_top_price_section_right_title").innerText.replace("$", "");
dataLayer.push({
  'ecommerce': {
    'detail': {   // 'detail' actions have an optional list property.
      'products': [{
        'name': EventTitle,         // Name or ID is required.
        'id': [EventId],
        'price': ticketPrice,
       }]
     }
   }
});
</script>


<script>
// Measure a view of product details. This example assumes the detail view occurs on pageload,
// and also tracks a standard pageview of the details page.
dataLayer.push({
  'ecommerce': {
    'detail': {
      'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
      'products': [{
        'name': 'Triblend Android T-Shirt',         // Name or ID is required.
        'id': '12345',
        'price': '15.25',
        'brand': 'Google',
        'category': 'Apparel',
        'variant': 'Gray'
       }]
     }
   }
});
</script>

//checkout

<script>
/**
 * A function to handle a click on a checkout button. This function uses the eventCallback
 * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
 */
 var eventName = document.querySelector("#dvMagnificentOrderSummary > div > div.seat__body > div > div.seat__group.ticket-request > ul > li > div.divListTickets > p").innerText;
function onCheckout() {
  dataLayer.push({
    'event': 'checkout',
    'ecommerce': {
      'checkout': {
        'actionField': {'step': 1},
        'products': [{
          'name': EventTitle,
          'id': [EventId],
          'price': [Revenue],
       }]
     }
   }
  });
}
</script>