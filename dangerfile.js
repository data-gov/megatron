import { danger, markdown } from 'danger'
import _ from 'lodash'
import fs from 'fs'

let errorsAndWarnings = 0

checkLinterErrors()
checkSkippedTests()
isABigPR()
congrats()

function checkSkippedTests() {
  const modifiedSpecFiles =  danger.git.modified_files.filter(filePath => filePath.match(/.test.(js|jsx)$/gi))

  const testFilesIncludeExclusion = modifiedSpecFiles.reduce((acc, value) => {
    const content = fs.readFileSync(value).toString()
    const invalid = _.includes(content, 'it.only') || _.includes(content, 'describe.only') || _.includes(content, 'fdescribe') || _.includes(content, 'fit(')
    if (invalid) { acc.push(value) }
    return acc
  }, [])

  if (testFilesIncludeExclusion.length > 0) {
    errorsAndWarnings++
    fail(`skipped test was left in tests (${testFilesIncludeExclusion})`)
  }
}

function checkLinterErrors() {
  const linterOutput = fs.readFileSync('prepush.log').toString()
  const thereWarningOrErrors = _.includes(linterOutput, 'error') || _.includes(linterOutput, 'warning')

  if (thereWarningOrErrors) {
    errorsAndWarnings++
    markdown('O linter está reclamando sobre: ')

    _.each(linterOutput.split('\n'), (line) => {
      if (!_.startsWith(line, '>')) {
        markdown(line)
      }
    })
  }
}

function isABigPR() {
  const bigPRThreshold = 1000
  if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
    errorsAndWarnings++
    warn(':exclamation: Pull request grande, encorajamos PR menores')
  }
}

function congrats() {
  if (!errorsAndWarnings) {
    message(`Nenhum error ou warning @${danger.github.pr.user.login} :tada:`)
  }
}
