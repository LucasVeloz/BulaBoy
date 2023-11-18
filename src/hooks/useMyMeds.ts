export const useMyMeds = () => {
  return {
    data: new Array(20).fill({name: 'amoxicilina',
    schedule: '18h',
    id: '' }).map((item, index) => ({
      ...item,
      id: index.toString()
    }))
  }
}
