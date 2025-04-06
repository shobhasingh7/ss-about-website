/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Uplynk',
    position: 'Senior Software Developer',
    url: 'https://uplynk.com',
    startDate: '2024-07-01',
    summary: ' ',
    highlights: [
     
    ],
  },
  {
    name: 'Verizon Digital Media Services ',
    position: '',
    url: '',
    startDate: '2022-01-01',
    endDate: '2024-07-01',
    summary: ``,
    highlights: [
     
    ],
  }
];

export default work;
