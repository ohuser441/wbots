const cpmoney = 1000 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buymoney/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].coin / cpmoney) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].coin >= cpmoney * count) {
    global.db.data.users[m.sender].coin -= cpmoney * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `-${cpmoney * count} COIN\n+ ${count} Money`, m)
  } else conn.reply(m.chat, `COIN tidak mencukupi untuk membeli ${count} Money`, m)
}
handler.help = ['buymoney<jumlah money>', 'buymoney <jumlah money>', 'buymoneyall']
handler.tags = ['xp', 'ekonomi']
handler.command = /^buymoney([0-9]+)|buymoney|buymoneyall$/i
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

