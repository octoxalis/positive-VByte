const FIA_o =
{
  src_s: '',



  generate__s:
  () =>
  {
    let data_s = ''

    for
    (
      let at_n = 0;
      at_n < 360;
      ++at_n
    )
    {
      let in_s = ''

      for
      (
        let in_n = 0;
        in_n < 64;
        ++in_n
      )
      {
        in_s += getRandomInt( 0, 65000 ) + ','
      }

      data_s += `[${in_s}],`
    }

    data_s = `[${data_s}]`

    
    FIA_o
      .src_s = data_s
  }

}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}




void function
()
{
  FIA_o
    .generate__s()

  const from__a =
    new Function
    (
      `return ${FIA_o.src_s}`
    )


  const TIMES_n = 1000

  console.time( 'function' )

  for
  (
    let at_n = 0;
    at_n < TIMES_n;
    ++at_n
  )
  {
    from__a()
  }

  console.timeEnd( 'function' )



}()