import { CSCore, CS } from "..";

const keys = Object.keys(CS.community) as CSCore.Community.Name[];
const json = {} as any;
for (const key of keys) {
  const value = CS.community[key];
  json[key] = {
    name: value.name,
    label: value.label,
    servers: value.servers.map((server) => ({
      name: server.name,
      mode: server.mode,
      host: server.host,
      port: server.port,
    })),
  };
}

console.log(JSON.stringify(json));
