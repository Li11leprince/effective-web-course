export interface ICard {
  id: number;
  thumbnail: { path: string; extension: string };
  name?: string;
  title?: string;
  description: string | null;
  cathegory?: string;
}
