import {Command, Flags, Interfaces} from '@oclif/core'

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<T['flags'] & typeof TaskCommand['baseFlags']>
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export abstract class TaskCommand<T extends typeof Command> extends Command {
  static baseFlags = {
    'data-dir': Flags.string({
      helpGroup: 'GLOBAL',
      summary: 'Specify custom data-dir for tasks.json',
    }),
  }

  protected args!: Args<T>
  protected flags!: Flags<T>

  public async init(): Promise<void> {
    await super.init()
    const {args, flags} = await this.parse({
      args: this.ctor.args,
      baseFlags: (super.ctor as typeof TaskCommand).baseFlags,
      flags: this.ctor.flags,
      strict: this.ctor.strict,
    })
    this.flags = flags as Flags<T>
    this.args = args as Args<T>

    if (flags['data-dir']) {
      this.config.dataDir = flags['data-dir']
    }
  }
}