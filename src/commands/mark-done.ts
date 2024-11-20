import {Args} from '@oclif/core'

import { TaskCommand } from '../lib/task-command.js'
import {readTasks, writeTasks} from '../lib/tasks.js'
import {Task} from '../utils/types.js'

export default class MarkDone extends TaskCommand<typeof MarkDone> {
  static override args = {
    id: Args.integer({description: 'ID of the task', required: true}),
  }

  static override description = 'Marks a task as done'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const path = this.config.dataDir
    const {args} = await this.parse(MarkDone)

    const {id} = args

    const tasks: Task[] = readTasks(path)

    const taskIndex = tasks.findIndex((task) => task.id === id)
    const taskIndexFound = taskIndex !== -1
    if (!taskIndexFound) this.error(`No task with ID ${id}`)

    tasks[taskIndex].status = 'done'
    tasks[taskIndex].updatedAt = new Date()

    writeTasks(path, tasks)
    this.log(`Task marked as done successfully (ID: ${id})`)
  }
}
