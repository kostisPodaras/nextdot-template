import sequenceFrom from './sequenceFrom';

const sequence = (...operations) => sequenceFrom(() => operations);

export default sequence;
