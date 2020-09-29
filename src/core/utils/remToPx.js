const remToPx = (rem) =>
  parseFloat(rem) *
  parseFloat(getComputedStyle(document.documentElement).fontSize);

export default remToPx;
