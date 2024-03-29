import { serverFunctions, isGASEnvironment } from '../serverFunctions';

const SheetNameAPI = async (): Promise<string> => {
  if (isGASEnvironment()) {
    const ret = await serverFunctions.getSpreadSheetName();

    return ret;
  } else {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve('THIS IS PSEUDO TITLE');
      }, 1500);
    });
  }
};

const SheetUrlAPI = async (): Promise<string> => {
  if (isGASEnvironment()) {
    const ret = await serverFunctions.getSpreadSheetUrl();

    return ret;
  } else {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 1500);
    });
  }
};

export { SheetNameAPI, SheetUrlAPI };
