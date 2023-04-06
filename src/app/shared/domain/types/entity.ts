export interface Entity {
  id: string;
  createdAt: Date;
}

export abstract class EntityV2 {
  id!: string;

  createdAt!: Date;

  constructor(props: Pick<EntityV2, 'id' | 'createdAt'>) {
    Object.assign(this, props);
  }
}
