export interface Apod {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
export const defaultApodValue: Apod = {
  copyright: "",
  date: "",
  explanation: "",
  hdurl: "",
  media_type: "",
  service_version: "",
  title: "",
  url: "",
};

export type ApodContextType = {
  getApod: () => void;
  apod: Apod;
};

export const ApodContextDefaultValue = {
  getApod: () => {},
  apod: defaultApodValue,
};
