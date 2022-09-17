export const trimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };