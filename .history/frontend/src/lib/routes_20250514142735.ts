const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};
export const getAllPatternsRoute = () => '/';
export const getSignUpRoute = () => '/sign-up';

export const getPatternRouteParams = getRouteParams({ patternId: true });
export type GetPatternRouteParams = typeof getPatternRouteParams;
export const getPatternRoute = ({ patternId }: GetPatternRouteParams) => `/pattern/${patternId}`;

export const getTypePatternRouteParams = getRouteParams({ patternType: true });
export type GetTypePatternRouteParams = typeof getTypePatternRouteParams;
export const getTypePatternRoute = ({ patternType }: GetTypePatternRouteParams) => `/type/${patternType}`;
