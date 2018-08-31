const logs = [
  {
    _id: 1,
    timestamp: "17-AUG-18",
    sma: 9,
    ssma: 11,
    sma2: 9.11,
    proc: "Populate_Rail_Type",
    subproc: "Rail Type",
    logentries: [
      {
        equipno: "000478397360",
        lcscode: "M092/MSBLO",
        description: "End measure (1180) beyond end of LCS (1174.929)"
      },
      {
        equipno: "000478397340",
        lcscode: "M092/MSBLO",
        description: "End measure (1180) beyond end of LCS (1174.929)"
      }
    ]
  },
  {
    _id: 2,
    timestamp: "17-AUG-18",
    sma: 9,
    ssma: 14,
    sma2: 9.14,
    proc: "Populate_Rail_Type",
    subproc: "Rail Type",
    logentries: [
      {
        equipno: "000478206580",
        lcscode: "M074/MNBMA",
        description: "End measure (1882) beyond end of LCS (1870.391)"
      },
      {
        equipno: "000478206600",
        lcscode: "M074/MNBMA",
        description: "End measure (1882) beyond end of LCS (1870.391)"
      },
      {
        equipno: "000478073940",
        lcscode: "M068/MNBMA",
        description: "End measure (1974) beyond end of LCS (1967.829)"
      },
      {
        equipno: "000478073920",
        lcscode: "M068/MNBMA",
        description: "End measure (1974) beyond end of LCS (1967.829)"
      },
      {
        equipno: "000477937860",
        lcscode: "M064/MNBMA",
        description: "End measure (2081) beyond end of LCS (2078.338)"
      },
      {
        equipno: "000477937840",
        lcscode: "M064/MNBMA",
        description: "End measure (2081) beyond end of LCS (2078.338)"
      },
      {
        equipno: "000477919960",
        lcscode: "M063/MNBMA",
        description: "End measure (168) beyond end of LCS (134.015)"
      },
      {
        equipno: "000477919980",
        lcscode: "M063/MNBMA",
        description: "End measure (168) beyond end of LCS (134.015)"
      }
    ]
  },
  {
    _id: 3,
    timestamp: "17-AUG-18",
    sma: 9,
    ssma: 15,
    sma2: 9.15,
    proc: "Populate_Rail_Type",
    subproc: "Rail Type",
    logentries: [
      {
        equipno: "000477969040",
        lcscode: "M064/MSBMA",
        description: "End measure (2081) beyond end of LCS (2078.418)"
      },
      {
        equipno: "000477969020",
        lcscode: "M064/MSBMA",
        description: "End measure (2081) beyond end of LCS (2078.418)"
      },
      {
        equipno: "000478105260",
        lcscode: "M068/MSBMA",
        description: "End measure (1972) beyond end of LCS (1967.756)"
      },
      {
        equipno: "000478105280",
        lcscode: "M068/MSBMA",
        description: "End measure (1972) beyond end of LCS (1967.756)"
      },
      {
        equipno: "000478252340",
        lcscode: "M074/MSBMA",
        description: "End measure (1883) beyond end of LCS (1871.084)"
      },
      {
        equipno: "000478252360",
        lcscode: "M074/MSBMA",
        description: "End measure (1883) beyond end of LCS (1871.084)"
      },
      {
        equipno: "000478317980",
        lcscode: "M091/MSBFA",
        description: "End measure (142) beyond end of LCS (133.89)"
      },
      {
        equipno: "000478317960",
        lcscode: "M091/MSBFA",
        description: "End measure (142) beyond end of LCS (133.89)"
      }
    ]
  }
];

export function getLogs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(logs);
    }, 1000);
  });
}

export function getLog(_id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(logs.find(s => s._id === _id));
    }, 1000);
  });
}
