let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.01
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag orangnya'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah money yang akan diberi'
  if (isNaN(txt)) throw 'Hanya angka'
  let moneys = parseInt(txt)
  let money = moneys
  let pjk = Math.ceil(moneys * pajak)
  money += pjk
  if (money < 1) throw 'Minimal 1'
  let users = global.db.data.users
  if (money > users[m.sender].money) throw 'Money tidak mencukupi untuk mentransfer'
  users[m.sender].money -= money
  users[who].money += moneys

  m.reply(`(${-moneys} Money) + (${-pjk} MONEY (Pajak 1%)) = ( ${-money} Money)`)
  conn.fakeReply(m.chat, `+${moneys} Money`, who, m.text)
}
handler.help = ['paymoney @user <amount>']
handler.tags = ['xp', 'ekonomi']
handler.command = /^paymoney$/
handler.rowner = false

module.exports = handler

