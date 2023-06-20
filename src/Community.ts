import { Server } from "./Server";

// 类属性（动态）
export interface Community<C extends {} = {}, S extends {} = {}>
  extends Community.Type {
  servers: Server<S>[];
  external: Omit<C, keyof Community.MetaData>;
}
export class Community<C extends {} = {}, S extends {} = {}> {
  constructor({ name, serverlist, ...external }: Community.MetaData<C, S>) {
    const define = Community.getDefineByName(name);
    this.name = define.name;
    this.label = define.label;
    this.fullname = define.fullname;
    this.external = external;
    this.servers = serverlist.map((meta) => new Server<S>(this, meta));
  }
}
export module Community {
  // 数据元
  type BaseMetaData<S extends {} = {}> = {
    name: Name;
    serverlist: Server.MetaData<S>[];
  };
  export type MetaData<C extends {} = {}, S extends {} = {}> = {
    [key in keyof (BaseMetaData<S> & C)]: (BaseMetaData<S> & C)[key];
  };
  // 类属性（静态）
  export type Type = {
    name: Name;
    label: string;
    fullname: Fullname;
  };

  const Defined = [
    { name: "93x", label: "93X", fullname: "X社区" },
    { name: "ub", label: "UB", fullname: "UB社区" },
    { name: "zed", label: "ZED", fullname: "僵尸乐园" },
    { name: "exg", label: "ExG", fullname: "ExG社区" },
    { name: "fys", label: "Fys", fullname: "风云社" },
    { name: "for", label: "外", fullname: "外服" },
    { name: "css", label: "源", fullname: "起源服" },
    { name: "5e", label: "5E", fullname: "5e社区" },
  ] as const satisfies readonly {
    name: string;
    label: string;
    fullname: string;
  }[];
  export type DefinedType = typeof Defined;
  export type Define = DefinedType[number];
  export type Name = Define["name"];
  export type Fullname = Define["fullname"]
  // export type Label = DefinedType[number]["label"];
  // export type ExtractByName<N extends Name> = Extract<
  //   DefinedType[number],
  //   { name: N }
  // >;
  // export type ExtractByLabel<L extends Label> = Extract<
  //   DefinedType[number],
  //   { label: L }
  // >;

  // // Value
  // export function GetDefined<N extends Name>(name: N): ExtractByName<N>;
  // export function GetDefined<L extends Label>(label: L): ExtractByLabel<L>;
  // export function GetDefined<K extends Name | Label>(
  //   key: K
  // ): K extends Name
  //   ? ExtractByName<K>
  //   : K extends Label
  //   ? ExtractByLabel<K>
  //   : never {
  //   return Defined.find(
  //     ({ name, label }) => name === key || label === key
  //   ) as any;
  // }

  export function getDefineByName<N extends Name>(name: N) {
    return Defined.find(({ name: _name }) => _name === name) as Extract<
      DefinedType[number],
      { name: N }
    >;
  }

  export function getDefineByFullname<F extends Fullname>(fullname: F) {
    return Defined.find(({ fullname: _fullname }) => _fullname === fullname) as Extract<
      DefinedType[number],
      { fullname: F }
    >;
  }


  /*-- constant --*/
  export const names = Defined.map(({ name }) => name);
  export const labels = Defined.map(({ label }) => label);
  export const fullnames = Defined.map(({fullname}) => fullname);

  /*-- type predicates --*/
  export function isName(name: string): name is Name {
    return names.includes(name as Name);
  }
  export function isFullname(fullname: string): fullname is Fullname {
    return fullnames.includes(fullname as Fullname);
  }
}

// --------------- Type Test Community.MetaData ----------------
// export const _93x : Community.MetaData<"93x"> = {
//   name: "93x",
//   label: "93X",
//   fullname: "X社区",
//   serverlist: []
// }
// --------------- Type Test Community -------------------
// export const _93x: Community = new Community({
//   name: "93x",
//   serverlist: [],
// });
// --------------- Type Test Community -------------------
// export const _93x: Community = {
//   _data: {
//     name: "93x",
//   }
// }

// const AllMetaData: Community.MetaData[] = [{

// }]
