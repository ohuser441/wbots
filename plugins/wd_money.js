const minsaldo = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^wd_money/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bankmoney / minsaldo) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].bankmoney >= minsaldo * count) {
    global.db.data.users[m.sender].bankmoney -= count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `Sukses Withdraw ${count} money`, m)
  } else conn.reply(m.chat, `Money Tidak mencukupi untuk withdraw`, m)
}
handler.help = ['wd_money <jumlah>>']
handler.tags = ['bank', 'ekonomi']
handler.command = /^wd_money([0-9]+)|wd_money|wd_moneyall$/i
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
