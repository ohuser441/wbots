let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah exp yang akan diberi'
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  if (exp < 1) throw 'Minimal 1'
  let users = global.db.data.users
  users[who].exp += xp

  m.reply(`sukses memberikan ${xp}`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['givexp']
handler.tags = ['owner']
handler.command = /^givexp$/
handler.rowner = true

module.exports = handler
