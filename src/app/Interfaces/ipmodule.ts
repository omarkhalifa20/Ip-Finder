export interface IpInterface {
    ip: string;
    type: string;
    continent_code: string;
    continent_name: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    zip: string;
    latitude: number;
    longitude: number;
    location?: {
      calling_code?: string;
      capital?: string;
      country_flag?: string;
      country_flag_emoji?: string;
      country_flag_emoji_unicode?: string;
      geoname_id?: number;
      is_eu?: boolean;
      languages?: {
        code: string;
        name: string;
        native: string;
      }[];
    };
    connection_type?: string;
    ip_routing_type?: string;
    dma?: string;
    msa?: string;
    radius?: string;
  }