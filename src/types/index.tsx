export type Post = {
  article_id: string;
  title: string;
  link: string;
  keywords: string[];
  creator: null | string;
  video_url: null | string;
  description: string;
  content: null | string;
  pubDate: string;
  image_url: string;
  source_id: string;
  source_priority: number;
  country: string[];
  category: string[];
  language: string;
};

export type WarStatistic = {
  date: string;
  day: number;
  resource: string;
  stats: {
    personnel_units: number;
    tanks: number;
    armoured_fighting_vehicles: number;
    artillery_systems: number;
    mlrs: number;
    aa_warfare_systems: number;
    planes: number;
    helicopters: number;
    vehicles_fuel_tanks: number;
    warships_cutters: number;
    cruise_missiles: number;
    uav_systems: number;
    special_military_equip: number;
    atgm_srbm_systems: number;
    submarines: number;
  };
  increase: {
    personnel_units: number;
    tanks: number;
    armoured_fighting_vehicles: number;
    artillery_systems: number;
    mlrs: number;
    aa_warfare_systems: number;
    planes: number;
    helicopters: number;
    vehicles_fuel_tanks: number;
    warships_cutters: number;
    cruise_missiles: number;
    uav_systems: number;
    special_military_equip: number;
    atgm_srbm_systems: number;
    submarines: number;
  };


}

