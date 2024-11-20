import {runCommand} from '@oclif/test'
import {expect} from 'chai'

import { getTestTmpPath, removeTmpFile } from '../utils/fs-tests'

describe('add', () => {
  const testDir = getTestTmpPath(import.meta.url)

  beforeEach(async () => {
    await removeTmpFile(testDir)
  })

  it('runs add cmd', async () => {
    const result = await runCommand(`add --data-dir ${testDir} asd`)
    const {stdout} = result
    expect(stdout).to.contain(`Task added successfully (ID: 1)`)
    console.log("This test passes")
  })

  it('runs add and fails because is missing an argument', async () => {
    const command = `add --data-dir ${testDir}`
    const {error} = await runCommand(command);
    expect(error?.oclif?.exit).to.equal(2)
  })
})
