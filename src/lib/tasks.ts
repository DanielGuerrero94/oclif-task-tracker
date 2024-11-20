import {existsSync, readFileSync, writeFileSync} from 'node:fs'
import {join} from 'node:path'

import {Task} from '../utils/types.js'

export const existsOrCreateFile = (dataDir: string) => {
  const filePath = join(dataDir, '/tasks.json')
  const exists = existsSync(filePath)
  if (!exists) {
    writeFileSync(filePath, JSON.stringify([]))
  }

  return filePath
}

export const readTasks = (dataDir: string): Task[] => {
  const filePath = existsOrCreateFile(dataDir)
  const content = readFileSync(filePath, 'utf8')
  const tasks: Task[] = JSON.parse(content)
  return tasks
}

export const writeTasks = (dataDir: string, tasks: Task[]) => {
  const filePath = existsOrCreateFile(dataDir)
  writeFileSync(filePath, JSON.stringify(tasks))
}