import {runCommand} from '@oclif/test'
import {expect} from 'chai'

import { getTestTmpPath, removeTmpFile } from '../utils/fs-tests'

describe('update', () => {
  const testDir = getTestTmpPath(import.meta.url)

  beforeEach(async () => {
    await removeTmpFile(testDir)
  })

  it('runs update cmd', async () => {
    await runCommand(`add --data-dir ${testDir} test`)
    const {stdout} = await runCommand(`update --data-dir ${testDir} 1 updated-description`)
    expect(stdout).to.contain('updated successfully')
  })
})
