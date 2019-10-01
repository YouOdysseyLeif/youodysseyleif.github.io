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

(?<=X\s).+?(?=[0-9]) //working on trying to get the fucking show title out of the middle


<script>
// Send transaction data with a pageview if available
// when the page loads. Otherwise, use an event when the transaction
// data becomes available.
dataLayer.push({
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': orderid,                         // Transaction ID. Required for purchases and refunds.
        'affiliation': 'SimpleTix',
        'revenue': grandtotal,                     // Total transaction value (incl. tax and shipping)
        'tax':taxtotal,
        'shipping': servicetotal,
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
          'name': 'Triblend Android T-Shirt',
          'id': '12345',
          'price': '15.25',
          'brand': 'Google',
          'category': 'Apparel',
          'variant': 'Gray',
          'quantity': 1
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