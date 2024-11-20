import {Args} from '@oclif/core'

import { TaskCommand } from '../lib/task-command.js'
import { readTasks } from '../lib/tasks.js'
import { Task } from '../utils/types.js'

export default class List extends TaskCommand<typeof List> {
  static override args = {
    status: Args.string({description: 'ID of the task', options: ['done', 'in-progress', 'todo']}),
  }

  static override description = 'Lists all tasks'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> done',
    '<%= config.bin %> <%= command.id %> in-progress',
    '<%= config.bin %> <%= command.id %> todo',
  ]

  public async run(): Promise<void> {
    const path = this.config.dataDir
    const {args} = await this.parse(List)
    const {status} = args;

    let tasks: Task[] = readTasks(path)

    if (!status) {
      this.logJson(tasks)
      return
    }

    tasks = tasks.filter(task => task.status === status)     
    this.logJson(tasks)
  }
}
