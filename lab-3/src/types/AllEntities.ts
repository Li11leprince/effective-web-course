export interface IAll {
  id: number;
  name?: string;
  title?: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics?: {
    available: number;
    returned: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  series?: {
    available?: number;
    returned?: number;
    collectionURI?: string;
    resourceURI?: string;
    name?: string;
    items?: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  characters?: {
    available: number;
    collectionURI: string;
    items: [
      {
        resourceURI: string;
        name: string;
        role: string;
      }
    ];
    returned: number;
  };
}
