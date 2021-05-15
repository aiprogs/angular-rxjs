export interface NavigationLinkProps {
  queryParams?: {
    [k: string]: any;
  };
  fragment?: string;
  queryParamsHandling?: 'merge' | 'preserve' | '';
  preserveFragment?: boolean;
  skipLocationChange?: boolean;
  replaceUrl?: boolean;
  state?: {
    [k: string]: any;
  };
  routerLinkActiveOptions?: {
    exact: boolean;
  };
  routerLinkActive?: string | string[];
}
