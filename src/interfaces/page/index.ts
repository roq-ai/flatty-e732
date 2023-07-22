import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface PageInterface {
  id?: string;
  title: string;
  content: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface PageGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  company_id?: string;
}
