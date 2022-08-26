import {Page} from '../elements/Page';

export type ContentLayoutProps = {
  title: string;
  actionElement: React.ReactElement;
  showBackButton: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Page>;
