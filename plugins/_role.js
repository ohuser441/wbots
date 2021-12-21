const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Tengkorak': 0,
  'Senior Trainee': 2,
  'Private': 5,
  'Corporal': 7,
  'Sergeant': 10,
  'Staff Sgt. Grade 1': 13,
  'Staff Sgt. Grade 2': 16,
  'Staff Sgt. Grade 3': 19,
  'Sgt. 1st Class Grade 1': 23,
  'Sgt. 1st Class Grade 2': 27,
  'Sgt. 1st Class Grade 3': 31,
  'Sgt. 1st Class Grade 4': 35,
  'Master Sgt. Grade 1': 40,
  'Master Sgt. Grade 2': 45,
  'Master Sgt. Grade 3': 50,
  'Master Sgt. Grade 4': 55,
  'Master Sgt. Grade 4': 60,
  '2nd Lt. Grade 1': 65,
  '2nd Lt. Grade 2': 70,
  '2nd Lt. Grade 3': 75,
  '2nd Lt. Grade 4': 80,
  '1st Lt. Grade 1': 85,
  '1st Lt. Grade 2': 90,
  '1st Lt. Grade 3': 95,
  '1st Lt. Grade 4': 100,
  '1st Lt. Grade 5': 105,
  'Captain Grade 1': 110,
  'Captain Grade 2': 115,
  'Captain Grade 3': 120,
  'Captain Grade 4': 125,
  'Captain Grade 5': 130,
  'Major Grade 1': 135,
  'Major Grade 2': 140,
  'Major Grade 3': 145,
  'Major Grade 4': 150,
  'Major Grade 5': 155,
  'Lt. Colonel Grade 1': 160,
  'Lt. Colonel Grade 2': 165,
  'Lt. Colonel Grade 3': 170,
  'Lt. Colonel Grade 4': 175,
  'Lt. Colonel Grade 5': 180,
  'Colonel Grade 1': 185,
  'Colonel Grade 2': 190,
  'Colonel Grade 3': 195,
  'Colonel Grade 4': 200,
  'Colonel Grade 5': 205,
  'Brigadier': 210,
  'Major General': 215,
  'Lt. General': 220,
  'General': 225,
  'Commander': 230,
  'GM': 250
}

module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    let level = user.level
    let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
    user.role = role
    return true
  }
}
