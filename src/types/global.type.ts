export interface IPathWithChildren {
  text: string;
  children: IPathWithPathname[];
  pathname?: never;
}

export interface IPathWithPathname {
  text: string;
  pathname: string;
  children?: never;
}

export type IPath = IPathWithChildren | IPathWithPathname;
