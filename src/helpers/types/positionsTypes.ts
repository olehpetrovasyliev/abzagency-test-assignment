export type Position = {
  id: number;
  name: string;
};

export type PositionsArray = Position[];

export type PositionsResponse = {
  success: boolean;
  positions: PositionsArray;
};
