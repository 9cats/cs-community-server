export module CS {
  export interface CommunityType {
    name: Community.Name;
    label: string;
    severlist: ServerType[];
  }

  export interface ServerType {
    name: string;
    mode: Server.Mode;
    host: string;
    port: number;
  }

  export class Community implements CommunityType {
    public name: Community.Name;
    public label: string;
    public severlist: ServerType[];
    public servers: Server[];

    constructor({ name, label, severlist }: CommunityType) {
      this.name = name;
      this.label = label;
      this.severlist = severlist;
      this.servers = severlist.map((server) => ({ ...server, parent: this }));
    }
  }
  export module Community {
    const RecordedCommunity = [
      "ub",
      "93x",
      "zed",
      "exg",
      "fys",
      "for",
      "css",
    ] as const;
    export type Name = (typeof RecordedCommunity)[number];
  }

  module Server {
    const Modes = [
      "zm", // 僵尸感染
      "ze", // 僵尸逃跑
      "mg", // 娱乐对抗
      "de", // 混战
      "ttt", // 叛徒
      "surf", // 滑翔
      "bhop", // 连跳
      "kz", // 攀岩
      "jb", // 越狱
      "dr", // 死亡奔跑
    ] as const;
    export type Mode = (typeof Modes)[number];
  }

  export interface Server extends ServerType {
    parent: Community;
  }
}