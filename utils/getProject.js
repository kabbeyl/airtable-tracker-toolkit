export const getProject = (proj) => {
  return {
    id: proj.id,
    name: proj.get('Name') || '',
    slug: proj.get('Slug'),
    lastModified: proj.get('Last Modified'),
    address: proj.get('Address') || '',
    buildType: proj.get('Build type') || '',
    uses: proj.get('Uses') || [],
    status: proj.get('Status') || '',
    notes: proj.get('Notes') || null,
    meetings: proj.get("Meetings") || null,
    synopsis: proj.get("Synopsis") || '',
    parcelId: proj.get("Parcel ID") || '',
   };
}