import { Result, ok, err } from 'neverthrow'
import type { IProject, IProjectData } from '../domain'
import { Project } from '../domain'
import type { IProjectParser, HttpProject } from './ProjectService.types'
import { ParseError } from '~/app/shared/error/ParseError'

export class ProjectParser implements IProjectParser {
  toDomain (data: HttpProject): Result<IProject, ParseError> {
    try {
      const projectData: IProjectData = {
        id: data.id,
        description: data.title,
        userId: data.userId + '100'
      }
      const project = new Project(projectData)
      return ok(project)
      // return project;
    } catch (error: any) {
      return err(new ParseError(error.message))
    }
  }

  fromDomain (data: IProjectData): Result<HttpProject, ParseError> {
    try {
      const httpData = {
        id: data.id
      }
      return ok(httpData)
    } catch (error: any) {
      return err(new ParseError(error.message))
    }
  }
}
