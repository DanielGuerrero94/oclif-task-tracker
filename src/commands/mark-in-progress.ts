import {Args} from '@oclif/core'

import { TaskCommand } from '../lib/task-command.js'
import {readTasks, writeTasks} from '../lib/tasks.js'
import {Task} from '../utils/types.js'

export default class MarkInProgress extends TaskCommand<typeof MarkInProgress> {
  static override args = {
    id: Args.integer({description: 'ID of the task', required: true}),
  }

  static override description = 'Marks a task as in progress'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const path = this.config.dataDir
    const {args} = await this.parse(MarkInProgress)

    const {id} = args

    const tasks: Task[] = readTasks(path)
    const taskIndex = tasks.findIndex((task) => task.id === id)
    const taskIndexFound = taskIndex !== -1
    if (!taskIndexFound) this.error(`No task with ID ${id}`)

    tasks[taskIndex].status = 'in-progress'
    tasks[taskIndex].updatedAt = new Date()

    writeTasks(path, tasks)
    this.log(`Task marked as in progress successfully (ID: ${id})`)
  }
}
