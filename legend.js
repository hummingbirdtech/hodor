var legend = [
  // standard js words
  { search: 'break', replace: '!HODOR' },
  { search: 'case', replace: '?HODOR' },
  { search: 'catch', replace: '!!!HODOR!!!' },
  { search: 'else', replace: 'DOR' },
  { search: 'for', replace: 'HODOR' },
  { search: 'function', replace: 'hodorhodor' },
  { search: 'if', replace: 'HO' },
  { search: 'instanceof', replace: 'hodorhodorho' },
  { search: 'new', replace: 'HHHOOODDDDOOORRR!!!' },
  { search: 'return', replace: 'hodor:' },
  { search: 'switch', replace: 'HODORHODOR' },
  { search: 'throw', replace: 'dor' },
  { search: 'try', replace: 'ho' },
  { search: 'typeof', replace: 'hodorho' },
  { search: 'var', replace: '#hodor' },
  { search: 'while', replace: 'hodorhodorhodorhodor' },


  // most common letters that are not h, o, d or r
  // s a c m p t b f g i n e l w u v j k q y z x
  // "x "
  { search: 'Hodor ', replace: 's' },
  { search: 'HODOR ', replace: 'a' },
  { search: 'hodor ', replace: 'c' },
  
  // "x. "
  { search: 'Hodor. ', replace: 'm' },
  { search: 'HODOR. ', replace: 'p' },
  { search: 'hodor. ', replace: 't' },

  // "x! "
  { search: 'Hodor! ', replace: 'b' },
  { search: 'HODOR! ', replace: 'f' },
  { search: 'hodor! ', replace: 'g' },

  // "x? "
  { search: 'Hodor? ', replace: 'i' },
  { search: 'HODOR? ', replace: 'n' },
  { search: 'hodor? ', replace: 'e' },

  // "x!? "
  { search: 'Hodor!? ', replace: 'l' },
  { search: 'HODOR!? ', replace: 'w' },
  { search: 'hodor!? ', replace: 'u' },

  // "x?! "
  { search: 'Hodor?! ', replace: 'v' },
  { search: 'HODOR?! ', replace: 'j' },
  { search: 'hodor?! ', replace: 'k' },

  // "x!?! "
  { search: 'Hodor!?! ', replace: 'q' },
  { search: 'HODOR!?! ', replace: 'y' },
  { search: 'hodor!?! ', replace: 'z' },

  // "x?!? "
  { search: 'Hodor?!? ', replace: 'x' },
  { search: 'HODOR?!? ', replace: 'S' },
  { search: 'hodor?!? ', replace: 'A' },

  // "x... "
  { search: 'Hodor... ', replace: 'C' },
  { search: 'HODOR... ', replace: 'M' },
  { search: 'hodor... ', replace: 'P' },

  // "x-"
  { search: 'Hodor-', replace: 'T' },
  { search: 'HODOR-', replace: 'B' },
  { search: 'hodor-', replace: 'F' },

  // "x x "
  { search: 'Hodor Hodor ', replace: 'G' },
  { search: 'HODOR HODOR ', replace: 'I' },
  { search: 'hodor hodor ', replace: 'N' },

  // "x x x "
  { search: 'Hodor Hodor Hodor ', replace: 'E' },
  { search: 'HODOR HODOR HODOR ', replace: 'L' },
  { search: 'hodor hodor hodor ', replace: 'W' },

  // "x x x x "
  { search: 'Hodor Hodor Hodor Hodor ', replace: 'U' },
  { search: 'HODOR HODOR HODOR HODOR ', replace: 'V' },
  { search: 'hodor hodor hodor hodor ', replace: 'J' },

  // "x x x x x "
  { search: 'Hodor Hodor Hodor Hodor Hodor ', replace: 'K' },
  { search: 'HODOR HODOR HODOR HODOR HODOR ', replace: 'Q' },
  { search: 'hodor hodor hodor hodor hodor ', replace: 'Y' },

  // "x x x x x x "
  { search: 'Hodor Hodor Hodor Hodor Hodor Hodor ', replace: 'Z' },
  { search: 'HODOR HODOR HODOR HODOR HODOR HODOR ', replace: 'X' }
];

module.exports = legend;