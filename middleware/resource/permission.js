const check = {
  'ADMIN': 3,
  'TEACHER': 2,
  'STUDENT': 1
}

module.exports = {
  check: async (user, access) => {
    try {
      let pass = check[user.type.toUpperCase()] >= check[access.toUpperCase()]
  
      if (!pass) {
        // check in permission collection from database
      }
    
      return pass
    } catch(e) {
      console.log(e)
      return false
    }
  },

  values: () => (check),
}