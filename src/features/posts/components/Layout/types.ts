import {Page} from '../../../../components/Page';

export type ContentLayoutProps = {
  title: string;
  actionElement: React.ReactElement;
  showBackButton: boolean;
  children: React.ReactNode;
  showUser: boolean;
} & React.ComponentPropsWithoutRef<typeof Page>;
