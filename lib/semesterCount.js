const { student } = require('../data')
const qualityPoints = require('./qpHelper')
const sortBySemesters = async (semList) => {
  let sems = {}

  sems.student = {
    ag: semList[0][1],
    name: semList[1][1],
    semNames: [],
    cgpa: 0,
  }

  for (let i = 3; i < semList.length; i++) {
    const current = semList[i]
    let index = 0
    const name = current[1].toString()
    const qp = await qualityPoints(current)
    current.qp = qp
    if (sems[`${name}`] === undefined) {
      sems[`${name}`] = [current]
      sems.student.semNames.push(current[1])
    } else {
      sems[`${name}`].push(current)
    }
  }

  const cgp = await cgpaCalculator(sems)
  sems.student.cgpa = cgp.toFixed(2)

  for (let i = 0; i < sems.student.semNames.length; i++) {
    const name = sems.student.semNames[i]
    const gpa = await gpaCalculator(sems[name])
    sems[name].push({ gpa })
  }

  return sems
}

const creditsCalculator = (subject) => {
  const credits = subject[5]
  const cleaned = credits
    .replace('-', '')
    .replace('0', '')
    .replace('(', '')
    .replace(')', '')

  return parseInt(cleaned[0])
}

const gpaCalculator = async (sem) => {
  let allCredits = 0
  let qPoints = 0
  sem.forEach((subject) => {
    allCredits += creditsCalculator(subject)
    qPoints += subject.qp
  })

  return qPoints / allCredits
}

const cgpaCalculator = async (data) => {
  let allCredits = 0
  let qPoints = 0

  for (let i = 0; i < data.student.semNames.length; i++) {
    const sem = data.student.semNames[i]
    data[sem].forEach((subject) => {
      allCredits += creditsCalculator(subject)
      qPoints += subject.qp
    })
  }

  return qPoints / allCredits
}

module.exports = {
  sortBySemesters,
  creditsCalculator,
  gpaCalculator,
  cgpaCalculator,
}
