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
  { search: 'console.log', replace: 'hodor.hod' },

  // most common letters that are not h, o, d or r
  // s a c m p t b f g i n e l w u v j k q y z x
  // "x "
  { search: 's', replace: 'Hodor ' },
  { search: 'a', replace: 'HODOR ' },
  { search: 'c', replace: 'hodor ' },
  
  // "x. "
  { search: 'm', replace: 'Hodor. ' },
  { search: 'p', replace: 'HODOR. ' },
  { search: 't', replace: 'hodor. ' },

  // "x! "
  { search: 'b', replace: 'Hodor! ' },
  { search: 'f', replace: 'HODOR! ' },
  { search: 'g', replace: 'hodor! ' },

  // "x? "
  { search: 'i', replace: 'Hodor? ' },
  { search: 'n', replace: 'HODOR? ' },
  { search: 'e', replace: 'hodor? ' },

  // "x!? "
  { search: 'l', replace: 'Hodor!? ' },
  { search: 'w', replace: 'HODOR!? ' },
  { search: 'u', replace: 'hodor!? ' },

  // "x?! "
  { search: 'v', replace: 'Hodor?! ' },
  { search: 'j', replace: 'HODOR?! ' },
  { search: 'k', replace: 'hodor?! ' },

  // "x!?! "
  { search: 'q', replace: 'Hodor!?! ' },
  { search: 'y', replace: 'HODOR!?! ' },
  { search: 'z', replace: 'hodor!?! ' },

  // "x?!? "
  { search: 'x', replace: 'Hodor?!? ' },
  { search: 'S', replace: 'HODOR?!? ' },
  { search: 'A', replace: 'hodor?!? ' },

  // "x... "
  { search: 'C', replace: 'Hodor... ' },
  { search: 'M', replace: 'HODOR... ' },
  { search: 'P', replace: 'hodor... ' },

  // "x-"
  { search: 'T', replace: 'Hodor-' },
  { search: 'B', replace: 'HODOR-' },
  { search: 'F', replace: 'hodor-' },

  // "x x "
  { search: 'G', replace: 'Hodor Hodor ' },
  { search: 'I', replace: 'HODOR HODOR ' },
  { search: 'N', replace: 'hodor hodor ' },

  // "x x x "
  { search: 'E', replace: 'Hodor Hodor Hodor ' },
  { search: 'L', replace: 'HODOR HODOR HODOR ' },
  { search: 'W', replace: 'hodor hodor hodor ' },

  // "x x x x "
  { search: 'U', replace: 'Hodor Hodor Hodor Hodor ' },
  { search: 'V', replace: 'HODOR HODOR HODOR HODOR ' },
  { search: 'J', replace: 'hodor hodor hodor hodor ' },

  // "x x x x x "
  { search: 'K', replace: 'Hodor Hodor Hodor Hodor Hodor ' },
  { search: 'Q', replace: 'HODOR HODOR HODOR HODOR HODOR ' },
  { search: 'Y', replace: 'hodor hodor hodor hodor hodor ' },

  // "x x x x x x "
  { search: 'Z', replace: 'Hodor Hodor Hodor Hodor Hodor Hodor ' },
  { search: 'X', replace: 'HODOR HODOR HODOR HODOR HODOR HODOR ' }
];

module.exports = legend;