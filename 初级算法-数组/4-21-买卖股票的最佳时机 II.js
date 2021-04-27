/**
 * 给定一个数组 prices， 其中 prices[i] 是一支给定股票第 i 天的价格。

 设计一个算法来计算你所能获取的最大利润。 你可以尽可能地完成更多的交易（ 多次买卖一支股票）。

 注意： 你不能同时参与多笔交易（ 你必须在再次购买前出售掉之前的股票）。

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 示例 1:

     输入: prices = [7, 1, 5, 3, 6, 4]
 输出: 7
 解释: 在第 2 天（ 股票价格 = 1） 的时候买入， 在第 3 天（ 股票价格 = 5） 的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
 随后， 在第 4 天（ 股票价格 = 3） 的时候买入， 在第 5 天（ 股票价格 = 6） 的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3。
 示例 2:

     输入: prices = [1, 2, 3, 4, 5]
 输出: 4
 解释: 在第 1 天（ 股票价格 = 1） 的时候买入， 在第 5 天（ 股票价格 = 5） 的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4。
 注意你不能在第 1 天和第 2 天接连购买股票， 之后再将它们卖出。 因为这样属于同时参与了多笔交易， 你必须在再次购买前出售掉之前的股票。
 示例 3:

     输入: prices = [7, 6, 4, 3, 1]
 输出: 0
 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

 作者： 力扣(LeetCode)
 链接： https: //leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/
     来源： 力扣（ LeetCode）
 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。
 */

/**
 * 自己写的
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length
    if (prices.length < 2 || prices == null)
        return 0
    // 总利润
    let profit = 0,
        one_profit = 0; // 一次的利润
    let buy = 0;
    for (let sell = 1; sell < len; sell++) {
        // 如果股票上涨，计算当前利润,
        if (one_profit < prices[sell] - prices[buy]) {
            one_profit = prices[sell] - prices[buy];
            // 最后如果还有利润，就加入总利润
            if (sell + 1 == len) profit += one_profit
            // 股票下跌
        } else {
            // 一次股票卖出
            profit += one_profit;
            buy = sell; // 改变买入点
            one_profit = 0; // 重置当次利润
        }

    }
    return profit;
};

/**
 * 别人的
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var len = prices ? prices.length : 0;
    if (len < 2) {
        return 0;
    }
    var profit = 0;
    var end = len - 1;
    for (var i = 0; i < end; i++) {
        var result = prices[i + 1] - prices[i]
        if (result > 0) {
            profit += result;
        }
    }
    return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6]));