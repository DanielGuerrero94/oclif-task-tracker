import {Args} from '@oclif/core'

import { TaskCommand } from '../lib/task-command.js'
import {readTasks, writeTasks} from '../lib/tasks.js'
import {Task} from '../utils/types.js'

export default class Delete extends TaskCommand<typeof Delete>  {
  static override args = {
    id: Args.integer({description: 'ID of the task', required: true}),
  }

  static override description = 'Deletes a task'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  public async run(): Promise<void> {
    const path = this.config.dataDir
    const {args} = await this.parse(Delete)
    const {id} = args

    const tasks: Task[] = readTasks(path)

    const tasksAfterRemoving = tasks.filter((task) => task.id !== id)
    const found = tasksAfterRemoving.length !== tasks.length
    if (!found) this.error(`No task with ID ${id}`)

    writeTasks(path, tasksAfterRemoving)
    this.log(`Task delete successfully (ID: ${id})`)
  }
}
