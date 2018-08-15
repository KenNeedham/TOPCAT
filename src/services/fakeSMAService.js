const smas = [
  {
    id: 11479,
    sma: "1.1",
    title: "HAM(Plt1)-EDR(Plt1)"
  },
  {
    id: 15149,
    sma: "1.2",
    title: "EDR(Plt4)-HAM(Plt2)"
  },
  {
    id: 12243,
    sma: "1.3",
    title: "HAM(Plt2)-GOR(Plt1)"
  },
  {
    id: 13204,
    sma: "1.4",
    title: "HAM(Plt3)-GOR(Plt1)"
  },
  {
    id: 14151,
    sma: "1.5",
    title: "GOR(Plt2)-HAM(Plt1)"
  },
  {
    id: 11288,
    sma: "1.6",
    title: "GOR(Plt2)-HAM(Plt3)"
  },
  {
    id: 2731,
    sma: "2.1",
    title: "PAD(Plt16)-KIC(Plt2)_S8"
  },
  {
    id: 1842,
    sma: "2.10",
    title: "BAS(Plt4)-FIR(Plt1)_S8"
  },
  {
    id: 8712,
    sma: "2.13",
    title: "BAS(Plt6)-BAY(Plt1)"
  },
  {
    id: 9717,
    sma: "2.14",
    title: "BAY(Plt2)-BAS(Plt5)"
  },
  {
    id: 20313,
    sma: "2.15",
    title: "PAD(Plt2)-EDR(Plt2)"
  },
  {
    id: 7652,
    sma: "2.16",
    title: "PAD(Plt2)-EDR(Plt3)"
  },
  {
    id: 16596,
    sma: "2.17",
    title: "EDR(Plt2)-PAD(Plt1)"
  },
  {
    id: 20488,
    sma: "2.18",
    title: "PAD(Plt16)-EDR(Plt2)"
  },
  {
    id: 18555,
    sma: "2.19",
    title: "PAD(Plt16)-EDR(Plt3)"
  },
  {
    id: 10861,
    sma: "2.2",
    title: "KIC(Plt1)-PAD(Plt15)"
  },
  {
    id: 20577,
    sma: "2.20",
    title: "EDR(Plt2)-PAD(Plt15)"
  },
  {
    id: 7716,
    sma: "2.21",
    title: "EDR(Plt3)-PAD(Plt15)"
  },
  {
    id: 6626,
    sma: "2.22",
    title: "PAD(Plt2)-EDR(Plt1)"
  },
  {
    id: 6981,
    sma: "2.23",
    title: "EDR(Plt3)-BAS(Plt5)"
  },
  {
    id: 6715,
    sma: "2.24",
    title: "EDR(Plt4)-PAD(Plt1)"
  },
  {
    id: 25663,
    sma: "2.3",
    title: "WEP(Plt6)-GPS(Plt2)_S8"
  },
  {
    id: 15719,
    sma: "2.4",
    title: "GPS(Plt1)-WEP(Plt2)_S8"
  },
  {
    id: 4782,
    sma: "2.5",
    title: "FIR(Plt4)-BAS(Plt4)_S8"
  },
  {
    id: 107591,
    sma: "2.6",
    title: "BAS(Plt1)-FIR(Plt1)_S8"
  },
  {
    id: 1794,
    sma: "2.8",
    title: "FIR(Plt4)-BAS(Plt1)_S8"
  },
  {
    id: 28735,
    sma: "3.1",
    title: "ESQ(Plt2)-CAS(Plt1)"
  },
  {
    id: 27883,
    sma: "3.10",
    title: "BAB(Plt1)-MOO(Plt2)"
  },
  {
    id: 27725,
    sma: "3.11",
    title: "MOO(Plt1)-BAB(Plt2)"
  },
  {
    id: 28816,
    sma: "3.12",
    title: "MOO(Plt4)-BAB(Plt2)"
  },
  {
    id: 29938,
    sma: "3.13",
    title: "MOO(Plt3)-BAB(Plt2)"
  },
  {
    id: 27513,
    sma: "3.14",
    title: "LIS(Plt1)-MOO(Plt2)"
  },
  {
    id: 28104,
    sma: "3.15",
    title: "LIS(Plt1)-ALD(Plt2)"
  },
  {
    id: 105280,
    sma: "3.16",
    title: "ALD(Plt3)-LIS(Plt2)"
  },
  {
    id: 110574,
    sma: "3.17",
    title: "LIS(Plt1)-ALD(Plt3)"
  },
  {
    id: 111002,
    sma: "3.18",
    title: "ALD(Plt2)-LIS(Plt2)"
  },
  {
    id: 6726,
    sma: "3.2",
    title: "CAS(Plt2)-ESQ(Plt1)_S8"
  },
  {
    id: 111358,
    sma: "3.20",
    title: "MON(Plt2)-TOH(Plt2)"
  },
  {
    id: 111409,
    sma: "3.21",
    title: "TOH(Plt2)-MON(Plt1)"
  },
  {
    id: 5689,
    sma: "3.22",
    title: "WHI(Plt2)-STG(Plt2)"
  },
  {
    id: 6136,
    sma: "3.23",
    title: "WHI(Plt1)-ALE(Plt1)"
  },
  {
    id: 25331,
    sma: "3.3",
    title: "LIS(Plt1)-MIE(Plt3)"
  },
  {
    id: 110461,
    sma: "3.4",
    title: "MIE(Plt2)-LIS(Plt2)"
  },
  {
    id: 110829,
    sma: "3.5",
    title: "ALE(Plt1)-TOH(Plt1)"
  },
  {
    id: 110882,
    sma: "3.6",
    title: "TOH(Plt3)-ALE(Plt2)"
  },
  {
    id: 111278,
    sma: "3.7",
    title: "ESQ(Plt2)-KIC(Plt1)"
  },
  {
    id: 30295,
    sma: "3.8",
    title: "KIC(Plt2)-ESQ(Plt1)"
  },
  {
    id: 115443,
    sma: "4.1",
    title: "SOK(Plt2)-MON(Plt2)"
  },
  {
    id: 23304,
    sma: "4.2",
    title: "MON(Plt1)-SOK(Plt1)"
  },
  {
    id: 28201,
    sma: "5.1",
    title: "PAD(Plt1)-SOK(Plt2)"
  },
  {
    id: 34060,
    sma: "5.11",
    title: "WEK(Plt2)-HSK(Plt4)"
  },
  {
    id: 35784,
    sma: "5.12",
    title: "EAC(Plt2)-HSK(Plt3)"
  },
  {
    id: 31732,
    sma: "5.13",
    title: "EAC(Plt1)-HSK(Plt3)"
  },
  {
    id: 34499,
    sma: "5.15",
    title: "EAC(Plt2)-HSK(Plt2)"
  },
  {
    id: 35926,
    sma: "5.16",
    title: "HSK(Plt4)-EAC(Plt4)"
  },
  {
    id: 31797,
    sma: "5.19",
    title: "EAC(Plt1)-GLR(Plt3)"
  },
  {
    id: 98000,
    sma: "5.2",
    title: "SOK(Plt1)-PAD(Plt2)"
  },
  {
    id: 33162,
    sma: "5.23",
    title: "OLY(Plt1)-EAC(Plt1)"
  },
  {
    id: 35597,
    sma: "5.24",
    title: "EAC(Plt4)-OLY(Plt1)"
  },
  {
    id: 37452,
    sma: "5.25",
    title: "EAC(Plt3)-OLY(Plt1)"
  },
  {
    id: 99278,
    sma: "5.3",
    title: "HMD(Plt4)-HSK(Plt4)"
  },
  {
    id: 31105,
    sma: "5.4",
    title: "HSK(Plt3)-PAG(Plt1)"
  },
  {
    id: 38530,
    sma: "5.5",
    title: "PAG(Plt2)-GLR(Plt3)"
  },
  {
    id: 28811,
    sma: "5.6",
    title: "SOK(Plt1)-HMD(Plt1)"
  },
  {
    id: 26541,
    sma: "5.7",
    title: "HSK(Plt1)-EAC(Plt4)"
  },
  {
    id: 26230,
    sma: "5.8",
    title: "GLR(Plt1)-WEK(Plt1)"
  },
  {
    id: 26605,
    sma: "5.9",
    title: "EAC(Plt3)-WEB(Plt1)"
  },
  {
    id: 41738,
    sma: "6.1",
    title: "STG(Plt2)-DAH(Plt2)"
  },
  {
    id: 45352,
    sma: "6.2",
    title: "DAH(Plt1)-STG(Plt1)"
  },
  {
    id: 107263,
    sma: "6.3",
    title: "WHA(Plt2)-PLA(Plt3)"
  },
  {
    id: 108098,
    sma: "6.4",
    title: "EAH(Plt2)-BAG(Plt3)"
  },
  {
    id: 108899,
    sma: "6.5",
    title: "BAG(Plt3)-EAH(Plt1)"
  },
  {
    id: 105752,
    sma: "6.6",
    title: "EAH(Plt1)-BAG(Plt2)"
  },
  {
    id: 106122,
    sma: "6.7",
    title: "PLA(Plt3)-WHA(Plt1)"
  },
  {
    id: 45235,
    sma: "7.1",
    title: "BEC(Plt2)-UPM(Plt4)"
  },
  {
    id: 46249,
    sma: "7.2",
    title: "UPM(Plt3)-BEC(Plt1)"
  },
  {
    id: 47605,
    sma: "7.3",
    title: "DAH(Plt2)-DAE(Plt3)"
  },
  {
    id: 108236,
    sma: "7.4",
    title: "DAE(Plt3)-DAH(Plt1)"
  },
  {
    id: 63491,
    sma: "7.5",
    title: "HOR(Plt2)-ELP(Plt1)"
  },
  {
    id: 108614,
    sma: "7.6",
    title: "UPB(Plt2)-UPM(Plt3)"
  },
  {
    id: 109007,
    sma: "7.7",
    title: "UPB(Plt2)-UPM(Plt5)"
  },
  {
    id: 52117,
    sma: "7.8",
    title: "UPM(Plt4)-UPB(Plt1)"
  },
  {
    id: 58599,
    sma: "7.9",
    title: "UPM(Plt5)-UPB(Plt1)"
  },
  {
    id: 62287,
    sma: "8.1",
    title: "NOP(Plt2)-FIR(Plt4)_S8"
  },
  {
    id: 50985,
    sma: "8.2",
    title: "FIR(Plt1)-NOP(Plt1)_S8"
  },
  {
    id: 58236,
    sma: "8.3",
    title: "HOH(Plt6)-FIR(Plt4)_S8"
  },
  {
    id: 59687,
    sma: "8.4",
    title: "FIR(Plt1)-HOH(Plt3)_S8"
  },
  {
    id: 78956,
    sma: "9.1",
    title: "RIH(Plt2)-PRR(Plt2)_S8"
  },
  {
    id: 90604,
    sma: "9.10",
    title: "WEP(Plt1)-NHA(Plt1)_S8"
  },
  {
    id: 69164,
    sma: "9.11",
    title: "NHA(Plt2)-WEP(Plt6)_S8"
  },
  {
    id: 86981,
    sma: "9.13",
    title: "HOH(Plt5)-WSH(Plt1)"
  },
  {
    id: 102725,
    sma: "9.14",
    title: "HOH(Plt3)-MOP(Plt1)_S8"
  },
  {
    id: 102854,
    sma: "9.15",
    title: "MOP(Plt2)-HOH(Plt6)_S8"
  },
  {
    id: 60883,
    sma: "9.2",
    title: "PRR(Plt1)-RIH(Plt1)_S8"
  },
  {
    id: 108704,
    sma: "9.3",
    title: "RIH(Plt2)-NRBOUNDARY"
  },
  {
    id: 124065,
    sma: "9.4",
    title: "NRBOUNDARY-RIH(Plt1)_S8"
  },
  {
    id: 120820,
    sma: "9.5",
    title: "RAL(Plt2)-NOP(Plt2)_S8"
  },
  {
    id: 120124,
    sma: "9.6",
    title: "NOP(Plt1)-RAL(Plt1)_S8"
  },
  {
    id: 121429,
    sma: "9.7",
    title: "WSH(Plt2)-WEP(Plt6)_S8"
  },
  {
    id: 119892,
    sma: "9.8",
    title: "WEP(Plt1)-WSH(Plt1)_S8"
  },
  {
    id: 91715,
    sma: "9.9",
    title: "WEP(Plt1)-HOH(Plt1)_S8"
  },
  {
    id: 83954,
    sma: "10.1",
    title: "ACT(Plt4)-BAC(Plt4)"
  },
  {
    id: 85285,
    sma: "10.2",
    title: "BAC(Plt1)-ACT(Plt1)"
  },
  {
    id: 84194,
    sma: "10.3",
    title: "RMD(Plt6)-TUG(Plt4)"
  },
  {
    id: 85117,
    sma: "10.4",
    title: "TUG(Plt1)-RMD(Plt5)"
  },
  {
    id: 104413,
    sma: "10.6",
    title: "RMD(Plt7)-KWG(Plt1)"
  },
  {
    id: 63912,
    sma: "10.7",
    title: "KWG(Plt2)-RMD(Plt4)"
  },
  {
    id: 96835,
    sma: "11.1",
    title: "EAB(Plt9)-CHP(Plt2)"
  },
  {
    id: 68342,
    sma: "11.2",
    title: "CHP(Plt1)-EAB(Plt8)"
  },
  {
    id: 84763,
    sma: "11.3",
    title: "ECO(Plt1)-EAB(Plt7)"
  },
  {
    id: 84013,
    sma: "11.4",
    title: "ECO(Plt1)-EAB(Plt9)"
  },
  {
    id: 126045,
    sma: "11.5",
    title: "EAB(Plt8)-ECO(Plt2)"
  },
  {
    id: 123416,
    sma: "12.1",
    title: "WIM(Plt1)-FUB(Plt2)"
  },
  {
    id: 33588,
    sma: "12.2",
    title: "FUB(Plt1)-WIM(Plt2)"
  },
  {
    id: 127243,
    sma: "12.3",
    title: "WIM(Plt2)-WIP(Plt1)"
  },
  {
    id: 123554,
    sma: "12.4",
    title: "WIP(Plt2)-WIM(Plt3)"
  },
  {
    id: 125262,
    sma: "12.5",
    title: "WIP(Plt2)-WIM(Plt4)"
  },
  {
    id: 127005,
    sma: "12.6",
    title: "EAP(Plt1)-SOU(Plt2)"
  },
  {
    id: 104215,
    sma: "12.7",
    title: "WIP(Plt1)-WIM(Plt2)"
  },
  {
    id: 86537,
    sma: "13.1",
    title: "AME(Plt3)-MOP(Plt2)"
  },
  {
    id: 144338,
    sma: "13.10",
    title: "MOP(Plt3)-WAF(Plt1)"
  },
  {
    id: 145741,
    sma: "13.11",
    title: "CHE(Plt1)-CAL(Plt2)"
  },
  {
    id: 111125,
    sma: "13.2",
    title: "MOP(Plt1)-AME(Plt1)"
  },
  {
    id: 129238,
    sma: "13.3",
    title: "CAL(Plt1)-AME(Plt2)"
  },
  {
    id: 134253,
    sma: "13.4",
    title: "CAL(Plt3)-CHE(Plt1)"
  },
  {
    id: 135416,
    sma: "13.5",
    title: "CAL(Plt1)-CHE(Plt1)"
  },
  {
    id: 94972,
    sma: "13.6",
    title: "CAL(Plt2)-AME(Plt2)"
  },
  {
    id: 114266,
    sma: "13.7",
    title: "AME(Plt1)-CAL(Plt2)"
  },
  {
    id: 95670,
    sma: "13.8",
    title: "AME(Plt2)-CAL(Plt2)"
  },
  {
    id: 96272,
    sma: "13.9",
    title: "WAF(Plt2)-MOP(Plt4)"
  },
  {
    id: 140264,
    sma: "14.1",
    title: "UXB(Plt4)-WSH(Plt2)"
  },
  {
    id: 140098,
    sma: "14.2",
    title: "WSH(Plt1)-UXB(Plt1)"
  },
  {
    id: 142478,
    sma: "14.3",
    title: "UXB(Plt2&3)-HIL(Plt2)"
  },
  {
    id: 148272,
    sma: "14.4",
    title: "UXB(Plt1)-HIL(Plt2)"
  },
  {
    id: 148860,
    sma: "14.5",
    title: "HIL(Plt1)-UXB(Plt4)"
  },
  {
    id: 148159,
    sma: "14.6",
    title: "HIL(Plt1)-UXB(Plt2&3)"
  }
];

export function getSMAs() {
  return smas;
}

export function getSMA(id) {
  return smas.find(s => s._id === id);
}
