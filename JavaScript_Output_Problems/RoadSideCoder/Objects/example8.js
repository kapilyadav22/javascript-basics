function getItems (fruitlist, ...args,favoriteFruit) {
    return [...fruitlist, ...args, favoriteFruit]
}
getItems(["banana", "apple"], "pear", "orange")


//Error : ...args should be the last parameter
//but spread operator like [...fruitlist,...args] can be in any order.


///...args is rest,
///[...fruitlist] is spread
