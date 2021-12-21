let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah money yang akan diberi'
  if (isNaN(txt)) throw 'Hanya angka'
  let moneys = parseInt(txt)
  let users = global.db.data.users
  users[who].money += moneys

  m.reply(`sukses memberikan ${moneys}`)
  conn.fakeReply(m.chat, `+${moneys} Money`, who, m.text)
}
handler.help = ['givemoney']
handler.tags = ['owner']
handler.command = /^givemoney$/
handler.rowner = true

module.exports = handler
