import IData from "./model/IData.model";

export const initialData: IData = {
  net: {
    binaryThresh: '0.5',
    hiddenLayers: {
      0: '8',
      1: '4',
      2: '0',
      3: '0',
      4: '0',
      5: '0',
      6: '0',
      7: '0',
    },
    activation: 'leaky-relu',
    leakyReluAlpha: '0.0001',
  },
  train: {
    iterations: '50000',
    errorThresh: '0.005',
    log: true,
    logPeriod: '100',
    learningRate: '0.001',
    momentum: '0.1',
    callbackPeriod: '10',
    timeout: '9999999999',
  },
};
