export async function getParcel(parcelId='02001555.') {

  let req = await fetch(`https://apis.detroitmi.gov/assessments/parcel/${parcelId}/`)
  let d = await req.json()

  let attributes = [
    {
      title: 'Parcel ID',
      value: parcelId
    },
    {
      title: 'Taxpayer',
      value: d.taxpayer1
    },
    {
      title: 'Taxpayer address',
      value: `${d.taxpaddr} ${d.taxpcity} ${d.taxpstate} ${d.taxpzip}`
    },
    {
      title: 'Dimensions',
      value: `${d.frontage} ft by ${d.depth} ft`
    },
    {
      title: 'Zoning',
      value: `${d.zoning}`
    }
  ]

  return attributes

}