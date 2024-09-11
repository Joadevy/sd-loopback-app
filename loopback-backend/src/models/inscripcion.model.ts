import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Inscripcion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'date',
    default: Date.now(),
  })
  FechaEjecucion?: string;

  @property({
    type: 'date',
  })
  FechaCancelacion?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inscripcion>) {
    super(data);
  }
}

export interface InscripcionRelations {
  // describe navigational properties here
}

export type InscripcionWithRelations = Inscripcion & InscripcionRelations;
