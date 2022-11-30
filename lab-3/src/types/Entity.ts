export interface IEntity {
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
  description: string;
  firstLinkTitle: string;
  secondLinkTitle?: string;
  firstLinks: {
    link: string;
    name: string;
  }[];
  secondLinks?: {
    link: string;
    name: string;
  }[];
}
