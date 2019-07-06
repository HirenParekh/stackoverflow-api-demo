export interface AppCloudResponse<T> {
  items: T;
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
