const POS_o =
{
//: Compress a __positive__ Integer Array
compress__a:
(
  int32_a
) =>
{
  const count_n =
    int32_a
      .length

  const out_a =
    new ArrayBuffer
    (
      POS_o
        .size__n( int32_a )
    )

  const int8_a =
    new Int8Array( out_a )

  let pos = 0

  for
  (
    let at_n = 0;
    at_n < count_n;
    ++at_n
  )
  {
    let int8_n =
      int32_a
        [at_n]

    if
    (
      int8_n < (1 << 7)
    )
    {
      int8_a[pos++] =
        int8_n 
    }

    else if
    (
      int8_n < (1 << 14)
    )
    {
      int8_a[pos++] =
        ( int8_n & 0x7F ) | 0x80

      int8_a[pos++] =
        int8_n >>> 7
    }

    else if
    (
      int8_n < (1 << 21)
    )
    {
      int8_a[pos++] =
        ( int8_n & 0x7F ) | 0x80

      int8_a[pos++] =
        ( ( int8_n >>> 7) & 0x7F ) | 0x80

      int8_a[pos++] =
        int8_n >>> 14
    }

    else if
    (
      int8_n < (1 << 28)
    )
    {
      int8_a[pos++] =
        ( int8_n & 0x7F ) | 0x80

      int8_a[pos++] =
        ( ( int8_n >>> 7) & 0x7F ) | 0x80

      int8_a[pos++] =
        ( ( int8_n >>> 14) & 0x7F ) | 0x80

      int8_a[pos++] =
        int8_n >>> 21
    }

    else
    {
      int8_a[pos++] =
        ( int8_n & 0x7F ) | 0x80

      int8_a[pos++] =
        ( ( int8_n >>> 7) & 0x7F ) | 0x80

      int8_a[pos++] =
        ( ( int8_n >>> 14) & 0x7F ) | 0x80

      int8_a[pos++] =
        ( ( int8_n >>> 21) & 0x7F ) | 0x80

      int8_a[pos++] =
        int8_n >>> 28
    }
  }
  return out_a
}
,




size__n:
(
  int32_a
) =>
{
  const count_n =
    int32_a
      .length

  let size_n = 0

  for
  (
    let at_n = 0;
    at_n < count_n;
    ++at_n
  )
  {
    size_n +=
      POS_o
        .byte__n( int32_a[at_n] )
  }

  return size_n
}
,




byte__n:
(
  int32_n
) =>
  int32_n < (1 << 7)
  ?
    1
  :
    int32_n < (1 << 7)
    ?
      2
    :
      int32_n < (1 << 21)
      ?
        3
      :
        int32_n < (1 << 28)
        ?
          4
        :
          5
,

}




//???module.exports = POS_o
void function
()
{
  //...FS_o
  //...  .writeFile
  //...  (
  //...    'source/make/data/db.json',
  //...    JSON.stringify( db_o ),
  //...    'utf8',
  //...    out_o => console.log( `-- Writing db.json: ${out_o}` )
  //...  )

}()



