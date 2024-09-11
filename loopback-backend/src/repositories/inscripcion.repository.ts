import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Inscripcion, InscripcionRelations} from '../models';

export class InscripcionRepository extends DefaultCrudRepository<
  Inscripcion,
  typeof Inscripcion.prototype.ID,
  InscripcionRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDb') dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Inscripcion, dataSource);
  }
}
