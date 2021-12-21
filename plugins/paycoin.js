let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag orangnya'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw 'Masukkan jumlah coins yang akan diberi'
  if (isNaN(txt)) throw 'Hanya angka'
  let coins = parseInt(txt)
  let coin = coins
  let pjk = Math.ceil(coins * pajak)
  coin += pjk
  if (coin < 1) throw 'Minimal 1'
  let users = global.db.data.users
  if (coin > users[m.sender].coin) throw 'Coin tidak mencukupi untuk mentransfer'
  users[m.sender].coin -= coin
  users[who].coin += coins

  m.reply(`(${-coins} COIN) + (${-pjk} COIN (Pajak 2%)) = ( ${-coin} COIN)`)
  conn.fakeReply(m.chat, `+${coins} COIN`, who, m.text)
}
handler.help = ['paycoin @user <amount>']
handler.tags = ['xp', 'ekonomi']
handler.command = /^paycoin$/
handler.rowner = false

module.exports = handler

