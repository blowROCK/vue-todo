export const generatorID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export const yyyy_mm_dd = function(date){
  return date.toISOString().substring(0, 10);
};

export const isInvalidChar = function(str){
  const rex1 = /[^a-z|A-Z|가-힣|ㄱ-ㅎㅏ-ㅣ0-9|!@#$%^&*()_+=,.?|\n\s\r]/g;
  return rex1.test(str);
}
