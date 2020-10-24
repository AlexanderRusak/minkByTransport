export const getRoutesCount = (obj, filteredArray) => {
  return obj.routeNum in filteredArray ? 0 : (filteredArray[obj.routeNum] = 1);
};

/* export class ArrayMethods {
  static getRoutesCount(arrData, filteredArray) {
    arrData.filter(function (obj) {
      return obj.routeNum in filteredArray
        ? 0
        : (filteredArray[obj.routeNum] = 1);
    });
  }
}
 */
