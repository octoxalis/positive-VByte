const FIC_o =
{
//: Uncompress an array of integer from an ArrayBuffer
//: Return the array
uncompress__a:
(
  int32_a
) =>
{
  const out_a = [] //: output size is not yet known

  const int8_a =
    new Int8Array( int32_a )

  const count_n =
    int8_a
      .length

  let at_n = 0

  while
  (
    count_n > at_n
  )
  {
    let int8_n =
      int8_a
        [at_n++]

    let shift8_n =
      int8_n & 0x7F

    if ( int8_n >= 0)
    {
      out_a
        .push( shift8_n )

      continue
    }

    int8_n =
      int8_a
        [at_n++]

    shift8_n |=
      ( int8_n & 0x7F ) << 7

    if ( int8_n >= 0)
    {
      out_a
        .push( shift8_n )

      continue
    }

    int8_n =
      int8_a
        [at_n++]

    shift8_n |=
      ( int8_n & 0x7F ) << 14

    if ( int8_n >= 0)
    {
      out_a
        .push( shift8_n )

      continue
    }

    int8_n =
      int8_a
        [at_n++]

    shift8_n |=
      ( int8_n & 0x7F ) << 21

    if ( int8_n >= 0)
    {
      out_a
        .push( shift8_n )

      continue
    }

    int8_n =
      int8_a
        [at_n++]

    shift8_n |=
      int8_n << 28

    shift8_n >>>= 0 // make positive

    out_a
      .push( shift8_n )
  }

  return out_a
}
,

}
