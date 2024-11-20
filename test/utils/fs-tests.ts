import { existsSync, mkdirSync } from "node:fs"
import { rm } from "node:fs/promises"
import { tmpdir } from "node:os"

export const getTestTmpPath = (testUrl: string) => {
    const testUrlSplit = testUrl.split("/")
    const testName = testUrlSplit.pop()
    const tmpPath = tmpdir() + "/" + testName
    const dirExists = existsSync(tmpPath)
    if (!dirExists)  mkdirSync(tmpPath)
    return tmpPath
}

export const removeTmpFile = async (tmpPath: string) => {
    const taskFile = tmpPath + '/tasks.json'
    const exists = existsSync(taskFile)
    if (exists) await rm(taskFile)
}