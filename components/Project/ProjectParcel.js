import Link from "next/link";
import AttributeTable from '../../components/AttributeTable';
import PageSection from "../../components/PageSection";

const ProjectParcel = ({ parcelId, parcelData }) => {

  return (
    <PageSection title={`What are the property details?`}>
      <AttributeTable attributes={parcelData} />
      <div className="mt-6 mb-10 text-xs">
        {`Source: `}
        <Link href={`https://cityofdetroit.github.io/parcel-viewer/${parcelId}/`}>
          <a target="_blank">Open Data Portal</a>
        </Link>
      </div>
    </PageSection>
  )
}

export default ProjectParcel;