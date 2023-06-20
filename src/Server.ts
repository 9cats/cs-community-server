import { Community } from "./Community"

// 类属性（动态）
export interface Server<S extends {} = {}> extends Server.Type {
  external: Omit<S, keyof Server.MetaData>
}

export class Server<S extends {} = {}> {
  constructor(
    public parent: Community, //TODO:
    { name, host, port, mode, ...external }: Server.MetaData<S>
  ) {
    this.name = name
    this.host = host
    this.port = port
    this.external = external
    this.mode = Server.Mode.getDefineByName(mode)
  }
}

export module Server {
  // 数据元
  type BaseMetaData = {
    name: string
    host: string
    port: number
    mode: Mode.Name
  }
  export type MetaData<S extends {} = {}> = {
    [key in keyof (BaseMetaData & S)]: (BaseMetaData & S)[key]
  }

  // 类属性（静态）
  export type Type = {
    name: string
    host: string
    port: number
    mode: Mode
    parent: Community
  }

  /*------------- Server.Mode ---------------*/
  export type Mode = Mode.Define
  export module Mode {
    /*- Type -*/
    type Type = { name: string; label: string }
    const Defined = [
      { name: "zm", label: "僵尸感染" },
      { name: "ze", label: "僵尸逃跑" },
      { name: "mg", label: "娱乐对抗" },
      { name: "de", label: "混战" },
      { name: "ttt", label: "叛徒" },
      { name: "surf", label: "滑翔" },
      { name: "bhop", label: "连跳" },
      { name: "kz", label: "攀岩" },
      { name: "jb", label: "越狱" },
      { name: "dr", label: "死亡奔跑" }
    ] as const satisfies readonly Type[]
    export type DefinedType = typeof Defined
    export type Define = DefinedType[number]
    export type Name = Define["name"]
    export type Label = Define["label"]

    /*- Value -*/
    export function getDefineByName<N extends Name>(name: N) {
      return Defined.find(({ name: _name }) => _name === name) as Extract<DefinedType[number], { name: N }>
    }
    export function getDefineByLabel<L extends Label>(label: L) {
      return Defined.find(({ label: _label }) => _label === label) as Extract<DefinedType[number], { label: L }>
    }

    /*-- constant --*/
    export const names = Defined.map(({ name }) => name)
    export const labels = Defined.map(({ label }) => label)

    /*-- type predicates --*/
    export function isName(name: string): name is Name {
      return names.includes(name as Name)
    }
    export function isLabel(label: string): label is Label {
      return labels.includes(label as Label)
    }
  }
}

// 类 -> MetaData -> Type
// 数据 -> Type
// const testServer = new Server<{ foo: string }>(null, {
//   name: "",
//   port: 123,
//   host: "",
//   mode: "dr",
//   foo: "",
// });
// testServer.external.foo;
