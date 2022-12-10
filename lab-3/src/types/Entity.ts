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
    resourceURI: string;
    name: string;
  }[];
  secondLinks?: {
    resourceURI: string;
    name: string;
  }[];
}
