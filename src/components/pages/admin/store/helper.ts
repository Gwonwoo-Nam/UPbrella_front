import { DEFAULT_COORDINATE } from "@/components/pages/admin/store/UI/StoreAddressInput";
import {
  TClassification,
  TClassificationParams,
  TStoreDetail,
  TStoreParams,
} from "@/types/admin/StoreTypes";

// 협업지점 추가 시, 초기값 설정
export const storeInitializer = (res?: TStoreDetail): TStoreParams => {
  if (res) {
    const {
      activateStatus,
      address,
      addressDetail,
      businessHour,
      businessHours,
      category,
      classification,
      content,
      latitude,
      longitude,
      name,
      subClassification,
      umbrellaLocation,
      contactNumber,
      instagramId,
    } = res;

    return {
      name,
      category,
      classificationId: classification.id,
      subClassificationId: subClassification.id,
      activateStatus,
      address,
      addressDetail,
      umbrellaLocation,
      businessHour,
      contactNumber,
      instagramId,
      latitude,
      longitude,
      content,
      businessHours,
      password: "",
    } satisfies TStoreParams;
  }

  return {
    name: "",
    category: "",
    classificationId: null,
    subClassificationId: null,
    activateStatus: false,
    address: "",
    addressDetail: "",
    umbrellaLocation: "",
    businessHour: "",
    contactNumber: "",
    instagramId: "",
    latitude: null,
    longitude: null,
    content: "",
    businessHours: [],
    password: "",
  } satisfies TStoreParams;
};

// input을 영업시간에 맞춰 filter 하는 함수 -> HH:mm, jest 필요
export const getFilterBusinessTime = (prevInput: string, currInput: string) => {
  const timeRegex = /^[0-9:]*$/;
  if (currInput === "") return "";

  if (!timeRegex.test(currInput)) return;

  const prevLen = prevInput?.length;
  const currLen = currInput?.length;

  if (currLen > 5) return;

  if (currInput.includes(":")) {
    const [h, m] = currInput.split(":");
    if (+h > 23) {
      return `23:${m}`;
    }
    if (+m > 59) {
      return `${h}:59`;
    }
  }
  if (prevLen === 0 && currLen === 1) {
    if (+currInput > 2) return `0${currInput}:`;
  }
  if (prevLen === 1 && currLen === 2) {
    if (prevInput) return `${currInput}:`;
  }
  if (prevLen === 2 && currLen === 3 && !currInput.includes(":")) {
    if (prevInput) return `${currInput.slice(0, 2)}:${currInput.slice(2)}`;
  }
  return currInput;
};

// 대분류 state 설정
export const ClassificationTagInitializer = (res?: TClassification): TClassificationParams => {
  if (res) {
    const { latitude, longitude, name } = res;
    return { latitude, longitude, name } satisfies TClassificationParams;
  }

  return {
    latitude: DEFAULT_COORDINATE.lat,
    longitude: DEFAULT_COORDINATE.lng,
    name: "",
  } satisfies TClassificationParams;
};
