/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min_i = 0;
    var profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[min_i]) min_i = i;
        else {
            profit = profit > prices[i] - prices[min_i] ? profit : prices[i] - prices[min_i];
        }
        
    }
    return profit;
};