export enum FrequencyEnum {
  Yearly = "yearly",
  Quarterly = "quarterly",
}

export enum TiersEnum {
  Free = "free",
  Pro = "pro",
  Team = "team",
  Customize = "customize"
}

export type Frequency = {
  key: FrequencyEnum;
  label: string;
  priceSuffix: string;
};

export type Tier = {
  key: TiersEnum;
  title: string;
  price: string;
  priceSuffix?: string;
  href: string;
  description?: string;
  mostPopular?: boolean;
  featured?: boolean;
  features?: string[];
  buttonText: string;
  buttonColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  buttonVariant?: "default" | "solid" | "bordered" | "light" | "flat" | "ghost" | "outline" | "destructive" | "link";
};
