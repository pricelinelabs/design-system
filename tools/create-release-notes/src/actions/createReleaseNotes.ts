import {RushConfiguration, RushConfigurationProject,} from '@microsoft/rush-lib'
import fs from 'fs'
import {join} from 'path'
import {Change, Release} from '../types/Release'

const config = RushConfiguration.loadFromDefaultLocation()

// const COMMIT_URL_STEM = 'https://github.com/priceline/design-system/commit/'

const _getChangelog = (project: RushConfigurationProject) => {
  const file = fs.readFileSync(join(project.projectFolder, 'CHANGELOG.json'))
  return JSON.parse(file.toString())
}

// const _getCommitUrl = (commitHash: string): string => {
//   return `${COMMIT_URL_STEM}${commitHash}`
// }

const _parseAuthor = (author: string): { name; email? } => {
  const re = /([\w\s]+)(<?(.*)>)?$/
  const matches = re.exec(author)
  return {
    name: matches[1],
    email: matches[2],
  }
}

// const _parseComment = (comment: string) => {
//   const re = /^.*(\w{3,4}-\d+).*$/
//   const matches = re.exec(comment)
//   return {
//     jiraId: matches ? matches[1] : '',
//   }
// }

const _formatChangeRow = (change: Change): string => {
  const author = _parseAuthor(change.author)
  const authorName = author.name !== 'undefined' ? author.name : 'Rush'
  let commitLink = ''

  if (change.commit) {
    // TODO figure out how to go to commit page without branch name
    commitLink = change.commit.slice(0, 8)
  } else {
    commitLink = `n/a`
  }

  return `|${change.type}|${change.comment}|${authorName.trim()}|${commitLink}|`
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const _transformRushComments = (comments): Change[] => {
  return ['major', 'minor', 'patch', 'dependency'].reduce((acc, cur) => {
    if (!comments[cur]) return acc

    const newComments = comments[cur].map((comment) => ({
      ...comment,
      type: cur,
    }))

    return [...acc, ...newComments]
  }, [])
}

export const formatNotesMarkdown = (notes: Release): string => {
  return `# \`${notes.packageName}\` v${notes.version}

> Created ${notes.date}

|Type | Change | Author | Commit |
|-----|--------|--------|--------|
${notes.changes.map(_formatChangeRow).join('\n')}
`
}

export const createReleaseNotes = (packageName: string): Release => {
  const project = config.getProjectByName(packageName)

  if (!project) {
    throw new Error('Project not found')
  }

  const changeLog = _getChangelog(project)

  if (!project) {
    throw new Error('Changelog not found')
  }

  const latestChange = changeLog.entries[0]

  return {
    packageName: packageName,
    changes: _transformRushComments(latestChange.comments),
    date: latestChange.date,
    tag: latestChange.tag,
    version: latestChange.version,
  }
}
