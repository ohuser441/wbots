let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag salah satu lah'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah coin yang akan diberi'
  if (isNaN(txt)) throw 'Hanya angka'
  let coins = parseInt(txt)
  let users = global.db.data.users
  users[who].coin += coins

  m.reply(`sukses memberikan ${coins}`)
  conn.fakeReply(m.chat, `+${coins} Coin`, who, m.text)
}
handler.help = ['givecoin']
handler.tags = ['owner']
handler.command = /^givecoin$/
handler.rowner = true

module.exports = handler
