/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minFallingPathSum = function(grid) {
    var pfm = 0, psm = 0, pindex = -1;
    var cfm, csm, cindex;
    var num;
    for (let i = 0; i < grid.length; i++) {
        cfm = Infinity; csm = Infinity;
        for (let j = 0; j < grid[0].length; j++) {
            num = grid[i][j] + (pindex === j ? psm : pfm); 
            if (num < cfm) {
                csm = cfm; cfm = num; cindex = j;
            } else if (num <= csm) {
                csm = num;
            }
            
        }
        pfm = cfm; psm = csm; pindex = cindex;
    }

    return cfm;
};