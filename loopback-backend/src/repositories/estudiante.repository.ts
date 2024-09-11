import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Estudiante, EstudianteRelations} from '../models';

export class EstudianteRepository extends DefaultCrudRepository<
  Estudiante,
  typeof Estudiante.prototype.ID,
  EstudianteRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDb')
    dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Estudiante, dataSource);
  }
}
