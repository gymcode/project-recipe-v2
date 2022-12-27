
export const TrimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

export const isEmpty = function (obj){
    return Object.keys(obj).length == 0 ? true : false
}