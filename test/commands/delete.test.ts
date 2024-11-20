import {runCommand} from '@oclif/test'
import {expect} from 'chai'

import { getTestTmpPath, removeTmpFile } from '../utils/fs-tests'

describe('delete', () => {
  const testDir = getTestTmpPath(import.meta.url)

  beforeEach(async () => {
    await removeTmpFile(testDir)
  })

  it('runs delete cmd', async () => {
    await runCommand(`add --data-dir ${testDir} test`)
    const {stdout} = await runCommand(`delete --data-dir ${testDir} 1`)
    expect(stdout).to.contain('Task delete successfully (ID: 1)')
  })
})
