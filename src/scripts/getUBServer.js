const WebSocket = require('ws');

const ws = new WebSocket('wss://ws.moeub.cn/ws');

ws.on("open", () => {
  console.log("WebSocket opened");
})

const arr = []

ws.on("message", (buffer) => {
  const meta = JSON.parse(buffer.toString())
  if(meta.event === "server/init") {
    const { data } = meta
    arr.push(`${data.name.split(" Q群")[0].padEnd(30, " ")} ${data.host}:${data.port}`)
  }
  // emitter.emit(data.event, data)
  // heartbeatCount = MAXHeartbeatCount
})

setTimeout(() => {
  arr.sort().map((item) => {
    console.log(item)
  })
  process.exit(0)
}, 5000)