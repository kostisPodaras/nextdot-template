import htmlCommentRegex from 'html-comment-regex';

const isBinary = (buf) => {
  const isBuf = Buffer.isBuffer(buf);

  /* eslint-disable no-plusplus */
  for (let i = 0; i < 24; i++) {
    const charCode = isBuf ? buf[i] : buf.charCodeAt(i);

    if (charCode === 65533 || charCode <= 8) {
      return true;
    }
  }

  return false;
};

const regex = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?<svg[^>]*>[^]*<\/svg>\s*$/i;
const isSvg = (input) =>
  !!input &&
  typeof input === 'string' &&
  !isBinary(input) &&
  regex.test(input.toString().replace(htmlCommentRegex, ''));

export default isSvg;
