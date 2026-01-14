export {};

import type { AxiosInstance } from "axios";

declare global {
  interface Country {
    id: number;
    name: string;
    phone_code: string;
    phone_limit: number;
    flag: string;
  }

  
  interface OrderData {
    id: number;
    order_num: string;
    status: string;
    status_trans: string;
    order_type: string;
    is_schedule: boolean;
    address: any;
    is_payment: boolean;
    pay_type: Array<{ wallet?: number; type?: string }>;
    order_time: string;
    order_date: string;
    can_cancel: boolean;
    store: any;
    driver: any;
    item: Array<any>;
    item_count: number;
    cancel_reason: any;
    desc_cancel_reason: any;
    price_detail: {
      total_price: number;
      discount_value: number;
      total_item_price_before_discount: number;
      delivery_price: number;
      surcharge_value: number;
      tax_rate_percentage: number;
      tax_rate_value: number;
      price_paied_from_wallet: number;
      points: number;
      currency: string;
    };
    call_center: string;
    call_center_message: string;
    order_status: OrderStatus[];
  }
  interface User {
    id: number;
    full_name: string;
    avatar: string;
    email: string;
    phone_code: string;
    phone: string;
    user_type: "customer" | "admin" | string;
    notifiable: boolean;
    token: string;
    points: number;
    wallet: number;
    country: Country;
    default_address: unknown | null;
    tenant: string;
  }

  interface AuthStore {
    token: string | null;
    userData: User | null;
  }


}

declare module "#app" {
  interface NuxtApp {
    $api: AxiosInstance;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $api: AxiosInstance;
  }
}
