const is_major = (birth_date) => {
  const birth_date_year = new Date(birth_date).getFullYear()
  const year_now = new Date().getFullYear()

  const years_old = year_now - birth_date_year

  if (years_old > 18) {
    return true
  }

  return false
}

export default is_major
