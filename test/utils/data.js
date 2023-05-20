function OneCountData(){
  const useData = new Array
  for (let i=1;i<=12;i++) {
    useData.push(Math.ceil(Math.random()*300))
  }
  return useData
}

export default OneCountData