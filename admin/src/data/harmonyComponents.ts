import { componentCssByName, componentSources } from './componentRegistry';

export const harmonyComponentCssByName = componentCssByName;
export const harmonyComponentSlugs = componentSources.map((source) => source.name);
