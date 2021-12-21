const minsaldo = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^wd_coin/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bankcoin / minsaldo) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].bankcoin >= minsaldo * count) {
    global.db.data.users[m.sender].bankcoin -= count
    global.db.data.users[m.sender].coin += count
    conn.reply(m.chat, `Sukses Withdraw ${count} coin`, m)
  } else conn.reply(m.chat, `Coin Tidak mencukupi untuk withdraw`, m)
}
handler.help = ['wd_coin <jumlah>>']
handler.tags = ['bank', 'ekonomi']
handler.command = /^wd_coin([0-9]+)|wd_coin|wd_coinall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
