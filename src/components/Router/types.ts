export enum PermissionLevel {
  Tree = "עצי",
  Course = "קורסי",
  All = "כולם",
}

export interface Page {
  path: string;
  element: () => JSX.Element;
}
