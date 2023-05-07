import fs from "fs";

const RecordedCommunity = [
  "ub",
  "93x",
  "zed",
  "exg",
  "fys",
  "for",
  "css",
] as const;

export module CSCore {
  export class Community {
    public name: Community.Name;
    public label: string;
    public servers: Server[];

    constructor(name: Community.Name, label: string) {
      this.name = name;
      this.label = label;
      this.servers = [];
    }

    addServer(server: Omit<Server, "parent"> | Omit<Server, "parent">[]) {
      if (Array.isArray(server)) {
        for (const s of server) {
          this.servers.push({ ...s, parent: this });
        }
      } else {
        this.servers.push({ ...server, parent: this });
      }
      return this;
    }
  }
  export module Community {
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

  export interface Server {
    name: string;
    parent: Community;
    mode: Server.Mode;
    host: string;
    port: number;
  }
}

export class CS {
  static community: Record<CSCore.Community.Name, CSCore.Community> = {
    ub: new CSCore.Community("ub", "UB社区").addServer([
      { name: "01服", mode: "ze", host: "csgo1.moeub.com", port: 27011 },
      { name: "02服", mode: "ze", host: "csgo1.moeub.com", port: 27021 },
      { name: "03服", mode: "ze", host: "csgo1.moeub.com", port: 27031 },
      { name: "04服", mode: "ze", host: "csgo1.moeub.com", port: 27041 },
      { name: "05服", mode: "ze", host: "csgo1.moeub.com", port: 27051 },
      { name: "06服", mode: "ze", host: "csgo1.moeub.com", port: 27061 },
      { name: "07服", mode: "ze", host: "csgo1.moeub.com", port: 27071 },
      { name: "08服", mode: "ze", host: "csgo1.moeub.com", port: 27081 },
      { name: "09服", mode: "ze", host: "csgo1.moeub.com", port: 27091 },
      { name: "10服", mode: "ze", host: "csgo1.moeub.com", port: 27101 },
      { name: "11服", mode: "ze", host: "csgo1.moeub.com", port: 27111 },
      { name: "娱乐1服", mode: "mg", host: "csgo1.moeub.com", port: 27012 },
      { name: "娱乐2服", mode: "mg", host: "csgo1.moeub.com", port: 27022 },
      { name: "混战1服", mode: "de", host: "csgo1.moeub.com", port: 27015 },
      { name: "混战2服", mode: "de", host: "csgo1.moeub.com", port: 27025 },
      { name: "混战3服", mode: "de", host: "csgo1.moeub.com", port: 27035 },
      { name: "混战4服", mode: "de", host: "csgo1.moeub.com", port: 27045 },
      { name: "越狱1服", mode: "jb", host: "csgo1.moeub.com", port: 27013 },
      { name: "越狱2服", mode: "jb", host: "csgo1.moeub.com", port: 27023 },
      { name: "攀岩1服", mode: "kz", host: "csgo1.moeub.com", port: 27014 },
      { name: "攀岩2服", mode: "kz", host: "csgo1.moeub.com", port: 27024 },
      { name: "攀岩3服", mode: "kz", host: "csgo1.moeub.com", port: 27034 },
      { name: "攀岩4服", mode: "kz", host: "csgo1.moeub.com", port: 27044 },
      { name: "攀岩5服", mode: "kz", host: "csgo1.moeub.com", port: 27054 },
      { name: "攀岩6服", mode: "kz", host: "csgo1.moeub.com", port: 27064 },
    ]),
    "93x": new CSCore.Community("93x", "X社区").addServer([
      { name: "01服", mode: "ze", host: "61.146.163.246", port: 27165 },
      { name: "02服", mode: "ze", host: "61.146.163.246", port: 27060 },
      { name: "03服", mode: "ze", host: "61.146.163.246", port: 27175 },
      { name: "测试服", mode: "ze", host: "61.146.163.246", port: 22016 },
      { name: "娱乐1服", mode: "mg", host: "45.125.44.52", port: 27018 },
      { name: "娱乐2服", mode: "mg", host: "45.125.44.52", port: 27030 },
      { name: "娱乐3服", mode: "mg", host: "113.100.188.32", port: 28300 },
      { name: "闯关1服", mode: "mg", host: "45.125.44.52", port: 27025 },
      { name: "闯关2服", mode: "mg", host: "45.125.44.52", port: 27060 },
    ]),
    zed: new CSCore.Community("zed", "僵尸乐园").addServer([
      { name: "01服", mode: "ze", host: "cs2.zombieden.cn", port: 27050 },
      { name: "02服", mode: "ze", host: "cs2.zombieden.cn", port: 27051 },
      { name: "03服", mode: "ze", host: "cs3.zombieden.cn", port: 27055 },
      { name: "04服", mode: "ze", host: "cs5.zombieden.cn", port: 27050 },
      { name: "05服", mode: "ze", host: "cs5.zombieden.cn", port: 27051 },
      { name: "06服", mode: "ze", host: "cs5.zombieden.cn", port: 27052 },
      { name: "07服", mode: "ze", host: "cs3.zombieden.cn", port: 27056 },
      { name: "感染01服", mode: "zm", host: "cs4.zombieden.cn", port: 27050 },
      { name: "感染02服", mode: "zm", host: "cs4.zombieden.cn", port: 27051 },
      { name: "娱乐1服", mode: "mg", host: "cs4.zombieden.cn", port: 27052 },
      { name: "娱乐2服", mode: "mg", host: "cs4.zombieden.cn", port: 27053 },
      { name: "闯关[新手]", mode: "mg", host: "cs3.zombieden.cn", port: 27053 },
      { name: "闯关[进阶]", mode: "mg", host: "cs3.zombieden.cn", port: 27054 },
      { name: "闯关[专家]", mode: "mg", host: "cs4.zombieden.cn", port: 27055 },
      { name: "混战", mode: "de", host: "cs4.zombieden.cn", port: 27054 },
      {
        name: "连跳[简单]",
        mode: "bhop",
        host: "cs3.zombieden.cn",
        port: 27050,
      },
      {
        name: "连跳[困难]",
        mode: "bhop",
        host: "cs3.zombieden.cn",
        port: 27051,
      },
      {
        name: "连跳[综合]",
        mode: "bhop",
        host: "cs3.zombieden.cn",
        port: 27052,
      },
      { name: "攀岩[简单]", mode: "kz", host: "cs6.zombieden.cn", port: 27101 },
      { name: "攀岩[困难]", mode: "kz", host: "cs6.zombieden.cn", port: 27102 },
      { name: "攀岩[综合]", mode: "kz", host: "cs6.zombieden.cn", port: 27103 },
      {
        name: "滑翔[简单]",
        mode: "surf",
        host: "cs6.zombieden.cn",
        port: 27201,
      },
      {
        name: "滑翔[困难]",
        mode: "surf",
        host: "cs6.zombieden.cn",
        port: 27202,
      },
      {
        name: "滑翔[综合]",
        mode: "surf",
        host: "cs6.zombieden.cn",
        port: 27203,
      },
      {
        name: "匪镇谍影1服",
        mode: "ttt",
        host: "cs6.zombieden.cn",
        port: 27055,
      },
      {
        name: "匪镇谍影2服",
        mode: "ttt",
        host: "cs6.zombieden.cn",
        port: 27056,
      },
      {
        name: "匪镇谍影3服",
        mode: "ttt",
        host: "cs6.zombieden.cn",
        port: 27057,
      },
    ]),
    exg: new CSCore.Community("exg", "ExG社区").addServer([
      { name: "01服", mode: "ze", host: "45.125.45.192", port: 27015 },
      { name: "02服", mode: "ze", host: "45.125.45.207", port: 27025 },
      { name: "03服", mode: "ze", host: "45.125.45.207", port: 27035 },
      { name: "04服", mode: "ze", host: "202.189.15.68", port: 27015 },
      { name: "05服", mode: "ze", host: "202.189.15.68", port: 27025 },
      { name: "06服", mode: "ze", host: "202.189.15.68", port: 27035 },
    ]),
    fys: new CSCore.Community("fys", "风云社").addServer([]),
    for: new CSCore.Community("for", "外服").addServer([
      {
        name: "(俄)Net4ALL.RU",
        mode: "ze",
        host: "37.230.137.238",
        port: 27015,
      },
      {
        name: "(俄)CYBERSHOKE-1",
        mode: "ze",
        host: "37.230.210.75",
        port: 27024,
      },
      {
        name: "(俄)CYBERSHOKE-2",
        mode: "ze",
        host: "91.211.118.96",
        port: 27045,
      },
      {
        name: "(俄)THE LAST OF US",
        mode: "ze",
        host: "46.174.52.44",
        port: 27015,
      },
      { name: "(俄)BC18GO", mode: "ze", host: "46.174.53.198", port: 27015 },
      {
        name: "(俄)LEGIONWCSZM",
        mode: "ze",
        host: "146.19.87.169",
        port: 27015,
      },
      { name: "(韩)RSS", mode: "ze", host: "125.129.91.62", port: 27015 },
      { name: "(澳)GHOSTCAP", mode: "ze", host: "203.27.106.53", port: 27015 },
      { name: "(澳)OZLIN", mode: "ze", host: "103.137.14.27", port: 27058 },
      { name: "(美)GFLClan", mode: "ze", host: "216.52.148.47", port: 27015 },
      {
        name: "(法)MAPEADORES",
        mode: "ze",
        host: "87.98.228.196",
        port: 27040,
      },
      {
        name: "(阿根廷)Garryshost",
        mode: "ze",
        host: "45.235.98.233",
        port: 27015,
      },
      { name: "(新加坡)ZeddY", mode: "ze", host: "103.62.48.12", port: 27058 },
      { name: "(波兰)GGEASY", mode: "ze", host: "51.83.230.65", port: 27015 },
      { name: "(德)MizaPro", mode: "ze", host: "95.156.230.11", port: 27015 },
      { name: "(英)SameTeem", mode: "ze", host: "54.38.212.55", port: 27015 },
      { name: "(德)ADRENALINE", mode: "ze", host: "178.63.14.49", port: 27014 },
    ]),
    css: new CSCore.Community("css", "起源服").addServer([
      { name: "(法)NiDE.GG", mode: "ze", host: "149.202.65.122", port: 27072 },
      { name: "(德)SEX", mode: "ze", host: "188.40.132.118", port: 27015 },
      {
        name: "(美)UNLOZE-1",
        mode: "ze",
        host: "135.125.188.157",
        port: 27015,
      },
      {
        name: "(美)UNLOZE-2",
        mode: "ze",
        host: "135.125.188.157",
        port: 27035,
      },
    ]),
  };

  static mapchiname: Record<string, string | null> = JSON.parse(
    fs.readFileSync(`${__dirname}/map.json`).toString()
  );
}