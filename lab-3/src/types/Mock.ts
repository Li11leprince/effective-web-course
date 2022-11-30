export interface IMock {
  id: number;
  thumbnail: { path: string; extension: string };
  name: string;
  description: string | null;
}
