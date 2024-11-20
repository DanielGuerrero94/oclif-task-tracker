import {runCommand} from '@oclif/test'
import {expect} from 'chai'

import { getTestTmpPath, removeTmpFile } from '../utils/fs-tests'

describe('list', () => {
  const testDir = getTestTmpPath(import.meta.url)

  beforeEach(async () => {
    await removeTmpFile(testDir)
  })

  it('runs list with filters', async () => {
    await runCommand(`add --data-dir ${testDir} test`)
    await runCommand(`mark-done --data-dir ${testDir} 1`)
    const {stdout} = await runCommand(`list --data-dir ${testDir} done`)
    expect(stdout).to.contain('done')
  })

  it('runs list cmd', async () => {
    await runCommand(`add --data-dir ${testDir} test`)
    const {stdout} = await runCommand(`list --data-dir ${testDir}`)
    expect(stdout).to.contain('todo')
  })

})


