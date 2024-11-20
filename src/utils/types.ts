/* eslint-disable perfectionist/sort-object-types */

export type TaskStatus = 'done' | 'in-progress' | 'todo'

export type Task = {
  id: number
  description: string
  status: TaskStatus
  createdAt: Date
  updatedAt: Date
}
