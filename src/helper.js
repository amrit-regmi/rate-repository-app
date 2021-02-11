export const convertToK = (value) => {
  if(value >= 1000) return((parseFloat(value)/1000).toFixed(1)+'k ');
  return value;
};