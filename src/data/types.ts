export type DotType = 'snack' | 'sight' | 'lunch' | 'dinner' | 'walk' | 'special' | 'nap' | 'gelato';
export type BadgeType = 'safari' | 'day-trip' | 'city' | 'arrival' | 'checkout';
export type CardStyle =
  | 'snack' | 'eat' | 'sight' | 'shop' | 'gelato'
  | 'explore-kids' | 'explore-outdoor' | 'explore-museum'
  | 'explore-cultural' | 'explore-closed';
export type Category = 'cafe' | 'restaurant' | 'gelato' | 'sightseeing' | 'activity' | 'food' | 'photo' | 'streetfood';
export type OptionTagType = 'kids' | 'indoor' | 'outdoor' | 'free' | 'seasonal' | 'inplan';

export interface TimelineItem {
  dot: DotType;
  emoji: string;
  label: string;
  title: string;
  desc: string;
  tip?: string;
}

export interface DayBadge {
  label: string;
  type: BadgeType;
}

export interface DayNavInfo {
  todayPlace: string;
  tomorrowLabel: string;
  tomorrowPlace: string;
}

export interface DayWeather {
  icon: string;
  temp: string;
  desc: string;
  alert?: string;
}

export interface Day {
  num: number;
  date: string;
  subtitle: string;
  badges: DayBadge[];
  weather: DayWeather;
  nav: DayNavInfo;
  timeline: TimelineItem[];
}

export interface OptionTag {
  type: OptionTagType;
  label: string;
}

export interface RegularPlace {
  kind: 'place';
  cat: Category;
  style: CardStyle;
  type: string;
  name: string;
  stars?: string;
  note: string;
  hours?: string;
  warn?: string;
  tags?: OptionTag[];
}

export interface FoodPlace {
  kind: 'food';
  cat: 'food';
  emoji: string;
  name: string;
  desc: string;
  where: string;
}

export interface PhotoPlace {
  kind: 'photo';
  cat: 'photo';
  day: string;
  spot: string;
  tip: string;
}

export type Place = RegularPlace | FoodPlace | PhotoPlace;

export interface Town {
  emoji: string;
  name: string;
  dist: string;
  badge: string;
  places: Place[];
}

export interface CheckItem {
  text: string;
  sub?: string;
}

export interface ChecklistGroup {
  title: string;
  items: CheckItem[];
}

export interface InfoCard {
  icon: string;
  title: string;
  html: string;
}

export interface TipBox {
  icon: string;
  heading: string;
  text: string;
}

export interface BudgetCard {
  label: string;
  amount: string;
  note: string;
}

export interface HubRoute {
  time: string;
  emoji: string;
  dest: string;
  sub: string;
}

export interface PhraseCard {
  it: string;
  en: string;
  ctx: string;
}

export interface RainCard {
  title: string;
  desc: string;
  note: string;
}

export interface EmergencyCard {
  num: string;
  label: string;
  sub: string;
  blue?: boolean;
}
