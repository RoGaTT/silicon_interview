export const isMac = (platform: string): boolean => [
  'iPhone',
  'iPod',
  'iPad',
  'iPhone Simulator',
  'iPod Simulator',
  'iPad Simulator',
  'Macintosh',
  'MacIntel',
  'MacPPC',
  'Mac68K',
].some((item) => item === platform);

export const formatAlt = (isMac: boolean): string => (isMac ? 'CMD' : 'Alt');
