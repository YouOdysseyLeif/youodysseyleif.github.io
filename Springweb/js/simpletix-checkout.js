var grandtotal = document.querySelector("#GrandTotal").innerHTML.substr(1); //grand total
var orderid = document.querySelector("#hdnorderId").value; //order id
var orderitemspre = document.querySelector(
  "#dvMagnificentOrderSummary > div > div.seat__body > div > div.seat__group.ticket-request > ul > li > div.divListTickets > p"
).innerHTML; //quantity and ticket type "2 X Sadonna  2019-10-03 8:00 PM Section: General "
var orderquant = orderitemspre 
(^[0-9]+) //gets the quanity 2
(?<=X\s).+?(?=[0-9]) //working on trying to get the fucking show title out of the middle


<script>
window.dataLayer = window.dataLayer || [];
dataLayer.push({
   'transactionId': '1234',
   'transactionAffiliation': 'Acme Clothing',
   'transactionTotal': 38.26,
   'transactionTax': 1.29,
   'transactionShipping': 5,
   'transactionProducts': [{
       'sku': 'DD44',
       'name': 'T-Shirt',
       'category': 'Apparel',
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