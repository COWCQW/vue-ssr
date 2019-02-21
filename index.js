const fun1 = async () => {
  
  const a  = await new Promise((res)=>{
    setTimeout(()=>{
      res(10)
    },1000)
  })
  console.log(a)
}
const fun2 =  async () => {
  console.log(100)
  return 100
}

fun1()
fun2()