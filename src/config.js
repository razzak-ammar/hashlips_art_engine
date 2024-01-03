const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = 'KUMBA';
const description = 'KUMBA! KUMBA! KUMBA!';
const baseUri = 'ipfs://NewUriToReplace';

const solanaMetadata = {
  symbol: 'YC',
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: 'https://www.youtube.com/c/hashlipsnft',
  creators: [
    {
      address: '7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC',
      share: 100
    }
  ]
};

// Index starting at 0
const Z_INDEX_100 = 1;
const Z_INDEX_40 = 9;

// If you have selected Solana then the collection starts from 0 automatically
// const layersMap2 = new Map([
//   ['Head1#1.png', ['Head1z100#1.png']],
//   ['Head2#1.png', ['Head2z40#1.png', 'Head2z100#1.png']],
//   ['Head10#1.png', ['Head10z40#1.png']],
//   ['Head11#1.png', ['Head11z100#1.png', 'Head11z40#1.png']],
//   ['Head14#1.png', ['Head14z40#1.png']],
//   ['Head24#1.png', ['Head24z40#1.png']],
//   ['Head25#1.png', ['Head25z40#1.png']],
//   ['Head26#1.png', ['Head26z100#1.png', 'Head26z40#1.png']],
//   ['Head31#1.png', ['Head31z40#1.png']],
//   ['Head3#1.png', ['Head3z100#1.png']],
//   ['Head4#1.png', ['Head4z100#1.png', 'Head4z40#1.png']],
//   ['Head5#1.png', ['Head5z40#1.png']],
//   ['Head6#1.png', ['Head6z100#1.png', 'Head6z40#1.png']],
//   ['Head7#1.png', ['Head7z100#1.png', 'Head7z40#1.png']],
//   ['Head8#1.png', ['Head8z100#1.png', 'Head8z40#1.png']],
//   ['Head9#1.png', ['Head9z40#1.png']],
//   ['Head23#1.png', ['Head23z40#1.png']]
// ]);

const layersMap = new Map([
  ['Locs#3.png', ['Head1z100.png']],
  ['Strands#2.png', ['Head2z40.png', 'Head2z100.png']],
  ['Boycut#2.png', ['Head3z100.png']],
  ['Tonsure#3.png', ['Head4z100.png']],
  ['Mullet#5.png', ['Head5z40.png']],
  ['Chalked#3.png', ['Head6z40.png', 'Head6z100.png']],
  ['Jojo#2.png', ['Head7z40.png', 'Head7z100.png']],
  ['Part#4.png', ['Head8z40.png', 'Head8z100.png']],
  ['Bun#5.png', ['Head9z40.png']],
  ['Honky#3.png', ['Head10z40.png']],
  ['DonaldTrump#6.png', ['Head11z40.png', 'Head11z100.png']],
  ['Tiger#2.png', ['Head14z40.png']],
  ['Sloth#3.png', ['Head23z40.png']],
  ['Afro#5.png', ['Head24z40.png']],
  ['Crown#2.png', ['Head25z40.png']],
  ['Long#3.png', ['Head26z40.png', 'Head26z100.png']],
  ['Bold#6.png', ['Head31z40.png']]
]);

const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      /* Layers
        - Background
        - Head 
      */
      { name: 'Background' }, // z0
      // z10 hair             // z10
      { name: 'Hand' }, // z20
      { name: 'Base' }, // z30
      { name: 'Body' }, // z40
      { name: 'Eyes' }, // z50
      { name: 'Mouth' }, // z55
      { name: 'Ears' }, // z65
      { name: 'Nose' }, // z60
      // z70 hair     // z70
      { name: 'Brows' }, // z80
      { name: 'Head' } // z110
    ]
  }
];

const shuffleLayerConfigurations = false;

const debugLogs = true;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500
};

const text = {
  only: false,
  color: '#ffffff',
  size: 20,
  xGap: 40,
  yGap: 40,
  align: 'left',
  baseline: 'top',
  weight: 'regular',
  family: 'Courier',
  spacer: ' => '
};

const pixelFormat = {
  ratio: 2 / 128
};

const background = {
  generate: true,
  brightness: '80%',
  static: false,
  default: '#000000'
};

const extraMetadata = {};

const rarityDelimiter = '#';

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 500,
  imageRatio: format.height / format.width,
  imageName: 'preview.png'
};

const preview_gif = {
  numberOfImages: 5,
  order: 'ASC', // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: 'preview.gif'
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  layersMap,
  Z_INDEX_100,
  Z_INDEX_40
};
