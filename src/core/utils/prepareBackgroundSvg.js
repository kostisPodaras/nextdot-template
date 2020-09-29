const REGEX = {
  whitespace: /\s+/g,
  urlHexPairs: /%[\dA-F]{2}/g,
  quotes: /"/g,
};

const specialHexEncode = (match) => {
  switch (match) {
    case '%20':
      return ' ';
    case '%3D':
      return '=';
    case '%3A':
      return ':';
    case '%2F':
      return '/';
    default:
      return match.toLowerCase();
  }
};

const collapseWhitespace = (str) => str.trim().replace(REGEX.whitespace, ' ');
const dataURIPayload = (string) =>
  encodeURIComponent(string).replace(REGEX.urlHexPairs, specialHexEncode);

const svgToMiniDataURI = (svgString) => {
  if (svgString.charCodeAt(0) === 0xfeff) {
    svgString = svgString.slice(1);
  }

  const body = collapseWhitespace(svgString).replace(REGEX.quotes, "'");

  return `data:image/svg+xml,${dataURIPayload(body)}`;
};

const prepareBackgroundSvg = (svg = '', raw) => {
  const encodedSvg = svgToMiniDataURI(svg.trim());
  const backgroundSvg = raw ? encodedSvg : `url("${encodedSvg}")`;

  return backgroundSvg;
};

export default prepareBackgroundSvg;
