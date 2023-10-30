const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(src)
    }
    document.head.appendChild(script)
  })
}

const main2 = async () => {
    console.log("Start");
    let theStartTime=new Date().getMilliseconds();
document.writeln(theStartTime)
    let data = await loadScript(
    'https://ajax.googleapis.com/ajax/libs/cesiumjs/1.78/Build/Cesium/Cesium.js',
  )
  console.log(data)
  console.log('Done.., ')
  let theEndTime=new Date().getMilliseconds();
document.writeln(theEndTime)
  document.writeln("The Difference Between Tham are : "+(Number.parseInt(theEndTime)-Number.parseInt(theStartTime)))
}
main2()
