const mplimit = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buylimit/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / mplimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= mplimit * count) {
    global.db.data.users[m.sender].money -= mplimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `-${mplimit * count} Money\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `Money tidak mencukupi untuk membeli ${count} limit`, m)
}
handler.help = ['buylimit<jumlah limit>', 'buylimit <jumlah limit>', 'buylimitall']
handler.tags = ['xp', 'ekonomi']
handler.command = /^buylimit([0-9]+)|buylimit|buylimitall$/i
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

