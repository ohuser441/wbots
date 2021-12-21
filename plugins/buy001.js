const cpmoney = 500
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy001/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / cpmoney) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= cpmoney * count) {
    global.db.data.users[m.sender].money -= cpmoney * count
    global.db.data.users[m.sender].multiple += count
    conn.reply(m.chat, `-${cpmoney * count} MONEY\n+ ${count} Multiplier`, m)
  } else conn.reply(m.chat, `Money tidak mencukupi`, m)
}

handler.help = ['buy<Kode Item> <jumlah>']
handler.tags = ['xp', 'ekonomi']
handler.command = /^buy001([0-9]+)|buy001|buy001all$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.money = 0

module.exports = handler
