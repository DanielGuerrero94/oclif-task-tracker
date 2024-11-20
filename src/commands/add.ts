/* eslint-disable perfectionist/sort-objects */

import {Args} from '@oclif/core'

import { TaskCommand } from '../lib/task-command.js'
import {readTasks, writeTasks} from '../lib/tasks.js'
import {Task} from '../utils/types.js'

export default class Add extends TaskCommand<typeof Add> {
  static override args = {
    description: Args.string({description: 'Description for the task', required: true}),
  }

  static override description = 'Adds a task'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const path = this.config.dataDir
    const {args} = await this.parse(Add)
    const tasks: Task[] = readTasks(path)
    const template: Task = {
      id: 1,
      description: '',
      status: 'todo',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    template.description = args.description || ''
    tasks.sort((oneTask, anotherTask) => (oneTask.id > anotherTask.id ? -1 : 1))
    const lastId = (tasks[0]?.id || 0) + 1
    template.id = lastId
    tasks.unshift(template)
    writeTasks(path, tasks)
    this.log(`Task added successfully (ID: ${template.id})`)
    this.log(`${template.description}`)
  }
}
