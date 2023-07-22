interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Blog Owner'],
  customerRoles: [],
  tenantRoles: ['Content Creator', 'Guest Blogger', 'Blog Owner', 'Editor'],
  tenantName: 'Company',
  applicationName: 'Flatty',
  addOns: ['file', 'notifications', 'chat'],
};
