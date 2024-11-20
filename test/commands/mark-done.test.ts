import {runCommand} from '@oclif/test'
import {expect} from 'chai'

import { getTestTmpPath, removeTmpFile } from '../utils/fs-tests'

describe('mark-done', () => {
  const testDir = getTestTmpPath(import.meta.url)

  beforeEach(async () => {
    await removeTmpFile(testDir)
  })

  it('runs mark-done cmd', async () => {
    await runCommand(`add --data-dir ${testDir} test`)
    const {stdout} = await runCommand(`mark-done --data-dir ${testDir} 1`)
    expect(stdout).to.contain('done')
  })
})
