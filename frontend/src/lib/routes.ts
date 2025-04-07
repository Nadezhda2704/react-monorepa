const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};
export const getAllPatternsRoute = () => '/';

export const getPatternRouteParams = getRouteParams({ patternId: true });
export type GetPatternRouteParams = typeof getPatternRouteParams;
export const getPatternRoute = ({ patternId }: GetPatternRouteParams) => `/pattern/${patternId}`;

// export const getPatternRouteParams = { patternId: ':patternId' };
// export type typeGetPatternRouteParams = { patternId: string };
// export const getPatternRoute = ({ patternId }: { patternId: string }) => `/pattern/${patternId}`;