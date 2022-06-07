
// Create a function to return true type of variable, i.e.

// type([]) == 'array'
// type({}) == 'object'
// type('') == 'string'
// type(NaN) == 'number'






function type(value) {
  if (Array.isArray(value)) return 'array'
  const detected = typeof value;
  
  if (detected !== 'object') return detected
  if(value === null) return 'null'
  return Object.getPrototypeOf(value).constructor.name.toLowerCase()
}