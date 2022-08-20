const OneCreditHandler = (marks) => {
  const table = {
    8: 1,
    9: 1.5,
    10: 2,
    11: 2.33,
    12: 2.67,
    13: 3,
    14: 3.33,
    15: 3.67,
  }

  if (marks >= 16) {
    return 2 * 2
  }

  if (marks < 8) {
    return 0
  }

  return table[marks]
}

const TwoCreditHandler = (marks) => {
  const table = {
    16: 2,
    17: 2.5,
    18: 3,
    19: 3.5,
    20: 4,
    21: 4.33,
    22: 4.67,
    23: 5,
    24: 5.33,
    25: 5.67,
    26: 6,
    27: 6.33,
    28: 6.67,
    29: 7,
    30: 7.33,
    31: 7.67,
  }

  if (marks >= 32) {
    return 8
  }

  if (marks < 16) {
    return 0
  }

  return table[marks]
}

const ThreeCreditHandler = (marks) => {
  const table = {
    24: 3,
    25: 3.5,
    26: 4,
    27: 4.5,
    28: 5,
    29: 5.5,
    30: 6,
    31: 6.33,
    32: 6.67,
    33: 7,
    34: 7.33,
    35: 7.67,
    36: 8,
    37: 8.33,
    38: 8.67,
    39: 9,
    40: 9.33,
    41: 9.67,
    42: 10,
    43: 10.33,
    44: 10.67,
    45: 11,
    46: 11.33,
    47: 11.67,
  }

  if (marks >= 48) {
    return 12
  }

  if (marks < 24) {
    return 0
  }

  return table[marks]
}

const FourCreditHandler = (marks) => {
  const table = {
    32: 4,
    33: 4.5,
    34: 5,
    35: 5.5,
    36: 6,
    37: 6.5,
    38: 7,
    39: 7.5,
    40: 8,
    41: 8.33,
    42: 8.67,
    43: 9,
    44: 9.33,
    45: 9.67,
    46: 10,
    47: 10.33,
    48: 10.67,
    49: 11,
    50: 11.33,
    51: 11.67,
    52: 12,
    53: 12.33,
    54: 12.67,
    55: 13,
    56: 13.33,
    57: 13.67,
    58: 14,
    59: 14.33,
    60: 14.67,
    61: 15,
    62: 15.33,
    63: 15.67,
  }

  if (marks >= 64) {
    return 16
  }

  if (marks < 32) {
    return 0
  }

  return table[marks]
}

const qualityPoints = async (subject) => {
  const credits = subject[5]
  const cleaned = credits
    .replace('-', '')
    .replace('0', '')
    .replace('(', '')
    .replace(')', '')

  switch (parseInt(cleaned[0])) {
    case 1:
      return OneCreditHandler(subject[10])
      break
    case 2:
      return TwoCreditHandler(subject[10])
      break
    case 3:
      return ThreeCreditHandler(subject[10])
      break
    case 4:
      return FourCreditHandler(subject[10])
      break
  }
}

module.exports = qualityPoints
