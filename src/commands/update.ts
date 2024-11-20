/* eslint-disable perfectionist/sort-objects */
import {Args} from '@oclif/core'

import { TaskCommand } from '../lib/task-command.js'
import {readTasks, writeTasks} from '../lib/tasks.js'
import {Task} from '../utils/types.js'

export default class Update extends TaskCommand<typeof Update> {
  static override args = {
    id: Args.integer({description: 'ID of the task', required: true}),
    description: Args.string({description: 'Description for the task', required: true}),
  }

  static override description = 'Updates a task'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const path = this.config.dataDir
    const {args} = await this.parse(Update)

    const {id, description} = args

    const tasks: Task[] = readTasks(path)

    const taskIndex = tasks.findIndex((task) => task.id === id)
    const taskIndexFound = taskIndex !== -1
    if (!taskIndexFound) this.error(`No task with ID ${id}`)

    tasks[taskIndex].description = description
    tasks[taskIndex].updatedAt = new Date()

    writeTasks(path, tasks)
    this.log(`Task updated successfully (ID: ${id})`)
  }
}
