var legend = [
  // standard js words
  { search: 'break', replace: '!HODOR;;;' },
  { search: 'case', replace: '?hooDooRrr' },
  { search: 'catch', replace: '!!!HODOR!!!' },
  { search: 'else', replace: 'hoDOR!!!' },
  { search: 'for', replace: 'HODOR{}' },
  { search: 'function', replace: 'HoDoRHoDoR' },
  { search: 'if', replace: 'HOdor!!!' },
  { search: 'instanceof', replace: 'hodorhodorho' },
  { search: 'new', replace: 'HHHOOODDDDOOORRR!!!' },
  { search: 'return', replace: 'HODOR::' },
  { search: 'switch', replace: 'HODORHODOR' },
  { search: 'throw', replace: '!hOdor!' },
  { search: 'try', replace: '!hodOr!' },
  { search: 'typeof', replace: 'Hodor?????????!?!?!?!?' },
  { search: 'var', replace: '$HODOR:' },
  { search: 'while', replace: 'hodor............' },
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
  { search: 'T', replace: 'Hodor- ' },
  { search: 'B', replace: 'HODOR- ' },
  { search: 'F', replace: 'hodor- ' },

  // "prepending HoOodoOor"
  { search: 'G', replace: 'HoOodoOorHodor ' },
  { search: 'I', replace: 'HoOodoOorHODOR ' },
  { search: 'N', replace: 'HoOodoOorhodor ' },

  // "prepending Hooodorr"
  { search: 'E', replace: 'HooodorrHodor ' },
  { search: 'L', replace: 'HooodorrHODOR ' },
  { search: 'W', replace: 'Hooodorrhodor ' },

  // "appending Hooodorr"
  { search: 'U', replace: 'HodorHooodorr ' },
  { search: 'V', replace: 'HODORHooodorr ' },
  { search: 'J', replace: 'hodorHooodorr ' },

  // "appending HoOodoOor"
  { search: 'K', replace: 'HodorHoOodoOor ' },
  { search: 'Q', replace: 'HODORHoOodoOor ' },
  { search: 'Y', replace: 'hodorHoOodoOor ' },

  // "prepending HoOodoOorHooodorr"
  { search: 'Z', replace: 'HoOodoOorHooodorrHodor ' },
  { search: 'X', replace: 'HoOodoOorHooodorrHODOR ' },
  //Add Hungarian unique characters to Hodor language  { search: 'á', replace: 'Hoodor ' },
  { search: 'Á', replace: 'HOodor ' },
  { search: 'é', replace: 'Hodoor ' },
  { search: 'É', replace: 'HOdoor ' },
  { search: 'ó', replace: 'Hooodor ' },
  { search: 'Ó', replace: 'HOoodor ' },
  { search: 'ü', replace: 'Hodooor ' },
  { search: 'Ü', replace: 'HOdooor ' },
  { search: 'ú', replace: 'Hoooodor ' },
  { search: 'Ú', replace: 'HOooodor ' },
  { search: 'ű', replace: 'Hodooor ' },
  { search: 'Ű', replace: 'HOdooor ' },
  { search: 'í', replace: 'Hooooodoor ' },
  { search: 'Í', replace: 'HOoooodoor ' },
  { search: 'ő', replace: 'HooooodoOOOor ' },
  { search: 'Ő', replace: 'HOoooodoOOOor ' },
  { search: 'ö', replace: 'HooooodoOOOOor ' },
  { search: 'Ö', replace: 'HOoooodoOOOOor ' }
];

module.exports = legend;
