import CryptoJS from "crypto-js";
import { APP } from "./constant.js";

export const stringEncryption = async (string) => {
  try {
    return CryptoJS.AES.encrypt(string, APP.CRYPTO_KEY).toString();
  } catch (error) {
    throw error;
  }
};

export const stringDecryption = async (string) => {
  try {
    return CryptoJS.AES.decrypt(string, APP.CRYPTO_KEY).toString(CryptoJS.enc.Utf8);
  } catch (error) {
    throw error;
  }
};
