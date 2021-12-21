const minsaldo = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^depo_money/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / minsaldo) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= minsaldo * count) {
    global.db.data.users[m.sender].money -= count
    global.db.data.users[m.sender].bankmoney += count
    conn.reply(m.chat, `Sukses Deposit ${count}`, m)
  } else conn.reply(m.chat, `Money Tidak mencukupi untuk deposit`, m)
}
handler.help = ['depo_money <jumlah>>']
handler.tags = ['bank', 'ekonomi']
handler.command = /^depo_money([0-9]+)|depo_money|depo_moneyall$/i
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
