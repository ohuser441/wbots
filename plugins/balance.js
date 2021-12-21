let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, money, coin, registered } = global.db.data.users[who]
    let username = conn.getName(who)
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
╭─────
│ Nama: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})
│ Nomor: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
╰───────────────

╭─────
│ Coin: ${coin}
│ Money: ${money}
╰────────────
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['balance [@user]', 'bal [@user]', 'wallet [@user]']
handler.tags = ['xp', 'ekonomi']
handler.command = /^(balance|bal|wallet)$/i
module.exports = handler

