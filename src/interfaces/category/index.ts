import { PostInterface } from 'interfaces/post';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CategoryInterface {
  id?: string;
  name: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  post?: PostInterface[];
  company?: CompanyInterface;
  _count?: {
    post?: number;
  };
}

export interface CategoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
}
