import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Estudiante extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  ID?: string;

  @property({
    type: 'string',
  })
  NombreCompleto?: string;

  @property({
    type: 'string',
  })
  Email?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Estudiante>) {
    super(data);
  }
}

export interface EstudianteRelations {
  // describe navigational properties here
}

export type EstudianteWithRelations = Estudiante & EstudianteRelations;
