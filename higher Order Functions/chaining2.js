let arr = [
    { "order_id": 1, "product_id": 25, "quantity": 15, "user_id": 20, "order_date": "1645767336" },
    { "order_id": 2, "product_id": 25, "quantity": 11, "user_id": 7, "order_date": "1646074072" },
    { "order_id": 3, "product_id": 28, "quantity": 12, "user_id": 20, "order_date": "1649596948" },
    { "order_id": 4, "product_id": 37, "quantity": 2, "user_id": 18, "order_date": "1629622903" },
    { "order_id": 5, "product_id": 15, "quantity": 9, "user_id": 6, "order_date": "1654642640" },
    { "order_id": 6, "product_id": 12, "quantity": 4, "user_id": 2, "order_date": "1637077313" }, 
    { "order_id": 7, "product_id": 5, "quantity": 20, "user_id": 16, "order_date": "1619069534" }, 
    { "order_id": 8, "product_id": 8, "quantity": 9, "user_id": 11, "order_date": "1649951404" },
    { "order_id": 9, "product_id": 9, "quantity": 18, "user_id": 13, "order_date": "1642497714" }, 
    { "order_id": 10, "product_id": 11, "quantity": 19, "user_id": 11, "order_date": "1637315114" },
    { "order_id": 11, "product_id": 9, "quantity": 15, "user_id": 10, "order_date": "1658620239" }, 
    { "order_id": 12, "product_id": 8, "quantity": 6, "user_id": 11, "order_date": "1630826177" }
]

// Age of all the ladies


let ladiesArr = arr.filter(function (obj) {
    return obj.user_id == '20'
}).map(function (n) {
    return n.product_id
})


console.log(ladiesArr)