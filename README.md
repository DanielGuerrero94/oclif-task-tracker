Task Tracker
=================

Build a CLI app to track your tasks and manage your to-do list.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

Project listed on [Roadmap.sh](https://roadmap.sh/projects/task-tracker)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-task-tracker
$ oclif-task-tracker COMMAND
running command...
$ oclif-task-tracker (--version)
oclif-task-tracker/0.0.0 linux-x64 node-v22.11.0
$ oclif-task-tracker --help [COMMAND]
USAGE
  $ oclif-task-tracker COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-task-tracker add DESCRIPTION`](#oclif-task-tracker-add-description)
* [`oclif-task-tracker delete ID`](#oclif-task-tracker-delete-id)
* [`oclif-task-tracker help [COMMAND]`](#oclif-task-tracker-help-command)
* [`oclif-task-tracker list [STATUS]`](#oclif-task-tracker-list-status)
* [`oclif-task-tracker mark-done ID`](#oclif-task-tracker-mark-done-id)
* [`oclif-task-tracker mark-in-progress ID`](#oclif-task-tracker-mark-in-progress-id)
* [`oclif-task-tracker update ID DESCRIPTION`](#oclif-task-tracker-update-id-description)

## `oclif-task-tracker add DESCRIPTION`

Adds a task

```
USAGE
  $ oclif-task-tracker add DESCRIPTION [--data-dir <value>]

ARGUMENTS
  DESCRIPTION  Description for the task

GLOBAL FLAGS
  --data-dir=<value>  Specify custom data-dir for tasks.json

DESCRIPTION
  Adds a task

EXAMPLES
  $ oclif-task-tracker add
```

_See code: [src/commands/add.ts](https://github.com/projects/oclif-task-tracker/blob/v0.0.0/src/commands/add.ts)_

## `oclif-task-tracker delete ID`

Deletes a task

```
USAGE
  $ oclif-task-tracker delete ID [--data-dir <value>]

ARGUMENTS
  ID  ID of the task

GLOBAL FLAGS
  --data-dir=<value>  Specify custom data-dir for tasks.json

DESCRIPTION
  Deletes a task

EXAMPLES
  $ oclif-task-tracker delete
```

_See code: [src/commands/delete.ts](https://github.com/projects/oclif-task-tracker/blob/v0.0.0/src/commands/delete.ts)_

## `oclif-task-tracker help [COMMAND]`

Display help for oclif-task-tracker.

```
USAGE
  $ oclif-task-tracker help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oclif-task-tracker.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.18/src/commands/help.ts)_

## `oclif-task-tracker list [STATUS]`

Lists all tasks

```
USAGE
  $ oclif-task-tracker list [STATUS] [--data-dir <value>]

ARGUMENTS
  STATUS  (done|in-progress|todo) ID of the task

GLOBAL FLAGS
  --data-dir=<value>  Specify custom data-dir for tasks.json

DESCRIPTION
  Lists all tasks

EXAMPLES
  $ oclif-task-tracker list

  $ oclif-task-tracker list done

  $ oclif-task-tracker list in-progress

  $ oclif-task-tracker list todo
```

_See code: [src/commands/list.ts](https://github.com/projects/oclif-task-tracker/blob/v0.0.0/src/commands/list.ts)_

## `oclif-task-tracker mark-done ID`

Marks a task as done

```
USAGE
  $ oclif-task-tracker mark-done ID [--data-dir <value>]

ARGUMENTS
  ID  ID of the task

GLOBAL FLAGS
  --data-dir=<value>  Specify custom data-dir for tasks.json

DESCRIPTION
  Marks a task as done

EXAMPLES
  $ oclif-task-tracker mark-done
```

_See code: [src/commands/mark-done.ts](https://github.com/projects/oclif-task-tracker/blob/v0.0.0/src/commands/mark-done.ts)_

## `oclif-task-tracker mark-in-progress ID`

Marks a task as in progress

```
USAGE
  $ oclif-task-tracker mark-in-progress ID [--data-dir <value>]

ARGUMENTS
  ID  ID of the task

GLOBAL FLAGS
  --data-dir=<value>  Specify custom data-dir for tasks.json

DESCRIPTION
  Marks a task as in progress

EXAMPLES
  $ oclif-task-tracker mark-in-progress
```

_See code: [src/commands/mark-in-progress.ts](https://github.com/projects/oclif-task-tracker/blob/v0.0.0/src/commands/mark-in-progress.ts)_

## `oclif-task-tracker update ID DESCRIPTION`

Updates a task

```
USAGE
  $ oclif-task-tracker update ID DESCRIPTION [--data-dir <value>]

ARGUMENTS
  ID           ID of the task
  DESCRIPTION  Description for the task

GLOBAL FLAGS
  --data-dir=<value>  Specify custom data-dir for tasks.json

DESCRIPTION
  Updates a task

EXAMPLES
  $ oclif-task-tracker update
```

_See code: [src/commands/update.ts](https://github.com/projects/oclif-task-tracker/blob/v0.0.0/src/commands/update.ts)_
<!-- commandsstop -->
