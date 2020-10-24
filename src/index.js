module.exports = function towelSort(matrix) {
    return matrix
        ? matrix.reduce(
              (accum, item, index) =>
                  accum.concat(index % 2 === 1 ? item.reverse() : item),
              []
          )
        : [];
};
