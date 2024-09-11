import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceMongoDbDataSource} from '../datasources';
import {Curso, CursoRelations} from '../models';

export class CursoRepository extends DefaultCrudRepository<
  Curso,
  typeof Curso.prototype.ID,
  CursoRelations
> {
  constructor(
    @inject('datasources.DatasourceMongoDb') dataSource: DatasourceMongoDbDataSource,
  ) {
    super(Curso, dataSource);
  }
}
