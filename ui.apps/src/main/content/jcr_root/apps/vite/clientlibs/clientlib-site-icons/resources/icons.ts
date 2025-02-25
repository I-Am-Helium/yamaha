export type IconsId =
  | "Award-1"
  | "Award";

export type IconsKey =
  | "Award_1"
  | "Award";

export enum Icons {
  Award_1 = "Award-1",
  Award = "Award",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Award_1]: "61697",
  [Icons.Award]: "61698",
};
